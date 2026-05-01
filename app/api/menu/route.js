import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Menu from "@/models/Menu";

export async function GET(req) {
  try {
    await dbConnect();
    
    // Parse query params
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    
    // Build query
    const query = { isAvailable: true };
    if (category && category !== "All") {
      query.category = category;
    }

    const menuItems = await Menu.find(query).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, count: menuItems.length, data: menuItems },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fetch Menu Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
