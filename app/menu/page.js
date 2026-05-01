"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  const categories = ["All", "Hot Coffees", "Cold Beverages", "Food", "Desserts"];

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
        // Filter out shop items if fetching All
        const cafeItems = data.data.filter(item => 
          ["Hot Coffees", "Cold Beverages", "Food", "Desserts"].includes(item.category)
        );
        setProducts(cafeItems);
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
          Curated Selections
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Explore our meticulously crafted offerings, designed to elevate your
          daily ritual.
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

      {/* Menu Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="col-span-full flex justify-center py-20 text-on-surface-variant">
            Loading {activeCategory}...
          </div>
        ) : products.length === 0 ? (
          <div className="col-span-full flex flex-col items-center py-20 text-on-surface-variant text-center">
            <span className="material-symbols-outlined text-4xl mb-4 opacity-50">restaurant_menu</span>
            <p>No items currently available in this category.</p>
          </div>
        ) : (
          products.map((product) => (
            <article key={product._id} className="glass-card rounded-xl overflow-hidden group shadow-[0_10px_30px_rgba(62,39,35,0.05)] hover:shadow-[0_15px_40px_rgba(62,39,35,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image
                  alt={product.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src={product.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuDayaru_D_BDkUxBTF1d-VVZpot5fhFg90cFEycz2bczN-DNMidYlN6qqsAmlATsSbPSkmzGLwk93fqPWzY7Pfh2QEG26qIFnUshk8A6jr_ZZpdSZ4ZvFlcI-pDB_jsLJ-sE0-S7bhbct43SfNULYYWkeW5wGTHfy8FjN5S3hmKugpruXXhE7S9yvjVayNOSuV--GgcuSOwVqfVFVlLYEi7SqjTSP_Ltbp7DNNI8ZskSer1rIRj_5KT8S9R0tX8Td6oqdd83GMRbMxG"}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                  <p className="text-white text-center font-body-md text-body-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {product.description}
                  </p>
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
                    {product.category}
                  </p>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-3 mt-4 border border-secondary text-secondary font-label-md text-label-md rounded-DEFAULT hover:bg-secondary hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm" data-icon="add">
                    add
                  </span>{" "}
                  Add to Cart
                </button>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
