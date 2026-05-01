export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";
import Menu from "@/models/Menu";
import { protect } from "@/lib/auth";

// Get logged-in user's orders
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
    const orders = await Order.find({ userId: authResult.user._id })
      .populate("items.menuItem", "title image price")
      .sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data: orders },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fetch Orders Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

// Create a new order
export async function POST(req) {
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
    const { items, address } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { success: false, message: "Order items cannot be empty" },
        { status: 400 }
      );
    }

    // Verify prices and calculate total
    let totalPrice = 0;
    const validatedItems = [];

    for (const item of items) {
      const menuItem = await Menu.findById(item.menuItem);
      if (!menuItem) {
        return NextResponse.json(
          { success: false, message: `Menu item not found: ${item.menuItem}` },
          { status: 404 }
        );
      }
      
      validatedItems.push({
        menuItem: menuItem._id,
        quantity: item.quantity,
        price: menuItem.price,
      });

      totalPrice += menuItem.price * item.quantity;
    }

    const order = await Order.create({
      userId: authResult.user._id,
      items: validatedItems,
      totalPrice,
      address: address || "",
    });

    // Clear the cart
    const Cart = (await import("@/models/Cart")).default;
    await Cart.findOneAndUpdate(
      { userId: authResult.user._id },
      { $set: { items: [] } }
    );

    return NextResponse.json(
      { success: true, data: order },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create Order Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
