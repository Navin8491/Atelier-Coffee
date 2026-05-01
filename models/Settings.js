import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema(
  {
    siteLogo: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    socialLinks: {
      facebook: { type: String, default: "" },
      instagram: { type: String, default: "" },
      twitter: { type: String, default: "" },
    },
    openingHours: {
      type: String,
      default: "Mon-Sun: 8am - 8pm",
    },
    themeMode: {
      type: String,
      enum: ["light", "dark"],
      default: "dark",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Settings ||
  mongoose.model("Settings", SettingsSchema);
