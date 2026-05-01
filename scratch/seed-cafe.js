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

const cafeItems = [
  // Coffees
  { 
    title: "Signature Latte", 
    description: "Espresso, Steamed Milk, Micro-foam.", 
    category: "Hot Coffees", 
    price: 5.50,
    image: "https://images.unsplash.com/photo-1570968915860-54d5c3cea6cb?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Atelier Cold Brew", 
    description: "18-hour steep, Single Origin Beans.", 
    category: "Cold Beverages", 
    price: 4.75,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=800"
  },
  // Food
  { 
    title: "Avocado Toast", 
    description: "Smashed avocado, radish, and microgreens on artisanal sourdough.", 
    category: "Food", 
    price: 9.50,
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Prosciutto Panini", 
    description: "Prosciutto di Parma, fresh mozzarella, and fig jam on ciabatta.", 
    category: "Food", 
    price: 11.00,
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=800"
  },
  // Desserts
  { 
    title: "Almond Croissant", 
    description: "Twice-baked croissant with almond frangipane and flaked almonds.", 
    category: "Desserts", 
    price: 4.50,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Lemon Tart", 
    description: "Classic French lemon tart with a buttery shortbread crust.", 
    category: "Desserts", 
    price: 6.00,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800"
  },
  // Shop Items
  { 
    title: "Ethiopian Yirgacheffe Beans", 
    description: "Light roast with delicate floral notes of jasmine and bright bergamot.", 
    category: "Whole Bean", 
    price: 22.00,
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Colombian Supremo Ground", 
    description: "Medium roast. Rich chocolate and caramel notes, pre-ground for drip.", 
    category: "Ground", 
    price: 18.50,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Roaster's Choice Subscription", 
    description: "A monthly delivery of our finest seasonal single-origin beans.", 
    category: "Subscriptions", 
    price: 19.00,
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Geisha Limited Edition", 
    description: "Extremely rare microlot with notes of papaya, jasmine, and honey.", 
    category: "Limited Edition", 
    price: 45.00,
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800"
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    // clear existing items
    await Menu.deleteMany({});
    console.log("Cleared old menu items.");

    await Menu.insertMany(cafeItems);
    console.log(`Successfully seeded ${cafeItems.length} cafe items with images.`);

    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
}

seed();
