"use client";

import { useState } from "react";

export default function BlogManagement() {
  const [blogs] = useState([
    { id: "1", title: "The Art of the Perfect Espresso Pull", author: "Navin", date: "Oct 24, 2023", published: true, views: 1240 },
    { id: "2", title: "Introducing Our Winter Pastry Collection", author: "Chef Maria", date: "Nov 02, 2023", published: false, views: 0 },
    { id: "3", title: "Sourcing Sustainably: Our Coffee Journey", author: "Navin", date: "Sep 15, 2023", published: true, views: 3450 },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-display-lg text-[32px] text-primary mb-2">
            Blog & Content
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Manage your articles, news, and cafe updates.
          </p>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-DEFAULT font-label-md flex items-center gap-2 hover:bg-secondary transition-colors shadow-lg glow-border active:translate-y-[2px]">
          <span className="material-symbols-outlined text-[18px]">post_add</span>
          Write Article
        </button>
      </header>

      <div className="glass-card rounded-xl overflow-hidden border border-outline-variant/30">
        <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container/50">
          <div className="relative w-full max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              search
            </span>
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-surface border border-outline-variant/50 rounded-lg pl-10 pr-4 py-2 text-white font-body-md focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container/30 border-b border-outline-variant/30 text-secondary font-label-md uppercase tracking-wider text-[12px]">
                <th className="p-4 font-medium">Article Title</th>
                <th className="p-4 font-medium">Author</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Views</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {blogs.map((blog) => (
                <tr key={blog.id} className="border-b border-outline-variant/10 hover:bg-surface-container/30 transition-colors">
                  <td className="p-4 text-white font-medium">{blog.title}</td>
                  <td className="p-4 text-on-surface-variant">{blog.author}</td>
                  <td className="p-4 text-on-surface-variant">{blog.date}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-[12px] font-label-sm border ${
                      blog.published 
                        ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                        : 'bg-surface-variant text-on-surface-variant border-outline-variant/30'
                    }`}>
                      {blog.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="p-4 text-secondary">{blog.views.toLocaleString()}</td>
                  <td className="p-4 text-right space-x-2">
                    <button className="p-2 text-secondary hover:text-primary hover:bg-primary/10 rounded-full transition-colors" title="Edit">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                    <button className="p-2 text-error hover:bg-error/10 rounded-full transition-colors" title="Delete">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
