"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Client-side admin guard (replaces server middleware)
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/login");
      } else if (user.role !== "admin") {
        router.replace("/");
      }
    }
  }, [user, loading, router]);

  // Show spinner while auth is being checked
  if (loading || !user || user.role !== "admin") {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }


  const navItems = [
    { name: "Dashboard", href: "/admin", icon: "dashboard" },
    { name: "Users", href: "/admin/users", icon: "group" },
    { name: "Menu Items", href: "/admin/menu", icon: "restaurant_menu" },
    { name: "Orders", href: "/admin/orders", icon: "receipt_long" },
    { name: "Messages", href: "/admin/messages", icon: "mail" },
    { name: "Blog & Content", href: "/admin/blogs", icon: "article" },
    { name: "Settings", href: "/admin/settings", icon: "settings" },
  ];

  return (
    <div className="flex h-screen bg-background text-on-background overflow-hidden font-sans">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 bg-surface border-r border-outline-variant/30 h-full shadow-[20px_0_40px_rgba(0,0,0,0.5)] z-20">
        <div className="p-8">
          <Link href="/" className="flex flex-col gap-1 items-start">
            <span className="font-display-lg text-[24px] text-gradient font-bold tracking-wider leading-none">
              VD'S CAFE
            </span>
            <span className="font-label-sm text-[10px] text-secondary tracking-widest uppercase">
              Admin Portal
            </span>
          </Link>
        </div>
        <nav className="flex-grow px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg font-label-md text-[14px] transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-on-primary shadow-lg glow-border"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-6 border-t border-outline-variant/30">
          <button
            onClick={async () => { await logout(); router.push("/login"); }}
            className="flex items-center gap-4 px-4 py-3 w-full text-left rounded-lg text-error hover:bg-error-container/10 transition-colors font-label-md text-[14px]">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col h-full overflow-hidden relative bg-[#0a0a0b]">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-surface border-b border-outline-variant/30 z-30 relative">
          <Link href="/" className="flex flex-col gap-0 items-start">
            <span className="font-display-lg text-[18px] text-gradient font-bold tracking-wider leading-none">
              VD'S CAFE
            </span>
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary p-2 bg-surface-container rounded-md"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </header>

        {/* Mobile Sidebar Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[65px] left-0 w-full bg-surface border-b border-outline-variant/30 shadow-xl z-30">
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg font-label-md text-[14px] ${
                      isActive
                        ? "bg-primary text-on-primary shadow-md"
                        : "text-on-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}

        {/* Content Scrollable Area */}
        <main className="flex-grow overflow-y-auto p-4 md:p-8 lg:p-10 relative z-10">
          {children}
        </main>
      </div>
    </div>
  );
}
