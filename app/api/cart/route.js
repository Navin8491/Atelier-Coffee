import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/mongodb";
import Cart from "@/models/Cart";
import { jwtVerify } from "jose";

// Helper to get current session identifiers
async function getSessionIdentifiers() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const guestSessionId = cookieStore.get("guest_session_id")?.value;

  let userId = null;
  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload: decoded } = await jwtVerify(token, secret);
      userId = decoded.id;
    } catch (err) {
      // Invalid token
    }
  }

  return { userId, guestSessionId };
}

export async function GET(req) {
  try {
    await dbConnect();
    const { userId, guestSessionId } = await getSessionIdentifiers();

    let cart;
    if (userId) {
      cart = await Cart.findOne({ userId });
    } else if (guestSessionId) {
      cart = await Cart.findOne({ guestId: guestSessionId });
    }

    if (!cart) {
      return NextResponse.json({ success: true, cart: { items: [] } }, { status: 200 });
    }

    return NextResponse.json({ success: true, cart }, { status: 200 });
  } catch (error) {
    console.error("Cart GET Error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    let { userId, guestSessionId } = await getSessionIdentifiers();

    // If no user and no guest session, create a guest session
    let isNewGuest = false;
    if (!userId && !guestSessionId) {
      guestSessionId = crypto.randomUUID();
      isNewGuest = true;
    }

    const { menuItem, name, price, image, quantity = 1 } = await req.json();

    if (!menuItem) {
      return NextResponse.json({ success: false, message: "Menu item ID is required" }, { status: 400 });
    }

    let cart;
    if (userId) {
      cart = await Cart.findOne({ userId });
    } else {
      cart = await Cart.findOne({ guestId: guestSessionId });
    }

    if (!cart) {
      // Create new cart
      cart = new Cart({
        userId: userId || null,
        guestId: userId ? null : guestSessionId,
        items: [{ menuItem, name, price, image, quantity }],
      });
    } else {
      // Update existing cart
      const itemIndex = cart.items.findIndex((item) => item.menuItem.toString() === menuItem);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ menuItem, name, price, image, quantity });
      }
    }

    await cart.save();

    const response = NextResponse.json({ success: true, cart }, { status: 200 });

    if (isNewGuest) {
      // Set the guest session cookie
      response.cookies.set("guest_session_id", guestSessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });
    }

    return response;
  } catch (error) {
    console.error("Cart POST Error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await dbConnect();
    const { userId, guestSessionId } = await getSessionIdentifiers();

    if (!userId && !guestSessionId) {
      return NextResponse.json({ success: false, message: "No session found" }, { status: 401 });
    }

    const { menuItem, quantity } = await req.json();

    let cart;
    if (userId) {
      cart = await Cart.findOne({ userId });
    } else {
      cart = await Cart.findOne({ guestId: guestSessionId });
    }

    if (!cart) {
      return NextResponse.json({ success: false, message: "Cart not found" }, { status: 404 });
    }

    const itemIndex = cart.items.findIndex((item) => item.menuItem.toString() === menuItem);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity = quantity;
      await cart.save();
      return NextResponse.json({ success: true, cart }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, message: "Item not found in cart" }, { status: 404 });
    }
  } catch (error) {
    console.error("Cart PUT Error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await dbConnect();
    const { userId, guestSessionId } = await getSessionIdentifiers();

    if (!userId && !guestSessionId) {
      return NextResponse.json({ success: false, message: "No session found" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const menuItem = searchParams.get("menuItem");
    const clear = searchParams.get("clear");

    let cart;
    if (userId) {
      cart = await Cart.findOne({ userId });
    } else {
      cart = await Cart.findOne({ guestId: guestSessionId });
    }

    if (!cart) {
      return NextResponse.json({ success: false, message: "Cart not found" }, { status: 404 });
    }

    if (clear === "true") {
      cart.items = [];
    } else if (menuItem) {
      cart.items = cart.items.filter((item) => item.menuItem.toString() !== menuItem);
    } else {
      return NextResponse.json({ success: false, message: "Provide menuItem or clear=true" }, { status: 400 });
    }

    await cart.save();
    return NextResponse.json({ success: true, cart }, { status: 200 });
  } catch (error) {
    console.error("Cart DELETE Error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
