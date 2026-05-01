"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen pt-32 flex justify-center bg-background">
        <p className="text-on-surface-variant">Loading profile...</p>
      </div>
    );
  }

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="bg-surface-container-lowest p-8 md:p-12 border border-[#E6D5C3] rounded-DEFAULT shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/30"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/30"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/30"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30"></div>

          <h1 className="font-headline-lg text-headline-lg text-primary mb-2">My Profile</h1>
          <p className="font-body-md text-on-surface-variant uppercase tracking-widest text-sm mb-8">
            Manage your account
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-surface-container rounded-DEFAULT border border-outline-variant/30 flex items-center gap-6">
              <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center font-display-lg text-2xl uppercase">
                {user.fullName ? user.fullName.charAt(0) : "U"}
              </div>
              <div>
                <h2 className="font-headline-sm text-primary">{user.fullName || "User"}</h2>
                <p className="font-body-md text-on-surface-variant">{user.email}</p>
                {user.role === "admin" && (
                  <span className="inline-block mt-2 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-DEFAULT font-label-caps text-[10px] uppercase tracking-widest">
                    Admin
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button className="p-6 bg-surface-container border border-outline-variant/30 rounded-DEFAULT hover:border-primary/50 transition-colors text-left flex flex-col group">
                <span className="material-symbols-outlined text-primary mb-4 group-hover:scale-110 transition-transform">receipt_long</span>
                <h3 className="font-label-md uppercase tracking-widest text-primary mb-1">Order History</h3>
                <p className="font-body-sm text-on-surface-variant">View your past orders</p>
              </button>

              <button className="p-6 bg-surface-container border border-outline-variant/30 rounded-DEFAULT hover:border-primary/50 transition-colors text-left flex flex-col group">
                <span className="material-symbols-outlined text-primary mb-4 group-hover:scale-110 transition-transform">loyalty</span>
                <h3 className="font-label-md uppercase tracking-widest text-primary mb-1">Atelier Rewards</h3>
                <p className="font-body-sm text-on-surface-variant">Check your point balance</p>
              </button>
            </div>

            <div className="pt-6 border-t border-outline-variant/30 text-right">
              <button
                onClick={handleLogout}
                className="bg-error/10 text-error px-6 py-3 rounded-full font-label-caps text-label-caps tracking-widest hover:bg-error hover:text-on-error transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
