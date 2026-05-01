import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { protect, authorize } from "@/lib/auth";

export async function GET(req) {
  try {
    const authResult = await protect(req);
    if (authResult.error) return NextResponse.json({ success: false, message: authResult.error }, { status: authResult.status });

    const isAuthorized = authorize("admin", "superadmin")(authResult.user);
    if (isAuthorized.error) return NextResponse.json({ success: false, message: isAuthorized.error }, { status: isAuthorized.status });

    await dbConnect();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, count: blogs.length, data: blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const authResult = await protect(req);
    if (authResult.error) return NextResponse.json({ success: false, message: authResult.error }, { status: authResult.status });

    const isAuthorized = authorize("admin", "superadmin")(authResult.user);
    if (isAuthorized.error) return NextResponse.json({ success: false, message: isAuthorized.error }, { status: isAuthorized.status });

    await dbConnect();
    const body = await req.json();

    const blog = await Blog.create({
      ...body,
      author: authResult.user.fullName
    });

    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
