import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";
import { protect, authorize } from "@/lib/auth";

export async function GET(req) {
  try {
    const authResult = await protect(req);
    if (authResult.error) return NextResponse.json({ success: false, message: authResult.error }, { status: authResult.status });

    const isAuthorized = authorize("admin", "superadmin")(authResult.user);
    if (isAuthorized.error) return NextResponse.json({ success: false, message: isAuthorized.error }, { status: isAuthorized.status });

    await dbConnect();
    const orders = await Order.find({})
      .populate("userId", "fullName email")
      .populate("items.menuItem", "title price")
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, count: orders.length, data: orders }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
