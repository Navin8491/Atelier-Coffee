import Image from "next/image";

export default function Locations() {
  return (
    <div className="flex-grow pt-24 flex flex-col md:flex-row h-[calc(100vh)] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-[400px] lg:w-[480px] bg-surface flex flex-col h-full border-r border-outline-variant/30 z-10 shadow-[20px_0_40px_rgba(0,0,0,0.5)] shrink-0">
        <div className="p-8 flex-shrink-0">
          <h1 className="font-headline-lg text-headline-lg text-gradient mb-6">
            Our Ateliers
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            Find your nearest sanctuary for craft coffee and quiet reflection.
          </p>
          <button className="w-full bg-primary text-on-primary py-6 px-12 rounded-DEFAULT font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-secondary transition-all duration-300 shadow-lg glow-border font-bold active:translate-y-[2px]">
            <span className="material-symbols-outlined text-[18px]">
              my_location
            </span>
            Find Nearest Cafe
          </button>
        </div>
        <div className="overflow-y-auto px-8 pb-12 space-y-6">
          {/* Location Card 1 (Active) */}
          <div className="glass-card p-6 rounded-lg relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline-md text-headline-md text-primary">
                The Roastery
              </h3>
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-[2px] rounded-full">
                0.8 mi
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              124 Artisan Alley, Downtown
            </p>
            <div className="flex items-center gap-2 text-on-surface-variant mb-6 font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px]">
                schedule
              </span>
              Open until 8:00 PM
            </div>
            <div className="flex gap-4">
              <button className="flex-1 border border-secondary text-primary py-2 rounded-DEFAULT font-label-md text-label-md hover:bg-secondary-container/10 transition-colors">
                Directions
              </button>
              <button className="flex-1 bg-surface-container text-primary py-2 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-variant transition-colors">
                Order Ahead
              </button>
            </div>
          </div>
          {/* Location Card 2 */}
          <div className="bg-surface-container border border-outline-variant/30 p-6 rounded-lg relative overflow-hidden group cursor-pointer transition-all duration-300 hover:glass-card hover:-translate-y-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary transition-colors">
                Westside Pavilion
              </h3>
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-[2px] rounded-full">
                2.4 mi
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              890 Horizon Boulevard
            </p>
            <div className="flex items-center gap-2 text-on-surface-variant mb-6 font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px]">
                schedule
              </span>
              Open until 7:00 PM
            </div>
            <div className="flex gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
              <button className="flex-1 border border-secondary text-primary py-2 rounded-DEFAULT font-label-md text-label-md hover:bg-secondary-container/10 transition-colors">
                Directions
              </button>
              <button className="flex-1 bg-surface-container text-primary py-2 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-variant transition-colors">
                Order Ahead
              </button>
            </div>
          </div>
          {/* Location Card 3 */}
          <div className="bg-surface-container border border-outline-variant/30 p-6 rounded-lg relative overflow-hidden group cursor-pointer transition-all duration-300 hover:glass-card hover:-translate-y-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-primary transition-colors">
                North Market
              </h3>
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-[2px] rounded-full">
                4.1 mi
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              450 Mercantile Square
            </p>
            <div className="flex items-center gap-2 text-on-surface-variant mb-6 font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px]">
                schedule
              </span>
              Open until 6:00 PM
            </div>
            <div className="flex gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
              <button className="flex-1 border border-secondary text-primary py-2 rounded-DEFAULT font-label-md text-label-md hover:bg-secondary-container/10 transition-colors">
                Directions
              </button>
              <button className="flex-1 bg-surface-container text-primary py-2 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-variant transition-colors">
                Order Ahead
              </button>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Map Area */}
      <div className="flex-grow relative bg-background overflow-hidden">
        {/* Simulated Map Background */}
        <Image
          alt="Map view"
          className="object-cover opacity-20 mix-blend-screen grayscale"
          data-alt="abstract minimalist city map design in cream and soft beige tones with subtle street lines"
          fill
          sizes="(max-width: 1024px) 100vw, 70vw"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH4NHoFMX4wjkervAHefvn1NtxEVxiVFJcoc-ZmZeypXIKsM5J45KBb2mDhglWWylgDtCQGmuRAm29QztaRBAWWtKE7i95z-s2ZSix7xSbhW9ckZCNaMfHqwBa-Z4wSnXg1IhItxIf9ao196K4uV41h544jHS-AY_Hy0ZWOY8qY6zEwVd6clsoK9q0ceJadL4vhTaaWUY09KIRETaeVvfjxJ_3cSyAXygpPu7QN85JOboP34mFWtetqZ6ziYYWSspsQH3KIu9_M1U9"
        />
        {/* Map Overlay Gradient for darkness */}
        <div className="absolute inset-0 bg-gradient-to-tr from-background/90 to-surface/60 pointer-events-none"></div>
        {/* Map Controls */}
        <div className="absolute bottom-12 right-8 flex flex-col gap-4 z-20">
          <button className="glass-card w-12 h-12 rounded-full flex items-center justify-center text-primary hover:bg-surface-container transition-colors active:translate-y-[2px]">
            <span className="material-symbols-outlined">add</span>
          </button>
          <button className="glass-card w-12 h-12 rounded-full flex items-center justify-center text-primary hover:bg-surface-container transition-colors active:translate-y-[2px]">
            <span className="material-symbols-outlined">remove</span>
          </button>
          <button className="glass-card w-12 h-12 rounded-full flex items-center justify-center text-primary hover:bg-surface-container transition-colors mt-4 active:translate-y-[2px]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              near_me
            </span>
          </button>
        </div>
        {/* Custom Pins & Previews */}
        {/* Pin 1 (Active) */}
        <div className="absolute top-[40%] left-[50%] z-30 group">
          <div className="relative -translate-x-1/2 -translate-y-full cursor-pointer">
            <span
              className="material-symbols-outlined text-secondary-container text-4xl drop-shadow-md"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
            {/* Active Indicator */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-primary/20 rounded-full blur-[2px]"></div>
          </div>
          {/* Glass Preview Card */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 glass-card p-4 rounded-lg opacity-100 transition-opacity duration-300">
            <div className="w-full h-24 mb-4 rounded-DEFAULT overflow-hidden relative">
              <Image
                alt="The Roastery exterior"
                className="object-cover"
                data-alt="warm inviting exterior of a modern coffee roastery with large glass windows and soft interior lighting"
                fill
                sizes="256px"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOASOlcNvb6b6DtqcA5D9cRh9Q7hjnCBJuSuut0dvKliYx-KjOpvZIJW2MT5WLvB8Or7lkpGKRTd2JpvFVlRRGPVEYgvyrkrbP3HqxM5ZJwBWLVgieacm22oZxFCwD2Zgv_ua9v6pyn9hr1CTnneQHbzgl7TvD_NGuSiDMfMD8z4852af6lnjHOzaMlhMhhvRFSHFqLM1u_g44t8PgDUUQqW3l6yAGl12u59VGx7FklYxF8Qw-Xn_F7Rhw6YwU3bnQuntkSXhwsek8"
              />
            </div>
            <h4 className="font-headline-md text-[18px] text-primary leading-tight mb-2">
              The Roastery
            </h4>
            <p className="font-body-md text-label-sm text-on-surface-variant">
              Closes at 8:00 PM
            </p>
          </div>
        </div>
        {/* Pin 2 (Inactive) */}
        <div className="absolute top-[25%] left-[30%] z-20 group">
          <div className="relative -translate-x-1/2 -translate-y-full cursor-pointer hover:-translate-y-[calc(100%+4px)] transition-transform">
            <span
              className="material-symbols-outlined text-primary text-3xl drop-shadow-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
          </div>
          {/* Hover Preview */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 glass-card p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <h4 className="font-headline-md text-[16px] text-primary leading-tight">
              Westside Pavilion
            </h4>
            <p className="font-body-md text-label-sm text-on-surface-variant mt-1">
              2.4 mi away
            </p>
          </div>
        </div>
        {/* Pin 3 (Inactive) */}
        <div className="absolute top-[65%] left-[70%] z-20 group">
          <div className="relative -translate-x-1/2 -translate-y-full cursor-pointer hover:-translate-y-[calc(100%+4px)] transition-transform">
            <span
              className="material-symbols-outlined text-primary text-3xl drop-shadow-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
          </div>
          {/* Hover Preview */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 glass-card p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <h4 className="font-headline-md text-[16px] text-primary leading-tight">
              North Market
            </h4>
            <p className="font-body-md text-label-sm text-on-surface-variant mt-1">
              4.1 mi away
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
