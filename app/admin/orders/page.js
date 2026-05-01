"use client";

import { useState, useEffect } from "react";

const getToken = () => (typeof window !== "undefined" ? sessionStorage.getItem("authToken") : null);
const authHeader = () => { const t = getToken(); return t ? { Authorization: `Bearer ${t}` } : {}; };

export default function OrdersManagement() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/orders", { headers: authHeader() });
      const data = await res.json();
      if (data.success) {
        setOrders(data.data);
      } else {
        setError(data.message || "Failed to fetch orders");
      }
    } catch (err) {
      setError("An error occurred while fetching orders");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id, currentStatus) => {
    const statuses = ["pending", "preparing", "ready", "delivered", "cancelled"];
    const currentIndex = statuses.indexOf(currentStatus);
    const nextStatus = statuses[(currentIndex + 1) % statuses.length];

    if (!confirm(`Update order status to ${nextStatus}?`)) return;

    try {
      const res = await fetch(`/api/admin/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeader() },
        body: JSON.stringify({ status: nextStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setOrders(orders.map(order => order._id === id ? data.data : order));
      } else {
        alert(data.message || "Failed to update order status");
      }
    } catch (err) {
      alert("Error updating order status");
    }
  };

  const filteredOrders = statusFilter === "all" 
    ? orders 
    : orders.filter(o => o.status === statusFilter);

  if (loading) {
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
        <button onClick={fetchOrders} className="mt-2 text-sm underline hover:text-white">Try Again</button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-display-lg text-[32px] text-primary mb-2">
            Orders Management
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Track, update, and manage incoming cafe orders.
          </p>
        </div>
        <div className="flex gap-2">
           <button onClick={() => fetchOrders()} className="bg-surface-container text-white px-4 py-2 rounded-DEFAULT font-label-md flex items-center gap-2 hover:bg-surface-variant transition-colors border border-outline-variant/30">
             <span className="material-symbols-outlined text-[18px]">refresh</span>
             Refresh
           </button>
        </div>
      </header>

      {/* Orders Table */}
      <div className="glass-card rounded-xl overflow-hidden border border-outline-variant/30">
        <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container/50">
          <div className="relative w-full max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              search
            </span>
            <input 
              type="text" 
              placeholder="Search by Order ID or Customer..." 
              className="w-full bg-surface border border-outline-variant/50 rounded-lg pl-10 pr-4 py-2 text-white font-body-md focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex gap-2">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-surface border border-outline-variant/50 rounded-lg px-4 py-2 text-white font-body-md focus:outline-none focus:border-primary"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="preparing">Preparing</option>
              <option value="ready">Ready</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container/30 border-b border-outline-variant/30 text-secondary font-label-md uppercase tracking-wider text-[12px]">
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Date & Time</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Items</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {filteredOrders.map((order) => (
                <tr key={order._id} className="border-b border-outline-variant/10 hover:bg-surface-container/30 transition-colors">
                  <td className="p-4 font-mono text-primary font-medium">{order._id.substring(0, 8)}</td>
                  <td className="p-4 text-on-surface-variant">{new Date(order.createdAt).toLocaleString()}</td>
                  <td className="p-4 text-white font-medium">{order.user?.fullName || 'Guest'}</td>
                  <td className="p-4 text-on-surface-variant">{order.items.length} items</td>
                  <td className="p-4 text-white font-medium">${order.totalAmount?.toFixed(2) || '0.00'}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-[12px] font-label-sm border capitalize ${
                      order.status === 'delivered' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                      order.status === 'ready' ? 'bg-primary/20 text-primary border-primary/30' :
                      order.status === 'cancelled' ? 'bg-error/10 text-error border-error/20' :
                      'bg-orange-500/10 text-orange-400 border-orange-500/20'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button onClick={() => handleUpdateStatus(order._id, order.status)} className="p-2 text-secondary hover:text-primary hover:bg-primary/10 rounded-full transition-colors" title="Update Status">
                      <span className="material-symbols-outlined text-[18px]">update</span>
                    </button>
                  </td>
                </tr>
              ))}
              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan="7" className="p-8 text-center text-on-surface-variant">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
