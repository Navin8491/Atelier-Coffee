import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Menu from "@/models/Menu";
import { protect, authorize } from "@/lib/auth";

export async function GET(req) {
  try {
    const authResult = await protect(req);
    if (authResult.error) return NextResponse.json({ success: false, message: authResult.error }, { status: authResult.status });

    const isAuthorized = authorize("admin", "superadmin")(authResult.user);
    if (isAuthorized.error) return NextResponse.json({ success: false, message: isAuthorized.error }, { status: isAuthorized.status });

    await dbConnect();
    const menuItems = await Menu.find({}).sort({ category: 1, title: 1 });
    return NextResponse.json({ success: true, data: menuItems }, { status: 200 });
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

    const menuItem = await Menu.create(body);

    return NextResponse.json({ success: true, data: menuItem }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
