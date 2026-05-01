import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import Cart from "@/models/Cart";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Please provide email and password" },
        { status: 400 }
      );
    }

    // Check for user
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ id: String(user._id), role: user.role })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("30d")
      .sign(secret);

    // --- Merge Guest Cart ---
    const guestSessionId = req.cookies.get("guest_session_id")?.value;
    if (guestSessionId) {
      const guestCart = await Cart.findOne({ guestId: guestSessionId });
      if (guestCart) {
        let userCart = await Cart.findOne({ userId: user._id });
        
        if (userCart) {
          // Merge items
          for (const gItem of guestCart.items) {
            const existingItemIndex = userCart.items.findIndex(
              (uItem) => uItem.menuItem.toString() === gItem.menuItem.toString()
            );
            if (existingItemIndex > -1) {
              userCart.items[existingItemIndex].quantity += gItem.quantity;
            } else {
              userCart.items.push(gItem);
            }
          }
          await userCart.save();
          await Cart.findByIdAndDelete(guestCart._id);
        } else {
          // Transfer ownership
          guestCart.userId = user._id;
          guestCart.guestId = null;
          await guestCart.save();
        }
      }
    }

    const response = NextResponse.json(
      {
        success: true,
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
        },
      },
      { status: 200 }
    );


    
    // Clear guest session cookie if exists
    if (guestSessionId) {
      response.cookies.delete("guest_session_id");
    }

    return response;
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
