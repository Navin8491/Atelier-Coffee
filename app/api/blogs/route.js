import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";

// GET all published blogs (Public)
export async function GET(req) {
  try {
    await dbConnect();
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, count: blogs.length, data: blogs },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fetch Blogs Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
