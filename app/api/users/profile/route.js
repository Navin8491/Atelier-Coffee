import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { protect } from "@/lib/auth";
import bcrypt from "bcryptjs";

// Get logged-in user's profile
export async function GET(req) {
  try {
    const authResult = await protect(req);
    if (authResult.error) {
      return NextResponse.json(
        { success: false, message: authResult.error },
        { status: authResult.status }
      );
    }

    // Auth returns user, but let's re-fetch just in case
    await dbConnect();
    const user = await User.findById(authResult.user._id);

    return NextResponse.json(
      { success: true, data: user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fetch Profile Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

// Update logged-in user's profile
export async function PUT(req) {
  try {
    const authResult = await protect(req);
    if (authResult.error) {
      return NextResponse.json(
        { success: false, message: authResult.error },
        { status: authResult.status }
      );
    }

    await dbConnect();
    const body = await req.json();
    const { fullName, phone, profileImage, password } = body;

    const user = await User.findById(authResult.user._id).select("+password");

    if (fullName) user.fullName = fullName;
    if (phone) user.phone = phone;
    if (profileImage) user.profileImage = profileImage;

    // Optional password update
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();

    return NextResponse.json(
      { 
        success: true, 
        data: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          phone: user.phone,
          profileImage: user.profileImage,
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update Profile Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
