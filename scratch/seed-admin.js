import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import fs from "fs";
import User from "../models/User.js";

const envLocal = fs.readFileSync(".env.local", "utf-8");
envLocal.split("\n").forEach((line) => {
  const [key, value] = line.split("=");
  if (key && value) process.env[key.trim()] = value.trim();
});

async function seedAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const existingAdmin = await User.findOne({ email: "admin@atelier.com" });
    if (existingAdmin) {
      console.log("Admin account already exists!");
      process.exit(0);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin123", salt);

    await User.create({
      fullName: "Atelier Admin",
      email: "admin@atelier.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin account created successfully!");
    console.log("Email: admin@atelier.com");
    console.log("Password: admin123");

    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
}

seedAdmin();
