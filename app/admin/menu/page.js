"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const getToken = () => (typeof window !== "undefined" ? sessionStorage.getItem("authToken") : null);
const authHeader = () => { const t = getToken(); return t ? { Authorization: `Bearer ${t}` } : {}; };

export default function MenuManagement() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItem, setNewItem] = useState({ title: "", category: "Hot Coffees", price: "", description: "", image: "" });

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/menu", { headers: authHeader() });
      const data = await res.json();
      if (data.success) {
        setMenuItems(data.data);
      } else {
        setError(data.message || "Failed to fetch menu items");
      }
    } catch (err) {
      setError("An error occurred while fetching menu items");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleAvailability = async (id, currentAvailability) => {
    try {
      const res = await fetch(`/api/admin/menu/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeader() },
        body: JSON.stringify({ isAvailable: !currentAvailability }),
      });
      const data = await res.json();
      if (data.success) {
        setMenuItems(menuItems.map(item => item._id === id ? data.data : item));
      } else {
        alert(data.message || "Failed to update availability");
      }
    } catch (err) {
      alert("Error updating availability");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this menu item?")) return;
    try {
      const res = await fetch(`/api/admin/menu/${id}`, { method: "DELETE", headers: authHeader() });
      const data = await res.json();
      if (data.success) {
        setMenuItems(menuItems.filter(item => item._id !== id));
      } else {
        alert(data.message || "Failed to delete item");
      }
    } catch (err) {
      alert("Error deleting item");
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader() },
        body: JSON.stringify({ ...newItem, price: Number(newItem.price) }),
      });
      const data = await res.json();
      if (data.success) {
        setMenuItems([...menuItems, data.data]);
        setShowAddModal(false);
        setNewItem({ title: "", category: "Hot Coffees", price: "", description: "", image: "" });
      } else {
        alert(data.message || "Failed to add item");
      }
    } catch (err) {
      alert("Error adding item");
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
        <button onClick={fetchMenuItems} className="mt-2 text-sm underline hover:text-white">Try Again</button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-display-lg text-[32px] text-primary mb-2">
            Menu Management
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Add new offerings, update prices, or change availability.
          </p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-primary text-on-primary px-6 py-2 rounded-DEFAULT font-label-md flex items-center gap-2 hover:bg-secondary transition-colors shadow-lg glow-border active:translate-y-[2px]"
        >
          <span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
          Add Item
        </button>
      </header>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div key={item._id} className="glass-card rounded-xl overflow-hidden border border-outline-variant/30 flex flex-col group">
            <div className="h-48 relative bg-surface-container overflow-hidden">
               {item.image ? (
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${!item.isAvailable ? 'grayscale opacity-50' : ''}`} 
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
               ) : (
                  <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-4xl opacity-50">image</span>
                  </div>
               )}
               <div className="absolute top-2 right-2">
                 <span className={`px-2 py-1 rounded-full text-[10px] font-label-sm font-bold tracking-wider uppercase backdrop-blur-md border ${
                   item.isAvailable 
                    ? 'bg-green-500/20 text-green-300 border-green-500/50' 
                    : 'bg-error/20 text-error border-error/50'
                 }`}>
                   {item.isAvailable ? "Available" : "Sold Out"}
                 </span>
               </div>
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline-sm text-white font-medium line-clamp-1">{item.title}</h3>
                <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
              </div>
              <p className="font-label-sm text-secondary tracking-widest uppercase text-[10px] mb-4">
                {item.category}
              </p>
              
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-outline-variant/30">
                <div className="flex items-center gap-2">
                   <label className="relative inline-flex items-center cursor-pointer">
                     <input 
                       type="checkbox" 
                       className="sr-only peer" 
                       checked={item.isAvailable} 
                       onChange={() => handleToggleAvailability(item._id, item.isAvailable)} 
                     />
                     <div className="w-9 h-5 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary border border-outline-variant/50"></div>
                   </label>
                   <span className="text-[12px] text-on-surface-variant font-label-sm">In Stock</span>
                </div>
                
                <div className="flex gap-1">
                  <button 
                    onClick={() => handleDelete(item._id)}
                    className="p-1.5 text-error hover:bg-error/10 rounded-md transition-colors" 
                    title="Delete"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-surface border border-outline-variant/30 rounded-xl w-full max-w-md p-6">
            <h2 className="text-2xl font-display-sm text-white mb-4">Add Menu Item</h2>
            <form onSubmit={handleAddItem} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">Title</label>
                <input required type="text" value={newItem.title} onChange={e => setNewItem({...newItem, title: e.target.value})} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">Description</label>
                <textarea required value={newItem.description} onChange={e => setNewItem({...newItem, description: e.target.value})} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-3 py-2 text-white" rows="2" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-on-surface-variant mb-1">Price</label>
                  <input required type="number" step="0.01" value={newItem.price} onChange={e => setNewItem({...newItem, price: e.target.value})} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-3 py-2 text-white" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-on-surface-variant mb-1">Category</label>
                  <select value={newItem.category} onChange={e => setNewItem({...newItem, category: e.target.value})} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-3 py-2 text-white">
                    <option value="Hot Coffees">Hot Coffees</option>
                    <option value="Cold Beverages">Cold Beverages</option>
                    <option value="Food">Food</option>
                    <option value="Desserts">Desserts</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">Image URL</label>
                <input type="text" value={newItem.image} onChange={e => setNewItem({...newItem, image: e.target.value})} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-3 py-2 text-white" />
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 text-on-surface-variant hover:text-white transition-colors">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-primary text-on-primary rounded-lg hover:bg-secondary transition-colors">Add Item</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
