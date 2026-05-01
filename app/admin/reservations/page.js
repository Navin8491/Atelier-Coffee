"use client";

import { useState, useEffect } from "react";

const getToken = () => (typeof window !== "undefined" ? sessionStorage.getItem("authToken") : null);
const authHeader = () => { const t = getToken(); return t ? { Authorization: `Bearer ${t}` } : {}; };

export default function ReservationsManagement() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/reservations", { headers: authHeader() });
      const data = await res.json();
      if (data.success) {
        setReservations(data.data);
      } else {
        setError(data.message || "Failed to fetch reservations");
      }
    } catch (err) {
      setError("An error occurred while fetching reservations");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    if (!confirm(`Are you sure you want to change the status to ${newStatus}?`)) return;

    try {
      const res = await fetch(`/api/admin/reservations/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeader() },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setReservations(reservations.map(res => res._id === id ? data.data : res));
      } else {
        alert(data.message || "Failed to update reservation");
      }
    } catch (err) {
      alert("Error updating reservation");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this reservation?")) return;
    try {
      const res = await fetch(`/api/admin/reservations/${id}`, { method: "DELETE", headers: authHeader() });
      const data = await res.json();
      if (data.success) {
        setReservations(reservations.filter(res => res._id !== id));
      } else {
        alert(data.message || "Failed to delete reservation");
      }
    } catch (err) {
      alert("Error deleting reservation");
    }
  };

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
        <button onClick={fetchReservations} className="mt-2 text-sm underline hover:text-white">Try Again</button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-display-lg text-[32px] text-primary mb-2">
            Reservations
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Manage table bookings and capacity.
          </p>
        </div>
        <button onClick={fetchReservations} className="bg-surface-container text-white px-6 py-2 rounded-DEFAULT font-label-md flex items-center gap-2 hover:bg-surface-variant transition-colors shadow-lg border border-outline-variant/30 active:translate-y-[2px]">
          <span className="material-symbols-outlined text-[18px]">refresh</span>
          Refresh
        </button>
      </header>

      {/* Reservations Table */}
      <div className="glass-card rounded-xl overflow-hidden border border-outline-variant/30">
        <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container/50">
          <div className="relative w-full max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              search
            </span>
            <input 
              type="text" 
              placeholder="Search by name or phone..." 
              className="w-full bg-surface border border-outline-variant/50 rounded-lg pl-10 pr-4 py-2 text-white font-body-md focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container/30 border-b border-outline-variant/30 text-secondary font-label-md uppercase tracking-wider text-[12px]">
                <th className="p-4 font-medium">Guest</th>
                <th className="p-4 font-medium">Date & Time</th>
                <th className="p-4 font-medium">Party Size</th>
                <th className="p-4 font-medium">Contact</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {reservations.map((res) => (
                <tr key={res._id} className="border-b border-outline-variant/10 hover:bg-surface-container/30 transition-colors">
                  <td className="p-4 text-white font-medium">
                    <div>{res.name}</div>
                    <div className="text-[12px] text-on-surface-variant font-mono mt-1">{res._id.substring(0,8)}</div>
                  </td>
                  <td className="p-4 text-on-surface-variant">
                    <div className="text-white">{new Date(res.date).toLocaleDateString()}</div>
                    <div>{res.time}</div>
                  </td>
                  <td className="p-4 text-white">{res.guests} people</td>
                  <td className="p-4 text-on-surface-variant">{res.phone}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-[12px] font-label-sm border capitalize ${
                      res.status === 'approved' || res.status === 'confirmed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                      res.status === 'pending' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                      'bg-error/10 text-error border-error/20'
                    }`}>
                      {res.status}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    {res.status === 'pending' && (
                      <button onClick={() => handleUpdateStatus(res._id, 'approved')} className="p-2 text-green-400 hover:bg-green-400/10 rounded-full transition-colors" title="Approve">
                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      </button>
                    )}
                    {res.status !== 'cancelled' && (
                      <button onClick={() => handleUpdateStatus(res._id, 'cancelled')} className="p-2 text-error hover:bg-error/10 rounded-full transition-colors" title="Cancel">
                        <span className="material-symbols-outlined text-[18px]">cancel</span>
                      </button>
                    )}
                    <button onClick={() => handleDelete(res._id)} className="p-2 text-error hover:bg-error/10 rounded-full transition-colors" title="Delete">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
              {reservations.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-on-surface-variant">
                    No reservations found.
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
