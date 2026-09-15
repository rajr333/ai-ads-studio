import { NextResponse } from "next/server";
import { getInquiries, saveInquiry } from "@/lib/storage";
import { Inquiry } from "@/lib/data";

export async function GET() {
  try {
    const inquiries = getInquiries();
    return NextResponse.json(inquiries);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch inquiries" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.email || !body.brand) {
      return NextResponse.json({ error: "Name, email and brand are required" }, { status: 400 });
    }

    const inquiry: Inquiry = {
      id: `inq-${Date.now()}`,
      name: body.name,
      email: body.email,
      brand: body.brand,
      product: body.product || "",
      industry: body.industry || "LUXURY",
      serviceNeeded: body.serviceNeeded || "AI Video Ads",
      budgetRange: body.budgetRange || "$3,000 - $5,000",
      message: body.message || "",
      createdAt: new Date().toISOString(),
    };

    saveInquiry(inquiry);
    return NextResponse.json(inquiry, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
