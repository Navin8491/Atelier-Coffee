import Image from "next/image";

export default function Events() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Elegant sunlit interior of a high-end cafe with warm lighting, long wooden tables, and soft shadows, ideal for private events"
            className="object-cover object-center filter brightness-90"
            data-alt="Elegant sunlit interior of a high-end cafe with warm lighting, long wooden tables, and soft shadows, ideal for private events"
            fill
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMwSKpjqAusL3veOyELsFHKv5oRC4C5au71TKtkyEH3l-JZAbxQNBOw_y9ae2ryriJJjeKe5rQjJHSil15mfXQ-ZhWKzna1ZUyFKtqpKq5SL2fJ77BIcousmq5I9A0AXiyqAaheFumaGlZV0YhEQKKDWU0_LpqjyvV7zu5c6peUWubULMLZkXpGjLBga9IQqR4xWMFtpeJQ64HOzaXy16NE9hQPUTxftG4g-zuf9F14ZF17wGp-UKFj4xO5uzD9uBFJrOv9f4wEA9O"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="block text-label-caps font-label-caps text-surface-container-highest tracking-widest mb-6 uppercase text-glow">
            Curated Gatherings at Aura
          </span>
          <h1 className="text-headline-xl font-headline-xl text-surface-container-lowest mb-8 text-glow">
            Elevate Your Occasion
          </h1>
          <p className="text-body-lg font-body-lg text-surface-container-low max-w-2xl mx-auto mb-10 text-glow">
            Discover a sanctuary for your most meaningful moments. From intimate
            artisan tastings to expansive celebrations, Velvet Bean provides a
            backdrop of refined warmth and exceptional craftsmanship.
          </p>
          <a
            className="inline-flex items-center justify-center px-8 py-4 bg-tertiary-container text-on-tertiary-container font-label-caps text-label-caps rounded-full hover:bg-tertiary hover:text-on-tertiary transition-all duration-300 shadow-md"
            href="#inquire"
          >
            Inquire About Dates
          </a>
        </div>
      </section>

      {/* The Spaces Section */}
      <section className="py-section-padding px-gutter max-w-container-max mx-auto py-20">
        <div className="text-center mb-16">
          <h2 className="text-headline-md font-headline-md text-primary mb-4">
            Our Spaces
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-xl mx-auto">
            Thoughtfully designed environments to suit gatherings of various
            scales and tones.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
          {/* The Conservatory (Large Tile) */}
          <div className="md:col-span-8 rounded-xl overflow-hidden relative group img-hover-zoom">
            <Image
              alt="Bright conservatory space with high glass ceilings, lush green plants, and elegant dining setups bathed in natural light"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Bright conservatory space with high glass ceilings, lush green plants, and elegant dining setups bathed in natural light"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMrPbbVJiEoSZ5uLn5scj4sglQC8c0AoAd_tpEnfZkLX372RXUdvPjZd2PxfTKmRdrLy9IDx-wwqAqHjW6hi3c7hlA7ik7ogDzbIjb1_qMLwX56trQ8knherC1Sdm5bj7zVYTu-iYJzCB0z6sCrVschakhxPbRK1I7kPW858awYYk1lsSwnYv2V9gtRQJ3ZibyLr81XscO6zGlcmqv6M0CxQt7HwSNgFObBODRXTiDBnG-2k43tdiLnwlJlwNPDII__MGBOqjSmsOX"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <span className="inline-block px-3 py-1 bg-secondary-container/90 text-on-secondary-container text-label-caps font-label-caps rounded mb-3 backdrop-blur-sm">
                    Up to 60 Guests
                  </span>
                  <h3 className="text-headline-sm font-headline-sm text-surface-container-lowest mb-2">
                    The Conservatory
                  </h3>
                  <p className="text-body-md font-body-md text-surface-container-low max-w-md hidden md:block">
                    A luminous, glass-enclosed atrium filled with organic
                    textures and natural light. Perfect for daytime brunches or
                    twilight receptions.
                  </p>
                </div>
                <button className="w-12 h-12 rounded-full bg-surface-container-lowest/20 backdrop-blur-md flex items-center justify-center text-surface-container-lowest hover:bg-tertiary-container hover:text-on-tertiary-container transition-colors">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          {/* The Roaster's Room (Vertical Tile) */}
          <div className="md:col-span-4 rounded-xl overflow-hidden relative group img-hover-zoom bg-surface-container">
            <Image
              alt="Intimate dark room with vintage coffee roasting equipment, warm amber lighting, and a long wooden tasting table"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Intimate dark room with vintage coffee roasting equipment, warm amber lighting, and a long wooden tasting table"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpna8kx54IChVnAhijFKBKwycUBbv7hx_aUHE9R8k7DYN6W4FU8Rmji9t4n_XKco8K8jtR42mmtcc0TRl4Mo6W3gTcq7bKNbARsEH6EI-xoyq1JZHtrsFtrfNJKpNhHOL47ZTssSmcV3wBFxJtaUe4Vq-uUhZG5ur4fusKO0xrn02-gdC_RK70pqDmLRMbN27Atv5p8HgEWT5dzVVqI39fMK_Hy3kIsb88w4qNL_LMdHXMpapOV8EkxarrpQ6Rci3YNNk_cCPI5PXz"
            />
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors duration-500"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="inline-block px-3 py-1 bg-surface-variant/90 text-on-surface-variant text-label-caps font-label-caps rounded mb-3 self-start backdrop-blur-sm">
                Up to 12 Guests
              </span>
              <h3 className="text-headline-sm font-headline-sm text-surface-container-lowest mb-2">
                The Roaster&apos;s Room
              </h3>
              <p className="text-body-md font-body-md text-surface-container-low opacity-90">
                An intimate, sensory space surrounded by our vintage roasting
                equipment. Ideal for focused tastings and private executive
                meetings.
              </p>
            </div>
          </div>
          {/* The Lounge (Horizontal Tile) */}
          <div className="md:col-span-12 rounded-xl overflow-hidden relative group img-hover-zoom h-[300px]">
            <Image
              alt="Cozy lounge area with velvet armchairs, low ambient lighting, and elegant coffee tables"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              data-alt="Cozy lounge area with velvet armchairs, low ambient lighting, and elegant coffee tables"
              fill
              sizes="100vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkMt24zFbdf6Dt5AyRIG4F1EIzOI4i2a6Ur7EqRoToUBSjiRPGxCxIhfpyEkc7yBIuXfP91FTC0ayApednS6H7VYOH_AndSj-jDllGzOEO0b4pqbMAl5uY_jIwv6XSzjlJ_3wFmsK64oD-QYzv3pErQW4rA4HWLGc2STB3ggNOhfdhmASnxh1sJroSA0SchIBnaHW2C7afNSFQgp_Hcy6sd6JsDIUSFftb7ov95Ii-xqsvP_CWBYREA9QVuQ9bSUuVMHfHtbI7b74-"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-center max-w-2xl">
              <span className="inline-block px-3 py-1 bg-secondary-container/90 text-on-secondary-container text-label-caps font-label-caps rounded mb-3 self-start">
                Up to 30 Guests
              </span>
              <h3 className="text-headline-md font-headline-md text-primary mb-4">
                The Velvet Lounge
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                Plush seating, low lighting, and an atmosphere of quiet luxury.
                Designed for relaxed networking, creative workshops, or evening
                cocktails.
              </p>
              <a
                className="inline-flex items-center text-label-caps font-label-caps text-tertiary-container hover:text-tertiary transition-colors uppercase tracking-widest"
                href="#inquire"
              >
                Request Floorplan{" "}
                <span className="material-symbols-outlined ml-2 text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Experiences */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-20">
            <h2 className="text-headline-md font-headline-md text-primary mb-4">
              Curated Experiences
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-xl mx-auto">
              Beyond just a space, we offer crafted sensory journeys led by our
              master baristas.
            </p>
          </div>
          <div className="space-y-24">
            {/* Experience 1 */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden img-hover-zoom">
                  <Image
                    alt="Close-up of artisan coffee tasting setup with distinct beans, tasting notes cards, and sleek glassware on a dark wooden table"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    data-alt="Close-up of artisan coffee tasting setup with distinct beans, tasting notes cards, and sleek glassware on a dark wooden table"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuy2ficiNk190s5HnCgXRgZzdDmMTZehVcB8CzDE21SunSMEgYbal9fTFubikyRe0Ow89Mc0KZMLsZAaBYCWChZ9nT2JqU2bK5XIe4DQB2KdOnjH7a-FlvoRh4x3ugvEeBBTpVwymWIuRoD6mcMMqxFzzJOswOdeDV-sVaYL4jOQ9ucYk272nGi4T-k6AUS1RsdYZN1QZh3W9GtfQIbpqUuKhtZ9vAJACFR9IYZwPzKwaUw58d4RHeryOzJh-fKo2yRHqUG9h44ALe"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary-container rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-label-caps font-label-caps text-tertiary uppercase tracking-widest">
                  Masterclass
                </span>
                <h3 className="text-headline-md font-headline-md text-primary">
                  Artisan Coffee Tasting
                </h3>
                <p className="text-body-lg font-body-lg text-on-surface-variant">
                  A guided exploration through our rarest single-origin reserves.
                  Learn the nuances of acidity, body, and aroma as our head
                  roaster leads your group through a professional cupping session.
                </p>
                <ul className="space-y-3 text-body-md font-body-md text-on-surface">
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-tertiary-container mr-3">
                      check_circle
                    </span>{" "}
                    90-minute guided session
                  </li>
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-tertiary-container mr-3">
                      check_circle
                    </span>{" "}
                    Tasting of 4 exclusive roasts
                  </li>
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-tertiary-container mr-3">
                      check_circle
                    </span>{" "}
                    Curated pastry pairings
                  </li>
                </ul>
              </div>
            </div>
            {/* Experience 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden img-hover-zoom">
                  <Image
                    alt="Elegant brunch spread with artisan sourdough, fresh pastries, and beautifully poured lattes on a bright marble table"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    data-alt="Elegant brunch spread with artisan sourdough, fresh pastries, and beautifully poured lattes on a bright marble table"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDugUVVIYCBrmG8AMmweoK4G7RIer8qWlq2ctc_CLszH7lUbE1ItAT9_gzdjgOq0BGltIrfXJETxfqQT4tzdWV2AAW5ZJacP7YNoM4GM3J_3guRwaieMhnizzF5heMROZf842AzoVHGbg5vPLQMsXDaSkGI6NnzqgeDTaAwl6OGb9NKNbcNZ77Z8hCZlYXyKgceDpfhdi-kgy7R7OkJ4BuBN4BBJNh3WhMXg937lUph5hwWFOutlau92os5cgZtIjJfk48yrJ4DeAT8"
                  />
                </div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-container rounded-full mix-blend-multiply opacity-30 blur-2xl"></div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-label-caps font-label-caps text-tertiary uppercase tracking-widest">
                  Dining
                </span>
                <h3 className="text-headline-md font-headline-md text-primary">
                  The Velvet Brunch
                </h3>
                <p className="text-body-lg font-body-lg text-on-surface-variant">
                  Elevate your morning gatherings with a bespoke culinary
                  experience. Our seasonal brunch menu is crafted to harmonize
                  perfectly with our specialty coffee offerings, served in an
                  atmosphere of unhurried luxury.
                </p>
                <ul className="space-y-3 text-body-md font-body-md text-on-surface">
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-tertiary-container mr-3">
                      check_circle
                    </span>{" "}
                    Custom seasonal menu
                  </li>
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-tertiary-container mr-3">
                      check_circle
                    </span>{" "}
                    Unlimited specialty coffee service
                  </li>
                  <li className="flex items-center">
                    <span className="material-symbols-outlined text-tertiary-container mr-3">
                      check_circle
                    </span>{" "}
                    Dedicated hospitality team
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 relative overflow-hidden" id="inquire">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Abstract macro shot of coffee crema with rich brown and golden tones"
            className="object-cover opacity-20"
            data-alt="Abstract macro shot of coffee crema with rich brown and golden tones"
            fill
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB8IRgs_8i12XeuNsSqO757_pi2d0SC-nMHFoIwsPFpMmiVJPJoUhilb3VJN-j5gc2kzDBRpAvdGk3gdGYm1MCStJkpjf0Hpgm1okNT5cSGn94mpU0UO5JWDojx9KgYLo9x-WdEniKusMRMurqyFFkRfcuxjzCHNlir_o4rEzh38hrPy88J7ivPVm3L6vGWE3KZ79KEbd38lpIQXObAva83CQX1_CAcahSJo6hvsg9aB57-5jCC6bI5hiy9tcY-2Ka4gF5Q5nsLALa"
          />
        </div>
        <div className="max-w-4xl mx-auto px-gutter relative z-10">
          <div className="glass-panel rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-surface-variant/50 bg-surface/80 backdrop-blur-md">
            <div className="text-center mb-10">
              <h2 className="text-headline-md font-headline-md text-primary mb-3">
                Begin Planning
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Share the details of your vision, and our events director will be
                in touch shortly.
              </p>
            </div>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Input Group */}
                <div className="relative">
                  <input
                    className="block w-full border-0 border-b border-outline-variant bg-transparent py-3 px-0 text-body-md text-on-surface focus:border-tertiary-container focus:ring-0 peer transition-colors placeholder-transparent"
                    id="first_name"
                    placeholder="First Name"
                    type="text"
                  />
                  <label
                    className="absolute top-3 left-0 text-label-caps font-label-caps text-on-surface-variant transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary-container peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="block w-full border-0 border-b border-outline-variant bg-transparent py-3 px-0 text-body-md text-on-surface focus:border-tertiary-container focus:ring-0 peer transition-colors placeholder-transparent"
                    id="last_name"
                    placeholder="Last Name"
                    type="text"
                  />
                  <label
                    className="absolute top-3 left-0 text-label-caps font-label-caps text-on-surface-variant transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary-container peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="block w-full border-0 border-b border-outline-variant bg-transparent py-3 px-0 text-body-md text-on-surface focus:border-tertiary-container focus:ring-0 peer transition-colors placeholder-transparent"
                    id="email"
                    placeholder="Email Address"
                    type="email"
                  />
                  <label
                    className="absolute top-3 left-0 text-label-caps font-label-caps text-on-surface-variant transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary-container peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="block w-full border-0 border-b border-outline-variant bg-transparent py-3 px-0 text-body-md text-on-surface focus:border-tertiary-container focus:ring-0 peer transition-colors placeholder-transparent"
                    id="phone"
                    placeholder="Phone Number"
                    type="tel"
                  />
                  <label
                    className="absolute top-3 left-0 text-label-caps font-label-caps text-on-surface-variant transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary-container peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                </div>
              </div>
              {/* Custom Selects/Radios for Event Details */}
              <div className="pt-4">
                <span className="block text-label-caps font-label-caps text-on-surface-variant mb-4">
                  Event Type
                </span>
                <div className="flex flex-wrap gap-3">
                  <label className="cursor-pointer">
                    <input
                      className="peer sr-only"
                      name="event_type"
                      type="radio"
                      value="tasting"
                    />
                    <span className="inline-block px-5 py-2.5 rounded-full border border-outline-variant text-body-md font-body-md text-on-surface-variant peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-all hover:bg-surface-variant">
                      Tasting
                    </span>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      className="peer sr-only"
                      name="event_type"
                      type="radio"
                      value="brunch"
                    />
                    <span className="inline-block px-5 py-2.5 rounded-full border border-outline-variant text-body-md font-body-md text-on-surface-variant peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-all hover:bg-surface-variant">
                      Brunch / Dining
                    </span>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      className="peer sr-only"
                      name="event_type"
                      type="radio"
                      value="meeting"
                    />
                    <span className="inline-block px-5 py-2.5 rounded-full border border-outline-variant text-body-md font-body-md text-on-surface-variant peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-all hover:bg-surface-variant">
                      Corporate Meeting
                    </span>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      className="peer sr-only"
                      name="event_type"
                      type="radio"
                      value="celebration"
                    />
                    <span className="inline-block px-5 py-2.5 rounded-full border border-outline-variant text-body-md font-body-md text-on-surface-variant peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-all hover:bg-surface-variant">
                      Private Celebration
                    </span>
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="relative">
                  <input
                    className="block w-full border-0 border-b border-outline-variant bg-transparent py-3 px-0 text-body-md text-on-surface focus:border-tertiary-container focus:ring-0 peer transition-colors placeholder-transparent"
                    id="guests"
                    max="100"
                    min="1"
                    placeholder="Estimated Guest Count"
                    type="number"
                  />
                  <label
                    className="absolute top-3 left-0 text-label-caps font-label-caps text-on-surface-variant transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary-container peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                    htmlFor="guests"
                  >
                    Estimated Guest Count
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="block w-full border-0 border-b border-outline-variant bg-transparent py-3 px-0 text-body-md text-on-surface focus:border-tertiary-container focus:ring-0 peer transition-colors placeholder-transparent"
                    id="date"
                    placeholder="Preferred Date (Optional)"
                    type="date"
                  />
                  <label
                    className="absolute top-3 left-0 text-label-caps font-label-caps text-on-surface-variant transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary-container peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                    htmlFor="date"
                  >
                    Preferred Date (Optional)
                  </label>
                </div>
              </div>
              <div className="relative pt-4">
                <textarea
                  className="block w-full border-0 border-b border-outline-variant bg-transparent py-3 px-0 text-body-md text-on-surface focus:border-tertiary-container focus:ring-0 peer transition-colors resize-none placeholder-transparent"
                  id="message"
                  placeholder="Additional Details or Vision"
                  rows={3}
                ></textarea>
                <label
                  className="absolute top-7 left-0 text-label-caps font-label-caps text-on-surface-variant transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary-container peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                  htmlFor="message"
                >
                  Additional Details or Vision
                </label>
              </div>
              <div className="pt-6 text-center">
                <button
                  className="inline-flex items-center justify-center px-10 py-4 bg-primary text-on-primary font-label-caps text-label-caps rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 w-full md:w-auto shadow-md"
                  type="submit"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
