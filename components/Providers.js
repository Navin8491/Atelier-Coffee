"use client";

import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
        <CartSidebar />
      </CartProvider>
    </AuthProvider>
  );
}
