"use client";

import { useState, useEffect } from "react";

const getToken = () => (typeof window !== "undefined" ? sessionStorage.getItem("authToken") : null);
const authHeader = () => { const t = getToken(); return t ? { Authorization: `Bearer ${t}` } : {}; };

export default function MessagesManagement() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    if (messages.length > 0 && !selectedMessage) {
      setSelectedMessage(messages[0]);
    } else if (messages.length > 0 && selectedMessage) {
      const stillExists = messages.find(m => m._id === selectedMessage._id);
      if (!stillExists) setSelectedMessage(messages[0]);
    } else {
      setSelectedMessage(null);
    }
  }, [messages, selectedMessage]);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/messages", { headers: authHeader() });
      const data = await res.json();
      if (data.success) {
        setMessages(data.data);
      } else {
        setError(data.message || "Failed to fetch messages");
      }
    } catch (err) {
      setError("An error occurred while fetching messages");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleRead = async (id, currentReadStatus) => {
    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeader() },
        body: JSON.stringify({ isRead: !currentReadStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setMessages(messages.map(msg => msg._id === id ? data.data : msg));
        if (selectedMessage?._id === id) {
          setSelectedMessage(data.data);
        }
      } else {
        alert(data.message || "Failed to update message status");
      }
    } catch (err) {
      alert("Error updating message");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    try {
      const res = await fetch(`/api/admin/messages/${id}`, { method: "DELETE", headers: authHeader() });
      const data = await res.json();
      if (data.success) {
        setMessages(messages.filter(msg => msg._id !== id));
      } else {
        alert(data.message || "Failed to delete message");
      }
    } catch (err) {
      alert("Error deleting message");
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
        <button onClick={fetchMessages} className="mt-2 text-sm underline hover:text-white">Try Again</button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-display-lg text-[32px] text-primary mb-2">
            Contact Messages
          </h1>
          <p className="font-body-md text-on-surface-variant">
            View and respond to inquiries from your customers.
          </p>
        </div>
        <button onClick={fetchMessages} className="bg-surface-container text-white px-4 py-2 rounded-DEFAULT font-label-md flex items-center gap-2 hover:bg-surface-variant transition-colors shadow-lg border border-outline-variant/30 active:translate-y-[2px]">
          <span className="material-symbols-outlined text-[18px]">refresh</span>
          Refresh
        </button>
      </header>

      <div className="glass-card rounded-xl overflow-hidden border border-outline-variant/30 flex flex-col lg:flex-row h-[600px]">
        {/* Messages List (Sidebar) */}
        <div className="w-full lg:w-1/3 border-r border-outline-variant/30 flex flex-col bg-surface-container/30">
           <div className="p-4 border-b border-outline-variant/30">
             <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                  search
                </span>
                <input 
                  type="text" 
                  placeholder="Search messages..." 
                  className="w-full bg-surface border border-outline-variant/50 rounded-lg pl-9 pr-4 py-2 text-white font-body-sm focus:outline-none focus:border-primary transition-colors text-[14px]"
                />
              </div>
           </div>
           <div className="overflow-y-auto flex-grow custom-scrollbar">
             {messages.length === 0 ? (
               <div className="p-8 text-center text-on-surface-variant text-sm">No messages found.</div>
             ) : (
               messages.map((msg) => (
                 <div 
                    key={msg._id} 
                    onClick={() => setSelectedMessage(msg)}
                    className={`p-4 border-b border-outline-variant/10 cursor-pointer transition-colors ${selectedMessage?._id === msg._id ? 'bg-primary/5 border-l-2 border-l-primary' : 'hover:bg-surface-container/50'}`}
                 >
                   <div className="flex justify-between items-start mb-1">
                     <h4 className={`font-label-md text-[14px] ${!msg.isRead ? 'text-white font-bold' : 'text-on-surface-variant'}`}>{msg.name}</h4>
                     <span className="text-[10px] text-secondary">{new Date(msg.createdAt).toLocaleDateString()}</span>
                   </div>
                   <h5 className={`font-label-sm text-[12px] truncate mb-1 ${!msg.isRead ? 'text-primary' : 'text-on-surface-variant'}`}>{msg.subject}</h5>
                   <p className="font-body-sm text-[12px] text-on-surface-variant truncate line-clamp-2">{msg.message}</p>
                 </div>
               ))
             )}
           </div>
        </div>

        {/* Message Viewer */}
        <div className="w-full lg:w-2/3 flex flex-col bg-surface">
           {selectedMessage ? (
             <>
               <div className="p-6 border-b border-outline-variant/30 flex justify-between items-start">
                 <div>
                    <h2 className="font-headline-md text-white mb-1">{selectedMessage.subject}</h2>
                    <div className="flex items-center gap-2 text-on-surface-variant text-[14px]">
                      <span className="font-medium text-white">{selectedMessage.name}</span>
                      <span>&lt;{selectedMessage.email}&gt;</span>
                    </div>
                 </div>
                 <div className="flex gap-2 text-secondary">
                   <button 
                     onClick={() => handleToggleRead(selectedMessage._id, selectedMessage.isRead)} 
                     className="p-2 hover:text-primary hover:bg-primary/10 rounded-full transition-colors" 
                     title={selectedMessage.isRead ? "Mark as unread" : "Mark as read"}
                   >
                     <span className="material-symbols-outlined text-[20px]">
                       {selectedMessage.isRead ? "mark_email_unread" : "mark_email_read"}
                     </span>
                   </button>
                   <button 
                     onClick={() => handleDelete(selectedMessage._id)} 
                     className="p-2 hover:text-error hover:bg-error/10 rounded-full transition-colors" 
                     title="Delete"
                   >
                     <span className="material-symbols-outlined text-[20px]">delete</span>
                   </button>
                 </div>
               </div>
               <div className="p-6 flex-grow overflow-y-auto custom-scrollbar">
                 <p className="text-white font-body-md whitespace-pre-wrap leading-relaxed">
                   {selectedMessage.message}
                 </p>
               </div>
               <div className="p-6 border-t border-outline-variant/30 bg-surface-container/20">
                 <a 
                   href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                   className="bg-primary text-on-primary px-6 py-2 rounded-DEFAULT font-label-md flex items-center gap-2 hover:bg-secondary transition-colors w-full sm:w-auto justify-center"
                 >
                    <span className="material-symbols-outlined text-[18px]">reply</span>
                    Reply via Email
                 </a>
               </div>
             </>
           ) : (
             <div className="flex-1 flex flex-col items-center justify-center text-on-surface-variant">
               <span className="material-symbols-outlined text-6xl mb-4 opacity-50">mail</span>
               <p>Select a message to view its contents.</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
