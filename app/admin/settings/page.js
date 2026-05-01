"use client";

export default function SettingsManagement() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
      <header>
        <h1 className="font-display-lg text-[32px] text-primary mb-2">
          Store Settings
        </h1>
        <p className="font-body-md text-on-surface-variant">
          Manage your cafe's global configuration, contact details, and theme.
        </p>
      </header>

      <div className="glass-card rounded-xl border border-outline-variant/30 p-6 sm:p-8 space-y-8">
        
        {/* Contact Information */}
        <section className="space-y-4">
          <h2 className="font-headline-md text-white border-b border-outline-variant/30 pb-2">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-label-md text-secondary mb-2 uppercase tracking-wider text-[12px]">Public Email</label>
              <input 
                type="email" 
                defaultValue="hello@vdscafe.com"
                className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-3 text-white font-body-md focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block font-label-md text-secondary mb-2 uppercase tracking-wider text-[12px]">Phone Number</label>
              <input 
                type="text" 
                defaultValue="+1 (555) 123-4567"
                className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-3 text-white font-body-md focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-label-md text-secondary mb-2 uppercase tracking-wider text-[12px]">Opening Hours Display</label>
              <input 
                type="text" 
                defaultValue="Mon-Sun: 8:00 AM - 8:00 PM"
                className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-3 text-white font-body-md focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="space-y-4">
          <h2 className="font-headline-md text-white border-b border-outline-variant/30 pb-2">Social Media Links</h2>
          <div className="space-y-4">
            <div className="flex relative items-center">
              <span className="material-symbols-outlined absolute left-4 text-on-surface-variant">tag</span>
              <input 
                type="url" 
                placeholder="Instagram URL"
                defaultValue="https://instagram.com/vdscafe"
                className="w-full bg-surface-container border border-outline-variant/50 rounded-lg pl-12 pr-4 py-3 text-white font-body-md focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex relative items-center">
              <span className="material-symbols-outlined absolute left-4 text-on-surface-variant">tag</span>
              <input 
                type="url" 
                placeholder="Twitter URL"
                className="w-full bg-surface-container border border-outline-variant/50 rounded-lg pl-12 pr-4 py-3 text-white font-body-md focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex relative items-center">
              <span className="material-symbols-outlined absolute left-4 text-on-surface-variant">tag</span>
              <input 
                type="url" 
                placeholder="Facebook URL"
                className="w-full bg-surface-container border border-outline-variant/50 rounded-lg pl-12 pr-4 py-3 text-white font-body-md focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </section>

        {/* System Settings */}
        <section className="space-y-4">
          <h2 className="font-headline-md text-white border-b border-outline-variant/30 pb-2">System Preferences</h2>
          <div className="flex items-center justify-between p-4 bg-surface-container/50 rounded-lg border border-outline-variant/30">
            <div>
              <h3 className="font-label-md text-white mb-1">Store Status</h3>
              <p className="font-body-sm text-on-surface-variant text-[12px]">Temporarily disable online ordering and reservations.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 border border-outline-variant/50"></div>
            </label>
          </div>
        </section>

        <div className="pt-4 flex justify-end">
           <button className="bg-primary text-on-primary px-8 py-3 rounded-DEFAULT font-label-md hover:bg-secondary transition-colors shadow-lg glow-border">
             Save Changes
           </button>
        </div>
      </div>
    </div>
  );
}
