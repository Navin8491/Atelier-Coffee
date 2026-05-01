export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import Order from "@/models/Order";
import Reservation from "@/models/Reservation";
import ContactMessage from "@/models/ContactMessage";
import { protect, authorize } from "@/lib/auth";

export async function GET(req) {
  try {
    const authResult = await protect(req);
    if (authResult.error) return NextResponse.json({ success: false, message: authResult.error }, { status: authResult.status });

    const isAuthorized = authorize("admin", "superadmin")(authResult.user);
    if (isAuthorized.error) return NextResponse.json({ success: false, message: isAuthorized.error }, { status: isAuthorized.status });

    await dbConnect();

    const [
      totalUsers,
      totalOrders,
      totalReservations,
      pendingOrders,
      messagesCount,
      orders
    ] = await Promise.all([
      User.countDocuments(),
      Order.countDocuments(),
      Reservation.countDocuments(),
      Order.countDocuments({ orderStatus: "preparing" }),
      ContactMessage.countDocuments({ readStatus: false }),
      Order.find({ paymentStatus: "paid" })
    ]);

    const totalRevenue = orders.reduce((acc, order) => acc + order.totalPrice, 0);

    return NextResponse.json({
      success: true,
      data: {
        totalUsers,
        totalOrders,
        totalReservations,
        totalRevenue,
        pendingOrders,
        messagesCount,
      }
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
