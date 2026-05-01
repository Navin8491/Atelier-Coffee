import Image from "next/image";

export default function Sustainability() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[819px] min-h-[600px] flex items-center justify-center bg-surface-container-high overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="misty morning over a lush green hillside coffee plantation with perfectly aligned rows of bushes and soft golden sunlight breaking through the clouds"
            className="object-cover opacity-80 mix-blend-multiply"
            data-alt="misty morning over a lush green hillside coffee plantation with perfectly aligned rows of bushes and soft golden sunlight breaking through the clouds"
            fill
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYYWTGStMnrCRXpVfUfGkL3r7qshhKODjdCFwUm9nymbpn29WREEEnDr9UxwhBW8tdMSaAWiP0mC405EhSJ7tCIC0nDjHJTVwU5ypA6e40nM_sFIKN8eVadLixjYc_6SyXtGoiY-eJlgZ8uyZ28OAfAfEQAd-kaGCp6s10-6k7Eyo3AXgJZT-8Uvkw_AjhEDjoLdbA9KWTnq0SKspg5h2wlEaGXrXLx3bpPP_8ga5dj0l3V0Se_9app38l2V05sEn0EbIVjkT_3QDz"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-background"></div>
        </div>
        <div className="relative z-10 text-center max-w-3xl px-gutter mx-auto">
          <span className="block font-label-caps text-label-caps text-tertiary-container mb-4 uppercase tracking-widest">
            Our Commitment
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-primary mb-6">
            From Seed to Sip
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-lowest/90 max-w-2xl mx-auto">
            Cultivating excellence through ethical stewardship. We believe that
            truly profound coffee begins with profound respect for the earth and
            the hands that harvest it.
          </p>
        </div>
      </section>

      {/* Introduction / Philosophy */}
      <section className="py-20 px-gutter max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-headline-md text-headline-md text-primary mb-6">
              The quiet art of conscious cultivation.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Our journey is defined by a slow, deliberate approach to sourcing.
              We bypass commoditized markets, forging direct, lasting
              partnerships with small-holder farms. This ensures not only the
              preservation of heritage coffee varietals but guarantees living
              wages and community investment where it matters most.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-DEFAULT font-label-caps text-label-caps uppercase hover:bg-primary-container transition-colors">
                Explore Our Standards
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low relative">
              <Image
                alt="close-up of artisan farmer hands holding freshly picked bright red and yellow coffee cherries against a backdrop of blurred green foliage"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="close-up of artisan farmer hands holding freshly picked bright red and yellow coffee cherries against a backdrop of blurred green foliage"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Kwa5nFIpCW6Gyq6BHNF8R9H4-wanbxlot7mW9zDHivlf9sOzYwLhRh47d-x0lSwkLdC5jQsFgmQDHF3B3HIN8yHEs94iRHxJfNKr9gZgLUIJw2qtnruxFEL-Wo5DreLcn4cXU-sa5K52Wpnf0S2zagBg61erq-wXk1Cfw4zzugzfHU5y5ocW8HHPag3TUV_TxW-spAY5D-UT-wHekMfD4MI-2HNqFTkfgpiTxoxcEKvFcqSuCIUSjR2abPLSHpObA0Q3o4DGrs2U"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-surface-container rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Initiatives */}
      <section className="bg-surface-container-lowest py-20 border-t border-surface-variant/30">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              Holistic Impact
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tangible steps towards a regenerative future, meticulously
              integrated into every aspect of our craft.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            {/* Direct Trade Card (Large) */}
            <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between group overflow-hidden relative border border-surface-variant/50">
              <div className="absolute inset-0 z-0">
                <Image
                  alt="warm sunlight filtering through a rustic wooden coffee drying rack covered in curing coffee beans"
                  className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  data-alt="warm sunlight filtering through a rustic wooden coffee drying rack covered in curing coffee beans"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXArfcFOOTG9vQNvRmUvxqkTZ8aKUUnKGkk0djKi2oM0hM35izYIrydu5NoPoH0QPXpATP1tk93CNdK74JxzdXvpEsLXHG_zg6cZg2HhUHYatsvpRJ38SYbHoT1xrdfV3uE1aYX8c_oZy6xjAkHM-_fg8O4Lmmm3mLAfcmVNkDgMr_h3SV64f1XkF6ptxGLaDbtaXOKPHcIo1DEY8bXyQICbGC5a1ho0b-shuEfi8tOWYsE4VRKpVAf08p5ewFfbfUM9eahwd4bY0v"
                />
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-highest text-primary">
                  <span className="material-symbols-outlined" data-icon="handshake">
                    handshake
                  </span>
                </span>
                <span className="font-label-caps text-label-caps text-primary uppercase bg-surface/80 px-3 py-1 rounded-full backdrop-blur-sm">
                  100% Direct
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Direct Trade Principles
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  By eliminating intermediaries, we ensure farmers receive a
                  premium well above fair-trade baselines, fostering true
                  economic stability.
                </p>
              </div>
            </div>
            {/* Organic Card (Accent) */}
            <div className="bg-secondary rounded-xl p-8 flex flex-col justify-between text-on-secondary relative overflow-hidden group">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-secondary-container rounded-full opacity-20 blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container/20 text-surface-container-lowest mb-6">
                  <span className="material-symbols-outlined" data-icon="eco">
                    eco
                  </span>
                </span>
                <h3 className="font-headline-sm text-headline-sm mb-2">
                  Organic Sanctuaries
                </h3>
                <p className="font-body-md text-body-md opacity-90">
                  Our partner farms utilize strictly organic methods, nurturing
                  soil health and promoting local biodiversity without synthetic
                  intervention.
                </p>
              </div>
            </div>
            {/* Zero Waste Card */}
            <div className="bg-surface-container rounded-xl p-8 flex flex-col justify-between border border-surface-variant/50">
              <div>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface text-primary mb-6 shadow-sm">
                  <span className="material-symbols-outlined" data-icon="recycling">
                    recycling
                  </span>
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Zero Waste Ambition
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  From 100% compostable retail packaging to repurposing spent
                  coffee grounds for local agriculture.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-surface-container-highest text-primary px-3 py-1 rounded-DEFAULT font-label-caps text-label-caps">
                  Compostable
                </span>
                <span className="bg-surface-container-highest text-primary px-3 py-1 rounded-DEFAULT font-label-caps text-label-caps">
                  Circular
                </span>
              </div>
            </div>
            {/* Resource Card */}
            <div className="md:col-span-2 bg-inverse-surface rounded-xl p-8 flex items-center justify-between group cursor-pointer border border-inverse-surface/50">
              <div className="max-w-lg">
                <h3 className="font-headline-sm text-headline-sm text-inverse-on-surface mb-2">
                  Annual Impact Report
                </h3>
                <p className="font-body-md text-body-md text-inverse-on-surface/80">
                  Review our verified metrics, community investments, and goals
                  for the upcoming harvest year in our detailed annual
                  disclosure.
                </p>
              </div>
              <div className="w-16 h-16 rounded-full border border-inverse-on-surface/20 flex items-center justify-center text-inverse-on-surface group-hover:bg-inverse-on-surface group-hover:text-inverse-surface transition-colors">
                <span className="material-symbols-outlined" data-icon="arrow_forward">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
