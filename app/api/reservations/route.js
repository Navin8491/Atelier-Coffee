import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Reservation from "@/models/Reservation";
import { protect } from "@/lib/auth";

// Get logged-in user's reservations
export async function GET(req) {
  try {
    const authResult = await protect(req);
    if (authResult.error) {
      return NextResponse.json(
        { success: false, message: authResult.error },
        { status: authResult.status }
      );
    }

    await dbConnect();
    const reservations = await Reservation.find({ userId: authResult.user._id }).sort({
      createdAt: -1,
    });

    return NextResponse.json(
      { success: true, data: reservations },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fetch Reservations Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

// Create a new reservation
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    // Require user to be logged in
    const authResult = await protect(req);
    if (authResult.error) {
      return NextResponse.json(
        { success: false, message: authResult.error },
        { status: authResult.status }
      );
    }
    const userId = authResult.user._id;

    const { name, phone, guests, date, time, message } = body;

    if (!name || !phone || !guests || !date || !time) {
      return NextResponse.json(
        { success: false, message: "Please provide all required fields" },
        { status: 400 }
      );
    }

    const reservation = await Reservation.create({
      userId,
      name,
      phone,
      guests,
      date,
      time,
      message: message || "",
    });

    return NextResponse.json(
      { success: true, data: reservation },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create Reservation Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
