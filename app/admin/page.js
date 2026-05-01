"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    messagesCount: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("authToken");
      const res = await fetch("/api/admin/dashboard", {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      if (data.success) {
        setStats(data.data);
      } else {
        setError(data.message || "Failed to fetch dashboard data");
      }
    } catch (err) {
      setError("An error occurred while fetching dashboard data");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-error/20 text-error p-4 rounded-lg">
        <p>{error}</p>
        <button onClick={fetchDashboardData} className="mt-2 text-sm underline hover:text-white">Try Again</button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex justify-between items-start">
        <div>
          <h1 className="font-display-lg text-[32px] text-primary mb-2">
            Dashboard Overview
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Welcome back to the command center. Here's what's happening today.
          </p>
        </div>
        <button onClick={fetchDashboardData} className="bg-surface-container text-white px-4 py-2 rounded-DEFAULT font-label-md flex items-center gap-2 hover:bg-surface-variant transition-colors shadow-lg border border-outline-variant/30 active:translate-y-[2px]">
          <span className="material-symbols-outlined text-[18px]">refresh</span>
          Refresh
        </button>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Revenue */}
        <div className="glass-card p-6 rounded-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-label-md text-secondary tracking-wider uppercase mb-2">Total Revenue</p>
              <h3 className="font-display-lg text-[36px] text-white">${stats.totalRevenue?.toLocaleString(undefined, {minimumFractionDigits: 2}) || '0.00'}</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">payments</span>
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="glass-card p-6 rounded-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-label-md text-secondary tracking-wider uppercase mb-2">Total Orders</p>
              <h3 className="font-display-lg text-[36px] text-white">{stats.totalOrders}</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">receipt_long</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-error font-label-sm">
            <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
            <span>{stats.pendingOrders} orders preparing</span>
          </div>
        </div>

        {/* Users */}
        <div className="glass-card p-6 rounded-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-label-md text-secondary tracking-wider uppercase mb-2">Registered Users</p>
              <h3 className="font-display-lg text-[36px] text-white">{stats.totalUsers}</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">group</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="glass-card p-6 rounded-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 sm:col-span-2 lg:col-span-2">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
                  <span className="material-symbols-outlined">mail</span>
                  {stats.messagesCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-error rounded-full border-2 border-surface"></span>
                  )}
              </div>
              <div>
                <p className="font-label-md text-secondary tracking-wider uppercase">Messages</p>
                <h3 className="font-headline-md text-white">{stats.messagesCount} unread contact messages</h3>
              </div>
            </div>
            <Link href="/admin/messages" className="px-6 py-2 border border-secondary text-primary rounded-DEFAULT hover:bg-secondary/10 transition-colors font-label-md">
              View Inbox
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="glass-card rounded-xl p-6 flex flex-col lg:col-span-3">
          <h3 className="font-headline-md text-primary mb-6">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Link href="/admin/menu" className="py-4 px-4 bg-surface-container border border-outline-variant/30 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all text-left flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[20px]">add_circle</span>
              </div>
              <span className="font-label-md text-white">Manage Menu Items</span>
            </Link>
            <Link href="/admin/blogs" className="py-4 px-4 bg-surface-container border border-outline-variant/30 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all text-left flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[20px]">post_add</span>
              </div>
              <span className="font-label-md text-white">Publish Blog Post</span>
            </Link>
            <Link href="/admin/settings" className="py-4 px-4 bg-surface-container border border-outline-variant/30 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all text-left flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[20px]">settings</span>
              </div>
              <span className="font-label-md text-white">Store Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
