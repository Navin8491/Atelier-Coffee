import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Reservation from "@/models/Reservation";
import { protect, authorize } from "@/lib/auth";

export async function PUT(req, { params }) {
  try {
    const authResult = await protect(req);
    if (authResult.error) return NextResponse.json({ success: false, message: authResult.error }, { status: authResult.status });

    const isAuthorized = authorize("admin", "superadmin")(authResult.user);
    if (isAuthorized.error) return NextResponse.json({ success: false, message: isAuthorized.error }, { status: isAuthorized.status });

    await dbConnect();
    const { id } = params;
    const body = await req.json();

    const reservation = await Reservation.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!reservation) {
      return NextResponse.json({ success: false, message: "Reservation not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: reservation }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const authResult = await protect(req);
    if (authResult.error) return NextResponse.json({ success: false, message: authResult.error }, { status: authResult.status });

    const isAuthorized = authorize("admin", "superadmin")(authResult.user);
    if (isAuthorized.error) return NextResponse.json({ success: false, message: isAuthorized.error }, { status: isAuthorized.status });

    await dbConnect();
    const { id } = params;

    const reservation = await Reservation.findByIdAndDelete(id);

    if (!reservation) {
      return NextResponse.json({ success: false, message: "Reservation not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
