import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import User from "@/models/User";
import dbConnect from "@/lib/mongodb";

export async function protect(req) {
  let token;

  const authHeader = req.headers.get("authorization");
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  } else {
    // Try to get token from cookies
    const cookieHeader = req.headers.get("cookie");
    if (cookieHeader) {
      const cookies = Object.fromEntries(
        cookieHeader.split("; ").map((c) => c.split("="))
      );
      if (cookies.token) {
        token = cookies.token;
      }
    }
  }

  if (!token) {
    return { error: "Not authorized to access this route", status: 401 };
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload: decoded } = await jwtVerify(token, secret);
    await dbConnect();
    const user = await User.findById(decoded.id);

    if (!user) {
      return { error: "User not found with this id", status: 401 };
    }

    return { user };
  } catch (err) {
    return { error: "Not authorized to access this route", status: 401 };
  }
}

export function authorize(...roles) {
  return (user) => {
    if (!roles.includes(user.role)) {
      return {
        error: `User role ${user.role} is not authorized to access this route`,
        status: 403,
      };
    }
    return true;
  };
}
