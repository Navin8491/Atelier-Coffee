import Image from "next/image";

export default function ProductDetail() {
  return (
    <div className="flex-grow pt-[120px] pb-20">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Imagery */}
          <div className="relative h-[600px] rounded-xl overflow-hidden shadow-sm">
            <Image
              alt="Cinematic shot of rich dark roasted coffee beans scattered on a textured matte surface with warm directional lighting"
              className="object-cover transition-transform duration-700 hover:scale-105"
              data-alt="Cinematic shot of rich dark roasted coffee beans scattered on a textured matte surface with warm directional lighting"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn4NU-FFntRtah_SScYd7NgfItZDMG47w94O1H8mipJ79NW17N36QeME_U5cU_FNFXOLpelWVQNuqBCIp0BThTYKL3TU0bF1GwD76Z9cYHuUG7qv0Ihd5IdSEYLMrt4dQ08CuR4vkqX9ZhqEPP-9LmO-aUKrvBf5YVaW2BMQdZrfvWwMtrzRiFHEp0p1aOaB9NaZVgvhR9LpAjcEeJ8Jry7HBigfs3OJ2quz1f5RgwVVfoe3zImZAoLM3ytp1kae7kLS50MH3EgtU9"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex gap-2">
              <span className="bg-secondary/20 text-primary px-3 py-1 rounded-lg font-label-caps text-label-caps backdrop-blur-md">
                Single Origin
              </span>
              <span className="bg-secondary/20 text-primary px-3 py-1 rounded-lg font-label-caps text-label-caps backdrop-blur-md">
                Dark Roast
              </span>
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-2">
                Ethiopia Yirgacheffe
              </h2>
              <h1 className="font-headline-xl text-headline-xl text-primary mb-4">
                Midnight Velvet Blend
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                A decadent, full-bodied roast with profound notes of dark cocoa,
                wild blackberry, and a lingering molasses finish. Cultivated at
                high altitudes for intense flavor concentration.
              </p>
            </div>
            <div className="flex items-center gap-6 mb-8">
              <span className="font-headline-sm text-headline-sm text-primary">
                $28.00
              </span>
              <div className="flex text-tertiary-container items-center">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star_half
                </span>
                <span className="ml-2 font-label-caps text-label-caps text-on-surface-variant pt-1">
                  (124 Reviews)
                </span>
              </div>
            </div>

            {/* Configuration Options */}
            <div className="space-y-6 mb-10">
              <div>
                <label className="block font-label-caps text-label-caps text-primary mb-3">
                  Select Grind
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button className="py-3 border border-outline-variant rounded-DEFAULT font-label-caps text-label-caps text-primary hover:border-tertiary hover:bg-surface-container transition-colors focus:border-tertiary focus:ring-1 focus:ring-tertiary">
                    Whole Bean
                  </button>
                  <button className="py-3 border border-outline-variant rounded-DEFAULT font-label-caps text-label-caps text-primary hover:border-tertiary hover:bg-surface-container transition-colors">
                    Coarse (French Press)
                  </button>
                  <button className="py-3 border border-outline-variant rounded-DEFAULT font-label-caps text-label-caps text-primary hover:border-tertiary hover:bg-surface-container transition-colors">
                    Fine (Espresso)
                  </button>
                </div>
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-primary mb-3">
                  Select Size
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 border border-tertiary bg-surface-container rounded-DEFAULT font-label-caps text-label-caps text-primary">
                    12 oz (Standard)
                  </button>
                  <button className="py-3 border border-outline-variant rounded-DEFAULT font-label-caps text-label-caps text-primary hover:border-tertiary hover:bg-surface-container transition-colors">
                    2 lbs (Value)
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4">
              <button className="w-full bg-primary text-on-primary py-4 rounded-DEFAULT font-label-caps text-label-caps hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">shopping_bag</span>
                Add to Cart
              </button>
              <button className="w-full border border-tertiary text-tertiary py-4 rounded-DEFAULT font-label-caps text-label-caps hover:bg-tertiary/5 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">event_repeat</span>
                Subscribe &amp; Save 15%
              </button>
            </div>
          </div>
        </div>

        {/* The Story & Sensory Profile (Bento Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* The Story */}
          <div className="lg:col-span-2 bg-surface-container-highest rounded-xl p-10 border border-[#E6D5C3] flex flex-col justify-center">
            <h3 className="font-headline-md text-headline-md text-primary mb-6">
              The Origin Story
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              Sourced exclusively from the renowned Chelbesa washing station in
              the Gedeb district of Yirgacheffe. Grown at a staggering 2,100
              meters above sea level, these heirloom varietals mature slowly
              under a dense canopy of shade trees. This prolonged maturation
              period allows the cherries to develop complex sugars, resulting in
              a cup profile that is intensely aromatic and deeply nuanced.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-outline-variant/30">
              <div>
                <span className="block font-label-caps text-label-caps text-on-surface-variant mb-1">
                  Origin
                </span>
                <span className="font-headline-sm text-headline-sm text-primary text-lg">
                  Ethiopia
                </span>
              </div>
              <div>
                <span className="block font-label-caps text-label-caps text-on-surface-variant mb-1">
                  Region
                </span>
                <span className="font-headline-sm text-headline-sm text-primary text-lg">
                  Yirgacheffe
                </span>
              </div>
              <div>
                <span className="block font-label-caps text-label-caps text-on-surface-variant mb-1">
                  Altitude
                </span>
                <span className="font-headline-sm text-headline-sm text-primary text-lg">
                  2,100m
                </span>
              </div>
              <div>
                <span className="block font-label-caps text-label-caps text-on-surface-variant mb-1">
                  Process
                </span>
                <span className="font-headline-sm text-headline-sm text-primary text-lg">
                  Washed
                </span>
              </div>
            </div>
          </div>

          {/* Sensory Notes */}
          <div className="bg-surface-container rounded-xl p-10 border border-[#E6D5C3] flex flex-col">
            <h3 className="font-headline-md text-headline-md text-primary mb-8">
              Sensory Profile
            </h3>
            <div className="space-y-6 flex-grow">
              {/* Acidity */}
              <div>
                <div className="flex justify-between font-label-caps text-label-caps text-primary mb-2">
                  <span>Acidity</span>
                  <span>Bright / Citrus</span>
                </div>
                <div className="h-1 bg-outline-variant/30 rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-3/4 rounded-full"></div>
                </div>
              </div>
              {/* Body */}
              <div>
                <div className="flex justify-between font-label-caps text-label-caps text-primary mb-2">
                  <span>Body</span>
                  <span>Syrupy / Heavy</span>
                </div>
                <div className="h-1 bg-outline-variant/30 rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-4/5 rounded-full"></div>
                </div>
              </div>
              {/* Sweetness */}
              <div>
                <div className="flex justify-between font-label-caps text-label-caps text-primary mb-2">
                  <span>Sweetness</span>
                  <span>Molasses</span>
                </div>
                <div className="h-1 bg-outline-variant/30 rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-2/3 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="pt-8 mt-8 border-t border-outline-variant/30">
              <span className="block font-label-caps text-label-caps text-on-surface-variant mb-3">
                Tasting Notes
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary/10 text-on-secondary-fixed-variant px-3 py-1 rounded-lg font-label-caps text-label-caps border border-secondary/20">
                  Dark Cocoa
                </span>
                <span className="bg-secondary/10 text-on-secondary-fixed-variant px-3 py-1 rounded-lg font-label-caps text-label-caps border border-secondary/20">
                  Blackberry
                </span>
                <span className="bg-secondary/10 text-on-secondary-fixed-variant px-3 py-1 rounded-lg font-label-caps text-label-caps border border-secondary/20">
                  Molasses
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Brewing Recommendations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">
              Brewing Recommendations
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              To extract the optimal balance of dark cocoa and bright berry
              notes, we suggest these precise brewing parameters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pour Over */}
            <div className="bg-background border border-outline-variant p-8 rounded-xl hover:shadow-sm hover:border-tertiary transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-tertiary group-hover:bg-tertiary group-hover:text-surface transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  water_drop
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                Pour Over (V60)
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Enhances the bright blackberry acidity.
              </p>
              <ul className="font-label-caps text-label-caps text-primary space-y-2 w-full pt-4 border-t border-outline-variant/30">
                <li className="flex justify-between">
                  <span>Ratio:</span> <span>1:15</span>
                </li>
                <li className="flex justify-between">
                  <span>Temp:</span> <span>205&deg;F</span>
                </li>
                <li className="flex justify-between">
                  <span>Time:</span> <span>3:00 min</span>
                </li>
              </ul>
            </div>
            {/* French Press */}
            <div className="bg-background border border-outline-variant p-8 rounded-xl hover:shadow-sm hover:border-tertiary transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-tertiary group-hover:bg-tertiary group-hover:text-surface transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  coffee_maker
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                French Press
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Accentuates the heavy, syrupy body.
              </p>
              <ul className="font-label-caps text-label-caps text-primary space-y-2 w-full pt-4 border-t border-outline-variant/30">
                <li className="flex justify-between">
                  <span>Ratio:</span> <span>1:12</span>
                </li>
                <li className="flex justify-between">
                  <span>Temp:</span> <span>200&deg;F</span>
                </li>
                <li className="flex justify-between">
                  <span>Time:</span> <span>4:00 min</span>
                </li>
              </ul>
            </div>
            {/* Espresso */}
            <div className="bg-background border border-outline-variant p-8 rounded-xl hover:shadow-sm hover:border-tertiary transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-tertiary group-hover:bg-tertiary group-hover:text-surface transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  local_cafe
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">
                Espresso
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Concentrates the dark cocoa finish.
              </p>
              <ul className="font-label-caps text-label-caps text-primary space-y-2 w-full pt-4 border-t border-outline-variant/30">
                <li className="flex justify-between">
                  <span>Dose:</span> <span>18g</span>
                </li>
                <li className="flex justify-between">
                  <span>Yield:</span> <span>36g</span>
                </li>
                <li className="flex justify-between">
                  <span>Time:</span> <span>28 sec</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
