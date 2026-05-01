"use client";

import { useState, useEffect } from "react";

const getToken = () => (typeof window !== "undefined" ? sessionStorage.getItem("authToken") : null);
const authHeader = () => { const t = getToken(); return t ? { Authorization: `Bearer ${t}` } : {}; };

export default function UsersManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/users", { headers: authHeader() });
      const data = await res.json();
      if (data.success) {
        setUsers(data.data);
      } else {
        setError(data.message || "Failed to fetch users");
      }
    } catch (err) {
      setError("An error occurred while fetching users");
    } finally {
      setLoading(false);
    }
  };

  const handleRoleToggle = async (userId, currentRole) => {
    const newRole = currentRole === "admin" ? "user" : "admin";
    if (!confirm(`Are you sure you want to change this user's role to ${newRole}?`)) return;

    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeader() },
        body: JSON.stringify({ role: newRole }),
      });
      const data = await res.json();
      if (data.success) {
        setUsers(users.map((user) => (user._id === userId ? data.data : user)));
      } else {
        alert(data.message || "Failed to update role");
      }
    } catch (err) {
      alert("An error occurred while updating the role");
    }
  };

  const handleDelete = async (userId) => {
    if (!confirm("Are you sure you want to delete this user? This action cannot be undone.")) return;

    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: "DELETE",
        headers: authHeader(),
      });
      const data = await res.json();
      if (data.success) {
        setUsers(users.filter((user) => user._id !== userId));
      } else {
        alert(data.message || "Failed to delete user");
      }
    } catch (err) {
      alert("An error occurred while deleting the user");
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
        <button onClick={fetchUsers} className="mt-2 text-sm underline hover:text-white">Try Again</button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-display-lg text-[32px] text-primary mb-2">
            User Management
          </h1>
          <p className="font-body-md text-on-surface-variant">
            View, edit, and manage all registered accounts.
          </p>
        </div>
      </header>

      {/* Users Table */}
      <div className="glass-card rounded-xl overflow-hidden border border-outline-variant/30">
        <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container/50">
          <div className="relative w-full max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              search
            </span>
            <input 
              type="text" 
              placeholder="Search users by name or email..." 
              className="w-full bg-surface border border-outline-variant/50 rounded-lg pl-10 pr-4 py-2 text-white font-body-md focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container/30 border-b border-outline-variant/30 text-secondary font-label-md uppercase tracking-wider text-[12px]">
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Email</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Joined</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {users.map((user) => (
                <tr key={user._id} className="border-b border-outline-variant/10 hover:bg-surface-container/30 transition-colors">
                  <td className="p-4 text-white font-medium">{user.fullName}</td>
                  <td className="p-4 text-on-surface-variant">{user.email}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-[12px] font-label-sm border ${
                      user.role === 'admin' 
                        ? 'bg-primary/20 text-primary border-primary/30' 
                        : 'bg-surface-variant text-on-surface-variant border-outline-variant/30'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4 text-on-surface-variant">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="p-4 text-right space-x-2">
                    <button 
                      onClick={() => handleRoleToggle(user._id, user.role)}
                      className="p-2 text-secondary hover:text-primary hover:bg-primary/10 rounded-full transition-colors" 
                      title={user.role === 'admin' ? "Make User" : "Make Admin"}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {user.role === 'admin' ? 'person' : 'admin_panel_settings'}
                      </span>
                    </button>
                    <button 
                      onClick={() => handleDelete(user._id)}
                      className="p-2 text-error hover:bg-error/10 rounded-full transition-colors" 
                      title="Delete User"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-on-surface-variant">
                    No users found.
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
