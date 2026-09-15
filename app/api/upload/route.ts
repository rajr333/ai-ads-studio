import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const isVideo = file.type.startsWith("video/") || file.name.match(/\.(mp4|webm|mov)$/i);
    const subfolder = isVideo ? "videos" : "images";
    const uploadDir = path.join(process.cwd(), "public", subfolder);

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Preserve clean filename and extension
    const ext = path.extname(file.name) || (isVideo ? ".mp4" : ".jpg");
    const baseName = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
    const uniqueName = `${Date.now()}_${baseName}${ext}`;
    const filePath = path.join(uploadDir, uniqueName);

    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/${subfolder}/${uniqueName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename: uniqueName,
      type: file.type || (isVideo ? "video/mp4" : "image/jpeg"),
      size: file.size,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Upload failed" }, { status: 500 });
  }
}
