import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { STUDIO_CONFIG } from "@/lib/config";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const correctPass = process.env.ADMIN_PASSWORD || STUDIO_CONFIG.adminDefaultPass;

    if (password === correctPass) {
      cookies().set("admin_session", "authenticated_token_2026", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid studio master key" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}

export async function GET() {
  const session = cookies().get("admin_session");
  const isAuthenticated = session?.value === "authenticated_token_2026";
  return NextResponse.json({ authenticated: isAuthenticated });
}

export async function DELETE() {
  cookies().delete("admin_session");
  return NextResponse.json({ success: true });
}
