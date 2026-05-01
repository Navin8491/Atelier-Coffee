"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartSidebar() {
  const { isCartOpen, toggleCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
          onClick={toggleCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-surface-container-low z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-outline-variant/30 flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center">
          <h2 className="text-xl font-display-lg text-primary tracking-widest uppercase">
            Your Cart
          </h2>
          <button
            onClick={toggleCart}
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-on-surface-variant opacity-70">
              <span className="material-symbols-outlined text-4xl mb-4">shopping_bag</span>
              <p className="font-body-md">Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="flex gap-4 border-b border-outline-variant/20 pb-6">
                <div className="w-20 h-20 relative bg-surface-container rounded-DEFAULT overflow-hidden shrink-0">
                  <Image
                    src={item.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuACBCkBIXisWg5Q83nQQuHbZmorzF_wwqx05PANdsgJuU8kGkDUpCOp9Vhp-qJTpgEWdw3orefl5CDFraHegV92MUHl8Xd-WPCngqxDrPtg78ONi-Xt5boGphZX1HVjYLbuvdUqr5SEw9FxzTjJMr0Y9eFirXW_P4YDvstodQr0nOrEOAMVVGDP9IRjRdCGE9i-Z-EzB9rF9A_wSJBwgGbFVral0RY2HyKnogjdLhFkvdM6nGFgMXqvryVViQQ4_lNugWGgzFgh1Pwr"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-headline-sm text-primary text-sm">{item.title}</h3>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-error/70 hover:text-error transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                  <span className="font-body-md text-tertiary-container text-sm mb-auto">
                    ${item.price}
                  </span>
                  
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-surface-container rounded-full hover:bg-primary/20 hover:text-primary transition-colors text-on-surface"
                    >
                      -
                    </button>
                    <span className="font-body-md w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-surface-container rounded-full hover:bg-primary/20 hover:text-primary transition-colors text-on-surface"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-outline-variant/30 bg-surface-container-lowest">
            <div className="flex justify-between items-center mb-6">
              <span className="font-label-md uppercase tracking-widest text-on-surface-variant">
                Subtotal
              </span>
              <span className="font-headline-sm text-primary text-lg">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-primary text-on-primary py-4 font-label-md uppercase tracking-widest hover:bg-secondary transition-all shadow-lg glow-border active:scale-95 rounded-full font-bold">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
