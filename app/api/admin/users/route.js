import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { protect, authorize } from "@/lib/auth";

// GET all users (Admin only)
export async function GET(req) {
  try {
    const authResult = await protect(req);
    if (authResult.error) {
      return NextResponse.json(
        { success: false, message: authResult.error },
        { status: authResult.status }
      );
    }

    const isAuthorized = authorize("admin", "superadmin")(authResult.user);
    if (isAuthorized.error) {
      return NextResponse.json(
        { success: false, message: isAuthorized.error },
        { status: isAuthorized.status }
      );
    }

    await dbConnect();
    const users = await User.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, count: users.length, data: users },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fetch Users Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
