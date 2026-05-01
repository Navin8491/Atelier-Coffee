"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  const categories = ["All", "Whole Bean", "Ground", "Subscriptions", "Limited Edition"];

  useEffect(() => {
    fetchProducts(activeCategory);
  }, [activeCategory]);

  const fetchProducts = async (category) => {
    setLoading(true);
    try {
      const url = category === "All" 
        ? "/api/menu" 
        : `/api/menu?category=${encodeURIComponent(category)}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        // Filter out cafe items if fetching All
        const shopItems = data.data.filter(item => 
          ["Whole Bean", "Ground", "Subscriptions", "Limited Edition"].includes(item.category)
        );
        setProducts(shopItems);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-6 md:px-12 py-12 flex flex-col gap-12">
      {/* Header & Filters */}
      <header className="flex flex-col items-center text-center gap-6">
        <h1 className="font-display-lg text-display-lg text-primary mt-20">
          Refined Collections
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Discover our meticulously sourced selections. Expertly curated and crafted to ensure absolute perfection in every cup.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-label-md text-label-md transition-colors ${
                activeCategory === cat 
                  ? "bg-primary text-on-primary shadow-sm" 
                  : "glass-card text-primary hover:bg-surface-variant"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Shop Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-full flex justify-center py-20 text-on-surface-variant">
            Loading {activeCategory}...
          </div>
        ) : products.length === 0 ? (
          <div className="col-span-full flex flex-col items-center py-20 text-on-surface-variant text-center">
            <span className="material-symbols-outlined text-4xl mb-4 opacity-50">inventory_2</span>
            <p>No products currently available in this collection.</p>
          </div>
        ) : (
          products.map((product) => (
            <article key={product._id} className="glass-card rounded-xl overflow-hidden group shadow-[0_10px_30px_rgba(62,39,35,0.05)] hover:shadow-[0_15px_40px_rgba(62,39,35,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col">
              <div className="relative h-80 overflow-hidden bg-surface-container">
                <Image
                  alt={product.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src={product.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuACBCkBIXisWg5Q83nQQuHbZmorzF_wwqx05PANdsgJuU8kGkDUpCOp9Vhp-qJTpgEWdw3orefl5CDFraHegV92MUHl8Xd-WPCngqxDrPtg78ONi-Xt5boGphZX1HVjYLbuvdUqr5SEw9FxzTjJMr0Y9eFirXW_P4YDvstodQr0nOrEOAMVVGDP9IRjRdCGE9i-Z-EzB9rF9A_wSJBwgGbFVral0RY2HyKnogjdLhFkvdM6nGFgMXqvryVViQQ4_lNugWGgzFgh1Pwr"}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
                {/* Hover CTA */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-caps text-label-caps tracking-widest hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-primary">
                      {product.title}
                    </h3>
                    <span className="font-label-md text-label-md text-secondary">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
