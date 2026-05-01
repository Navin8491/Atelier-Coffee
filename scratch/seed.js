import mongoose from "mongoose";
import fs from "fs";

const envLocal = fs.readFileSync(".env.local", "utf-8");
envLocal.split("\n").forEach((line) => {
  const [key, value] = line.split("=");
  if (key && value) process.env[key.trim()] = value.trim();
});

const MenuSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["Hot Coffees", "Cold Beverages", "Food", "Desserts", "Whole Bean", "Ground", "Subscriptions", "Limited Edition"],
    },
    image: { type: String, default: "" },
    price: { type: Number, required: true },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Menu = mongoose.models.Menu || mongoose.model("Menu", MenuSchema);

const shopItems = [
  // Whole Bean
  {
    title: "Atelier Roast",
    description: "Our signature house blend. Balanced, rich, and dependably smooth.",
    category: "Whole Bean",
    price: 24,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACBCkBIXisWg5Q83nQQuHbZmorzF_wwqx05PANdsgJuU8kGkDUpCOp9Vhp-qJTpgEWdw3orefl5CDFraHegV92MUHl8Xd-WPCngqxDrPtg78ONi-Xt5boGphZX1HVjYLbuvdUqr5SEw9FxzTjJMr0Y9eFirXW_P4YDvstodQr0nOrEOAMVVGDP9IRjRdCGE9i-Z-EzB9rF9A_wSJBwgGbFVral0RY2HyKnogjdLhFkvdM6nGFgMXqvryVViQQ4_lNugWGgzFgh1Pwr"
  },
  {
    title: "High Altitude Bourbon",
    description: "Single origin from Colombia. Bright acidity with a floral finish.",
    category: "Whole Bean",
    price: 28,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK6f3Hey7mx__uA8Z7MWI4CyUodywu4wC55ryYZmr0tPgVGkm4syYMXLPzHhHGBT16SDTRLMLF966fK2_kAjBKtaUICEkWW1lgOaKDtfhHzNgnbGjUNBy6nJJULMaB2xvBTU0DHT9wLP2exkkY8fqNEFr9K2_N64Og5ZaCJ_MKMCcKeSjGbwkT2kCGA8TT6SO0rAXPwX06X4Rn4uV-wMITKX1iyK9e9R5Wx1hMj-y53FjHuCfZCZrb1FgTNGbGol-44kJHjsVTvPk1"
  },
  {
    title: "Midnight Reserve",
    description: "An intensely dark roast for those who prefer a bold, smoky profile.",
    category: "Whole Bean",
    price: 32,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAihPNLWkCoHQmRaStBNGfYaG7VlgVT25ZHfd1zOor_cL6qHRrh3aUA1jUUNho-L3u1_IOj7-cd_SeVRh7dQUTeyh3cv6F6GLKtI1rBJJ_8o4lre4VQPUrZdJXLPZaj_JV6-GEUnTaFUqka71DpM_DQXcOu8TB09aSovFxVhRpWMonlwebcHaFf7ibUcPD6RqwFdm2f4yA34LsyiLh6fx-APCGpJnQWp4oY6sFcFP_8UT47rCgHR-s12s8G5qlLQeiJkRbI31k9Safs"
  },
  
  // Ground
  {
    title: "Morning Ground Blend",
    description: "Perfectly pre-ground for your drip machine. A bright way to start the day.",
    category: "Ground",
    price: 22,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACBCkBIXisWg5Q83nQQuHbZmorzF_wwqx05PANdsgJuU8kGkDUpCOp9Vhp-qJTpgEWdw3orefl5CDFraHegV92MUHl8Xd-WPCngqxDrPtg78ONi-Xt5boGphZX1HVjYLbuvdUqr5SEw9FxzTjJMr0Y9eFirXW_P4YDvstodQr0nOrEOAMVVGDP9IRjRdCGE9i-Z-EzB9rF9A_wSJBwgGbFVral0RY2HyKnogjdLhFkvdM6nGFgMXqvryVViQQ4_lNugWGgzFgh1Pwr"
  },
  {
    title: "Espresso Ground Reserve",
    description: "Fine ground for espresso. Rich crema and deep flavor.",
    category: "Ground",
    price: 25,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK6f3Hey7mx__uA8Z7MWI4CyUodywu4wC55ryYZmr0tPgVGkm4syYMXLPzHhHGBT16SDTRLMLF966fK2_kAjBKtaUICEkWW1lgOaKDtfhHzNgnbGjUNBy6nJJULMaB2xvBTU0DHT9wLP2exkkY8fqNEFr9K2_N64Og5ZaCJ_MKMCcKeSjGbwkT2kCGA8TT6SO0rAXPwX06X4Rn4uV-wMITKX1iyK9e9R5Wx1hMj-y53FjHuCfZCZrb1FgTNGbGol-44kJHjsVTvPk1"
  },

  // Subscriptions
  {
    title: "Weekly Discovery Box",
    description: "A new single-origin roast delivered to your door every week.",
    category: "Subscriptions",
    price: 80,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAihPNLWkCoHQmRaStBNGfYaG7VlgVT25ZHfd1zOor_cL6qHRrh3aUA1jUUNho-L3u1_IOj7-cd_SeVRh7dQUTeyh3cv6F6GLKtI1rBJJ_8o4lre4VQPUrZdJXLPZaj_JV6-GEUnTaFUqka71DpM_DQXcOu8TB09aSovFxVhRpWMonlwebcHaFf7ibUcPD6RqwFdm2f4yA34LsyiLh6fx-APCGpJnQWp4oY6sFcFP_8UT47rCgHR-s12s8G5qlLQeiJkRbI31k9Safs"
  },
  {
    title: "Monthly Classic Plan",
    description: "2 bags of our Atelier House Roast delivered monthly.",
    category: "Subscriptions",
    price: 45,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACBCkBIXisWg5Q83nQQuHbZmorzF_wwqx05PANdsgJuU8kGkDUpCOp9Vhp-qJTpgEWdw3orefl5CDFraHegV92MUHl8Xd-WPCngqxDrPtg78ONi-Xt5boGphZX1HVjYLbuvdUqr5SEw9FxzTjJMr0Y9eFirXW_P4YDvstodQr0nOrEOAMVVGDP9IRjRdCGE9i-Z-EzB9rF9A_wSJBwgGbFVral0RY2HyKnogjdLhFkvdM6nGFgMXqvryVViQQ4_lNugWGgzFgh1Pwr"
  },

  // Limited Edition
  {
    title: "Geisha Gesha 2026",
    description: "Rare and exquisite. Notes of jasmine, peach, and bergamot.",
    category: "Limited Edition",
    price: 150,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK6f3Hey7mx__uA8Z7MWI4CyUodywu4wC55ryYZmr0tPgVGkm4syYMXLPzHhHGBT16SDTRLMLF966fK2_kAjBKtaUICEkWW1lgOaKDtfhHzNgnbGjUNBy6nJJULMaB2xvBTU0DHT9wLP2exkkY8fqNEFr9K2_N64Og5ZaCJ_MKMCcKeSjGbwkT2kCGA8TT6SO0rAXPwX06X4Rn4uV-wMITKX1iyK9e9R5Wx1hMj-y53FjHuCfZCZrb1FgTNGbGol-44kJHjsVTvPk1"
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    // clear existing shop items
    await Menu.deleteMany({ category: { $in: ["Whole Bean", "Ground", "Subscriptions", "Limited Edition"] } });
    console.log("Cleared old shop items.");

    await Menu.insertMany(shopItems);
    console.log("Successfully seeded shop items.");

    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
}

seed();
