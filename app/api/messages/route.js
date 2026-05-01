import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";

// Public route to submit a contact message
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please provide all required fields" },
        { status: 400 }
      );
    }

    const contactMsg = await ContactMessage.create({
      name,
      email,
      subject: subject || "General Inquiry",
      message,
    });

    return NextResponse.json(
      { success: true, data: contactMsg },
      { status: 201 }
    );
  } catch (error) {
    console.error("Submit Message Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
