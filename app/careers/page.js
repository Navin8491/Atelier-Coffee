import Image from "next/image";

export default function Careers() {
  return (
    <div className="pt-20 w-full">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center justify-center px-8 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10"></div>
          <Image
            alt="Velvet Bean Atelier"
            className="object-cover object-center"
            data-alt="barista meticulously pouring latte art in a high-end, dimly lit cafe setting with warm ambient lighting"
            fill
            sizes="100vw"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1t73-K2AKMiX6Jrd_qaZXVg3COtt0k91L_WiJ0RRDRFASo8FgWwVY2O1iR52eILJ34QHAmllRaMYm-IXkYqi3BYdX9nXj6cAuIUiAgTfpNFpv72UVxF19eUonfHpbpRukiW9JGVSArCK8eVco0vxNI7Hv0BgK9GmCeXR9Wdg8nGK4kGXbTviXAtN0Vqsqs4JgtoIDS0cEiPJKC5QUxY9Z_pJKNbB1x0-PhwMSMr-RNrf5pARpj86JKCXDrs8Ag-LaJBA-o9iVSsrQ"
          />
        </div>
        <div className="relative z-20 max-w-[1200px] mx-auto text-center text-on-primary">
          <h1 className="font-headline-xl text-headline-xl mb-6 tracking-tight">
            Shape the Future of Coffee
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto mb-10 text-surface-container-low/90">
            Join an exclusive atelier dedicated to the pursuit of excellence. We
            are seeking visionaries, artisans, and partners to elevate the
            global coffee narrative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="px-8 py-4 bg-tertiary-container text-on-tertiary-container font-label-caps text-label-caps tracking-widest rounded hover:bg-tertiary-container/90 transition-all"
              href="#roles"
            >
              Explore Open Roles
            </a>
            <a
              className="px-8 py-4 border border-surface-container-low text-on-primary font-label-caps text-label-caps tracking-widest rounded hover:bg-surface-container-low hover:text-primary transition-all"
              href="#partner"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* Join the Atelier (Job Listings) */}
      <section className="py-20 px-8 bg-surface" id="roles">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 text-center">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">
              Careers
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-6">
              Join the Atelier
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              We curate our team as carefully as our beans. If you possess a
              deep reverence for craftsmanship and a dedication to unparalleled
              service, your place is here.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Role Card 1 */}
            <div className="bg-surface-container-lowest border border-[#E6D5C3] p-8 rounded hover:shadow-lg transition-shadow duration-300 group cursor-pointer relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-container transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Head Roaster
                </h3>
                <span className="bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-3 py-1 rounded-sm">
                  Full-Time
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">
                Lead our roasting operations with precision and artistry. You
                will manage our vintage Probat roasters and develop profiles
                for our single-origin microlots.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-tertiary font-label-caps text-label-caps">
                  London, UK
                </span>
                <span className="material-symbols-outlined text-primary group-hover:text-tertiary-container transition-colors">
                  arrow_forward
                </span>
              </div>
            </div>
            {/* Role Card 2 */}
            <div className="bg-surface-container-lowest border border-[#E6D5C3] p-8 rounded hover:shadow-lg transition-shadow duration-300 group cursor-pointer relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-container transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Senior Barista
                </h3>
                <span className="bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-3 py-1 rounded-sm">
                  Full-Time
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">
                Elevate the daily ritual. We seek a master of extraction and
                latte art to guide our patrons through our curated espresso
                menu and pour-over selections.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-tertiary font-label-caps text-label-caps">
                  Paris, FR
                </span>
                <span className="material-symbols-outlined text-primary group-hover:text-tertiary-container transition-colors">
                  arrow_forward
                </span>
              </div>
            </div>
            {/* Role Card 3 */}
            <div className="bg-surface-container-lowest border border-[#E6D5C3] p-8 rounded hover:shadow-lg transition-shadow duration-300 group cursor-pointer relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-container transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Lounge Manager
                </h3>
                <span className="bg-surface-variant text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-sm">
                  Leadership
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">
                Orchestrate the velvet experience. Oversee daily operations,
                ensure impeccable service standards, and cultivate an atmosphere
                of quiet luxury.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-tertiary font-label-caps text-label-caps">
                  Milan, IT
                </span>
                <span className="material-symbols-outlined text-primary group-hover:text-tertiary-container transition-colors">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masterclass & Supply Chain Bento Grid */}
      <section className="py-20 px-8 bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              The Foundation of Excellence
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Our commitment extends beyond the cup. We invest heavily in our
              people and our partners to ensure a sustainable, premium lineage
              from farm to lounge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Bento Item 1: Masterclass (Large) */}
            <div className="md:col-span-8 md:row-span-2 relative rounded overflow-hidden group">
              <Image
                alt="Masterclass Training"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                data-alt="close up of roasted coffee beans cascading down with warm dramatic lighting"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmZe2QsCKoEPXWrtyI5SrojMvLiNimTfeQPf0aiv3Nf-i3SgDRqoGn7ty-0Vr1w7Am78giFviBS8syUOgATL-tAVcEVugZp9gqPFpPZ7mdUm3l6xIyeAa2rCFF9Nvu7sFaAf4Vzm9eAf5lhGaZV3mfOpUs33Hlu8GwaeEv4sg47Xzo9-_aE8BkK-qHLeQ2i8OerZ7wbJu9FYEtt5w2RfsqKDNwkuKmQGxBxSUMJK-kDH1gSeeRZSdCp_ouzUOg4SmHFJobgKqi6Q2b"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="font-label-caps text-label-caps text-tertiary-container mb-2 block">
                  Continuous Education
                </span>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-4">
                  Masterclass Training
                </h3>
                <p className="font-body-md text-body-md text-surface-container-low max-w-md">
                  Every team member undergoes rigorous sensory training and
                  brewing education at our central academy, ensuring
                  unparalleled expertise.
                </p>
              </div>
            </div>
            {/* Bento Item 2: Supply Chain (Small Top Right) */}
            <div className="md:col-span-4 row-span-1 bg-surface-container-lowest border border-[#E6D5C3] rounded p-8 flex flex-col justify-center hover:bg-surface-bright transition-colors">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-4">
                eco
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                Curated Supply Chain
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Direct trade relationships with boutique farms, ensuring ethical
                sourcing and exquisite flavor profiles.
              </p>
            </div>
            {/* Bento Item 3: Heritage (Small Bottom Right) */}
            <div className="md:col-span-4 row-span-1 bg-primary text-on-primary rounded p-8 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <Image
                  alt="Heritage"
                  className="object-cover"
                  data-alt="vintage coffee grinder detail shot with moody lighting"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEXw7_pKOngavakrfOHTsDldYSPTjnkQXtwri0Fn4iXjcSqA5asGCGy8eeSFsaDwtvTdhG4VXmnC_LekPniOYQR0wO0uWDAxpB8mAfV34vYMHna9cWADDWXFzbG11966eznmuxABY-2ZvX-H3vcD8Bz1HQdMu1M9esNFX9iGmDT4Vniq83EvwkgfXGNoZIE6JP1k1ViJa0MdoyfjXiBrknvCGvdlnoWG1MFRer434dV4jswxK9ATbzXVH3kmCBms1NbFftEV0DlWkj"
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">
                  A Legacy of Quality
                </h3>
                <p className="font-body-md text-body-md text-inverse-on-surface text-sm mb-4">
                  Decades of refining the art of the perfect brew.
                </p>
                <a
                  className="inline-flex items-center text-tertiary-container font-label-caps text-label-caps hover:text-tertiary-fixed transition-colors"
                  href="#"
                >
                  Our Story{" "}
                  <span className="material-symbols-outlined text-sm ml-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with Us Section */}
      <section className="py-20 px-8 bg-surface" id="partner">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">
              Franchise Opportunities
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-6">
              Partner with Us
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Bring the Velvet Bean experience to your city. We offer exclusive
              franchise opportunities for discerning partners who share our
              vision for uncompromising quality and elegant hospitality.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-tertiary mr-3 mt-1">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  Turnkey architectural design matching our quiet luxury
                  aesthetic.
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-tertiary mr-3 mt-1">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  Comprehensive staff training and operational support.
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-tertiary mr-3 mt-1">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  Exclusive access to our proprietary coffee blends and
                  equipment.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 bg-surface-container-lowest p-8 md:p-12 border border-[#E6D5C3] rounded shadow-sm">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-6">
              Inquire About Franchising
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
                    First Name
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary focus:ring-0 px-0 py-2 font-body-md text-primary placeholder-outline-variant transition-colors"
                    placeholder="Enter your first name"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
                    Last Name
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary focus:ring-0 px-0 py-2 font-body-md text-primary placeholder-outline-variant transition-colors"
                    placeholder="Enter your last name"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
                  Email Address
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary focus:ring-0 px-0 py-2 font-body-md text-primary placeholder-outline-variant transition-colors"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
                  Proposed Location (City, Country)
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary focus:ring-0 px-0 py-2 font-body-md text-primary placeholder-outline-variant transition-colors"
                  placeholder="e.g. Kyoto, Japan"
                  type="text"
                />
              </div>
              <button
                className="w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest rounded hover:bg-primary/90 transition-all mt-4"
                type="button"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
