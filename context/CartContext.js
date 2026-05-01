"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// Helper to get auth headers for the current tab's session
const getAuthHeaders = () => {
  if (typeof window === "undefined") return {};
  const token = sessionStorage.getItem("authToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch cart from backend
  const fetchCart = async () => {
    try {
      const res = await fetch("/api/cart", { headers: getAuthHeaders() });
      const data = await res.json();
      if (data.success && data.cart) {
        // Map menuItem to _id for UI compatibility
        const mappedItems = data.cart.items.map((item) => ({
          ...item,
          _id: item.menuItem,
        }));
        setCartItems(mappedItems);
      }
    } catch (error) {
      console.error("Failed to fetch cart", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    // Optimistic UI update
    setCartItems((prev) => {
      const existing = prev.find((item) => item._id === product._id);
      if (existing) {
        return prev.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);

    // API Call
    try {
      await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...getAuthHeaders() },
        body: JSON.stringify({
          menuItem: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        }),
      });
    } catch (e) {
      console.error("Failed to add to cart", e);
    }
  };

  const removeFromCart = async (productId) => {
    // Optimistic UI update
    setCartItems((prev) => prev.filter((item) => item._id !== productId));

    // API Call
    try {
      await fetch(`/api/cart?menuItem=${productId}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
    } catch (e) {
      console.error("Failed to remove from cart", e);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (quantity < 1) return;
    
    // Optimistic UI update
    setCartItems((prev) =>
      prev.map((item) => (item._id === productId ? { ...item, quantity } : item))
    );

    // API Call
    try {
      await fetch("/api/cart", {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...getAuthHeaders() },
        body: JSON.stringify({ menuItem: productId, quantity }),
      });
    } catch (e) {
      console.error("Failed to update cart quantity", e);
    }
  };

  const clearCart = async () => {
    setCartItems([]);
    try {
      await fetch("/api/cart?clear=true", {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
    } catch (e) {
      console.error("Failed to clear cart", e);
    }
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // We expose fetchCart so it can be called manually after login
  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        cartTotal,
        setIsCartOpen,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
