import Image from "next/image";

export default function Loyalty() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[614px] flex items-center justify-center pt-20 px-4 md:px-8 overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Elegant dark roasted coffee beans scattered on a premium textured surface with soft warm moody lighting"
            className="object-cover opacity-30 mix-blend-multiply"
            data-alt="Elegant dark roasted coffee beans scattered on a premium textured surface with soft warm moody lighting"
            fill
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0lQakMF3fKi0ikxySqcB0NbeDlUxturdIUGRQ7zDhH6x2cx_t7JZ_9AFdoDv8Nl-qNYLx4JwrN9AWlQ-V9_onI0d1qUNysR2vEDEGJ9icepM6K9JC7WS7EQaNaTPtzWZIJEM_ZzDUTTFHAeVNFE1hjuG9AYOuiw8xGTjBBnZpL5x4YSgKFOTEF_VHJVXYFmjfllvTkYmvEcAEFSP2wJZ_382JhscjyZgCk91NX88MDNrVKqckovATfnBeJXmon4ebqXwpXXFYZQqB"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <h1 className="font-headline-xl text-headline-xl text-primary">
            The Bean Circle
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A curated loyalty experience for the discerning palette. Elevate
            your daily ritual with exclusive access, secret menus, and rewards
            that matter.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <button className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-surface-tint transition-colors">
              Join the Circle
            </button>
            <button className="border border-tertiary-container text-tertiary-container font-label-caps text-label-caps px-8 py-4 rounded hover:bg-surface-container-low transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Balance Check (Existing Users) */}
      <section className="py-20 px-4 md:px-8 bg-background max-w-[1200px] mx-auto">
        <div className="bg-surface-container-low border border-surface-variant rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_4px_24px_rgba(39,19,16,0.03)]">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined text-3xl" data-icon="account_circle">
                account_circle
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Check Your Balance
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Enter your Member ID to view points.
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-auto gap-4">
            <input
              className="w-full md:w-64 bg-transparent border-0 border-b border-outline-variant focus:border-tertiary-container pb-2 px-0 font-body-md text-on-surface placeholder-on-surface-variant/50 focus:ring-0 transition-colors"
              placeholder="Member ID"
              type="text"
            />
            <button className="text-tertiary-container hover:text-on-tertiary-container transition-colors flex items-center gap-2">
              <span className="font-label-caps text-label-caps">Check</span>
              <span className="material-symbols-outlined" data-icon="arrow_forward">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-20 px-4 md:px-8 bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-primary">
              Membership Tiers
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-xl mx-auto">
              Progress through our curated tiers as you explore our offerings.
              Each level unlocks new layers of the Velvet Bean experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bronze Card */}
            <div className="bg-surface-container-lowest border border-surface-variant rounded-lg p-8 relative overflow-hidden group hover:shadow-[0_8px_32px_rgba(39,19,16,0.05)] transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <span className="material-symbols-outlined text-6xl" data-icon="coffee">
                  coffee
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface-variant mb-2">
                Bronze
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant/80 mb-6 border-b border-surface-variant pb-6">
                Entry Level
              </p>
              <ul className="space-y-4 font-body-md text-body-md text-on-surface">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm" data-icon="check">
                    check
                  </span>
                  Earn 1 point per $1 spent
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm" data-icon="check">
                    check
                  </span>
                  Complimentary Birthday Pastry
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm" data-icon="check">
                    check
                  </span>
                  Monthly Newsletter
                </li>
              </ul>
            </div>
            {/* Silver Card */}
            <div className="bg-surface-container-low border border-outline-variant rounded-lg p-8 relative overflow-hidden group hover:shadow-[0_8px_32px_rgba(39,19,16,0.05)] transition-all duration-300 transform md:-translate-y-4">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <span className="material-symbols-outlined text-6xl text-primary" data-icon="workspace_premium">
                  workspace_premium
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                Silver
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 border-b border-surface-variant pb-6">
                250 Points Required
              </p>
              <ul className="space-y-4 font-body-md text-body-md text-on-surface">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm" data-icon="check">
                    check
                  </span>
                  Earn 1.5 points per $1 spent
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm" data-icon="check">
                    check
                  </span>
                  Complimentary Birthday Pastry &amp; Drink
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm" data-icon="check">
                    check
                  </span>
                  Early Access to New Blends
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm" data-icon="check">
                    check
                  </span>
                  1 Free Refill per visit
                </li>
              </ul>
            </div>
            {/* Gold Card */}
            <div className="bg-primary border border-primary-container rounded-lg p-8 relative overflow-hidden group hover:shadow-[0_8px_32px_rgba(39,19,16,0.1)] transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <span className="material-symbols-outlined text-6xl text-tertiary-container" data-icon="diamond">
                  diamond
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-tertiary-container mb-2">
                Gold
              </h3>
              <p className="font-body-md text-body-md text-primary-fixed-dim mb-6 border-b border-primary-container pb-6">
                1000 Points Required
              </p>
              <ul className="space-y-4 font-body-md text-body-md text-on-primary">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm" data-icon="check">
                    check
                  </span>
                  Earn 2 points per $1 spent
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm" data-icon="check">
                    check
                  </span>
                  Exclusive &apos;Secret Menu&apos; Access
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm" data-icon="check">
                    check
                  </span>
                  Priority Seating Booking
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm" data-icon="check">
                    check
                  </span>
                  Annual Tasting Event Invite
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Circle Perks Bento Grid */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-headline-md text-headline-md text-primary mb-12">
            Circle Perks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Secret Menu (Large Span) */}
            <div className="md:col-span-2 md:row-span-2 rounded-xl relative overflow-hidden group">
              <Image
                alt="Artisan pouring latte art into a dark ceramic cup in a dimly lit premium cafe setting"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Artisan pouring latte art into a dark ceramic cup in a dimly lit premium cafe setting"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD38Ov4HQBGL-m4LHDJd54AOA07ChO6AHvlWiZE-Vinx6Na9r9TnG9DEFe-yjNl2kLkjKFMgFIqJYr70ZVgl5ywjBM67B7ZZyDuodf3lG1T-cM6Ev4f1K2FjfVWZnPakpFR4TqKSm8D4Q-IwH1XBXOOXDqOVhOeJvJz_liaXl2K4YtSchILDaU64ACkwELxlGqDGXdldYhztkbmqkDvz1G-CuExPfjtrd9TC2UO4JZCXDf30U8VSpyPsb5fRyj-pP3VXlhMVZjf59Nn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
                <span className="inline-block bg-surface-container-highest/20 backdrop-blur-md text-tertiary-container font-label-caps text-label-caps px-3 py-1 rounded-full w-max mb-4">
                  Gold Tier Exclusive
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">
                  The Secret Menu
                </h3>
                <p className="font-body-md text-body-md text-on-primary/80">
                  Off-menu creations crafted by our head baristas, available
                  only to our most dedicated patrons.
                </p>
              </div>
            </div>
            {/* Birthday Treat */}
            <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col justify-center border border-surface-variant hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-tertiary-container text-3xl mb-4" data-icon="cake">
                cake
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                Birthday Celebrations
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A little something sweet on your special day. Enjoy a
                complimentary pastry of your choice from our bakery case.
              </p>
            </div>
            {/* Early Access */}
            <div className="bg-surface rounded-xl p-8 flex flex-col justify-center border border-surface-variant hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-primary-container text-3xl mb-4" data-icon="local_cafe">
                local_cafe
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                Early Access
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Taste our seasonal single-origin roasts before anyone else.
              </p>
            </div>
            {/* Workshops */}
            <div className="bg-surface rounded-xl p-8 flex flex-col justify-center border border-surface-variant hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-primary-container text-3xl mb-4" data-icon="event_seat">
                event_seat
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                Workshops
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Priority booking for our monthly brewing and tasting
                masterclasses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
