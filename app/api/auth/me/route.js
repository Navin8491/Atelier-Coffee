import { NextResponse } from "next/server";
import { protect } from "@/lib/auth";

export async function GET(req) {
  try {
    const authResult = await protect(req);
    
    if (authResult.error) {
      return NextResponse.json(
        { success: false, message: authResult.error },
        { status: authResult.status }
      );
    }

    const { user } = authResult;

    return NextResponse.json(
      {
        success: true,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
          phone: user.phone,
          profileImage: user.profileImage,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get Me Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
