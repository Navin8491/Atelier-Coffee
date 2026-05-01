"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { toggleCart, cartItems } = useCart();
  const { user, logout } = useAuth();

  if (pathname?.startsWith('/admin')) return null;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Shop', href: '/shop' },
    { name: 'Locations', href: '/locations' },
    { name: 'Story', href: '/story' },
  ];

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  const handleUserIconClick = () => {
    if (user) {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10 shadow-xl shadow-black/50">
      <div className="flex justify-between items-center px-12 py-6 w-full max-w-container-max mx-auto">
        <div className="text-2xl font-display-lg tracking-widest uppercase text-gradient font-bold">
          Atelier Coffee
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`font-label-md text-sm tracking-widest uppercase transition-colors duration-500 ${isActive ? 'text-on-background border-b border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-6 items-center">
          <button 
            onClick={toggleCart} 
            className="relative text-on-background hover:text-primary transition-colors active:scale-95 duration-300"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>shopping_bag</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-on-primary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
          
          <div className="relative">
            <button 
              onClick={handleUserIconClick}
              className="text-on-background hover:text-primary transition-colors active:scale-95 duration-300 flex items-center"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
            </button>
          </div>

          <Link 
            href="/shop"
            className="hidden md:inline-block bg-primary text-on-primary px-8 py-3 rounded-full font-label-md uppercase tracking-wider hover:bg-secondary transition-all shadow-lg glow-border active:scale-95 duration-300 font-bold"
          >
            ORDER NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}
