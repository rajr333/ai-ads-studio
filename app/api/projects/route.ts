import { NextResponse } from "next/server";
import { getProjects, addProject } from "@/lib/storage";
import { Project } from "@/lib/data";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const projects = getProjects();
    return NextResponse.json(projects, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.title || !body.slug) {
      return NextResponse.json({ error: "Title and slug are required" }, { status: 400 });
    }

    const defaultApproach = {
      visualDirection: body.theApproach?.visualDirection || "Editorial commercial noir with dramatic rim light.",
      background: body.theApproach?.background || "Deep obsidian architectural set with subtle reflections.",
      lighting: body.theApproach?.lighting || "High-contrast chiaroscuro key with liquid edge reflections.",
      character: body.theApproach?.character || "Solo dynamic talent interacting with hero product.",
      productStyling: body.theApproach?.productStyling || "Pristine product geometry with razor-sharp branding.",
      cameraMovement: body.theApproach?.cameraMovement || "Slow cinematic orbital tracking transitioning to macro detail.",
      storytelling: body.theApproach?.storytelling || "From raw material tension to triumphant commercial finish.",
    };

    const defaultBreakdown =
      body.creativeBreakdown && body.creativeBreakdown.length > 0
        ? body.creativeBreakdown
        : [
            { step: "01", title: "ORIGINAL PRODUCT", description: "Studio packshot and CAD specifications." },
            { step: "02", title: "CREATIVE CONCEPT", description: "Art direction moodboards and color scheme." },
            { step: "03", title: "AI KEYFRAME GENERATION", description: "Photorealistic style-locked keyframe generation." },
            { step: "04", title: "AI MOTION SYNTHESIS", description: "Generative video diffusion simulation." },
            { step: "05", title: "FINAL COMMERCIAL MASTER", description: "Sound-synced color-graded export." },
          ];

    const defaultScenes =
      body.scenes && body.scenes.length > 0
        ? body.scenes
        : [
            {
              sceneNumber: "01",
              title: "Hook Shot",
              duration: "0.0s - 1.5s",
              camera: "Dynamic macro reveal",
              purpose: "3-second thumb-stopping scroll hook",
              description: "Product breaches the frame under moving light.",
              thumbnailUrl: body.thumbnailUrl || "/images/product-hero-perfume.jpg",
            },
          ];

    const newProject: Project = {
      ...body,
      id: body.id || `proj-${Date.now()}`,
      order: body.order ?? Date.now(),
      status: body.status || "published",
      overview: body.overview || body.tagline || "A high-impact cinematic AI video advertisement.",
      theIdea: body.theIdea || "Engineered to deliver high visual friction and prestige brand positioning in mobile feeds.",
      theApproach: defaultApproach,
      theResult: body.theResult || "Commercial-grade video master optimized for paid social conversion.",
      creativeBreakdown: defaultBreakdown,
      scenes: defaultScenes,
      beforeAfter: body.beforeAfter || {
        rawProductImg: body.thumbnailUrl || "/images/product-hero-perfume.jpg",
        aiConceptImg: body.thumbnailUrl || "/images/product-hero-perfume.jpg",
        finalAdVideo: body.videoUrl,
      },
    };

    addProject(newProject);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
