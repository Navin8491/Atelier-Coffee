import Image from "next/image";

export default function Story() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full h-[819px] flex items-center justify-center pt-24 overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <Image
            alt=""
            className="object-cover opacity-60"
            data-alt="close up of roasted coffee beans in burlap sack with warm cinematic lighting and shallow depth of field"
            fill
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhNtKXqyWfL_XXe9WpMq-MUnLPANYYjIEVASDffBlJNbELJKxJ2wY6jJkLM3W4WM9mbICaq8_oq--lFGa_BlEuWTiOQBEsTyj_VACYUKYM9qtYJ_emW4B4LEMGNP1lx4i49H6Qw3gOhFdidQnVofClQ5jPtC6H9UsUFoRWE3OUCrhIEdpV-g3qej5AxYkJV1U57MKAeBmM97D8VsomA6RMBs52L8R8SjG7hS8mUdNFbUdE2cFX84ReFfnlLf6CkTCz70RuPMvAmd-s"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background"></div>
        </div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="font-display-lg text-display-lg text-primary mb-6 drop-shadow-sm">
            The Ritual of Coffee
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A journey from the quiet altitudes of origin to the warmth of the
            final pour. This is our pursuit of the perfect cup, unhurried and
            intentional.
          </p>
        </div>
      </header>

      {/* Timeline Content */}
      <main className="max-w-container-max mx-auto px-6 py-24 md:py-32 flex flex-col gap-32">
        {/* Stage 1: Origin */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 md:col-start-2 order-2 md:order-1 flex flex-col justify-center">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">
              Chapter I — The Seed
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              High Altitudes, Deep Roots
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Our story begins far from the bustling city, in the serene,
              high-altitude farms where the air is thin and the soil rich. We
              partner directly with generational farmers who understand that
              greatness takes time. Every bean is shade-grown, hand-picked, and
              treated with the reverence it deserves.
            </p>
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-[3/4] shadow-[0_20px_40px_rgba(62,39,35,0.08)] bg-surface-container border border-surface-variant/50 p-2">
              <div className="w-full h-full rounded-lg overflow-hidden relative">
                <Image
                  alt=""
                  className="object-cover"
                  data-alt="lush green coffee plant leaves with bright red coffee cherries ready for harvest under soft morning sunlight"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVj6fFGqVKb4hxwCAuJNe-at4PDuJcDkQ8MlPpNbjeyV_wiX03TLOocXXsl0E9GV7i9W6t1WgvpGwTln6YfF3xWnXOcWnQObU3SwzpU3fOrcQk50LlfIofx8jdFq8Th_j8DxQVoRu1OzYz1Cem5hYDTS84U-TurLFocCZo6UJN03W_O675zGKInHYl-9cekcvQnAh7TO1gnILEXrA9a4V4SkEU0CwITBQklwCcE0_MFRZNA_zGvMtD4YyjulIXTs42_6NE-QE5AANt"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stage 2: Roasting */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 md:col-start-1">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-[4/3] shadow-[0_20px_40px_rgba(62,39,35,0.08)] bg-surface-container border border-surface-variant/50 p-2">
              <div className="w-full h-full rounded-lg overflow-hidden relative">
                <Image
                  alt=""
                  className="object-cover"
                  data-alt="vintage drum coffee roaster turning dark brown beans with warm glowing heat and soft smoke in a rustic industrial space"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn4K3JC7_61G7aLyTQFNBJt-CgQu1nn8S52boh0a7dlE-qkQT-73G0KsVUuAnFi9aDh9KTdqMch8fw0fVXVVnQc9DnqYEbxCSNy7ozE14PeapBBzALXTPiDRTgnC-ZKTrIRZid638jiVrHRjPlEoOzzwvAJAu5P5grdKuOLu2PoIqBj32lGCrJw_aSuryR1jxmGrlBKePofz9zpbA0EO5RChzdIJgEvrQWQ-T9H6_ZckT4l_kFAIaz5VhY1_Mo6EHBp6IAsOKc_73C"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">
              Chapter II — The Alchemy
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              The Art of the Roast
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Roasting is not merely heating beans; it is a delicate alchemy. In
              our atelier, we approach roasting as a craft of precision and
              intuition. We roast in small batches, coaxing out the unique
              terroir of each origin—seeking the elusive balance between vibrant
              acidity and deep, comforting sweetness.
            </p>
          </div>
        </section>

        {/* Stage 3: The Pour */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 md:col-start-2 order-2 md:order-1 flex flex-col justify-center">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">
              Chapter III — The Sip
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              A Moment of Stillness
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              The final act is the pour. Whether it&apos;s a meticulously crafted
              espresso or a slow, contemplative pour-over, we believe coffee
              should be an experience that anchors you in the present. It is the
              culmination of thousands of miles, hundreds of hands, and an
              unwavering dedication to quality.
            </p>
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-[3/4] shadow-[0_20px_40px_rgba(62,39,35,0.08)] bg-surface-container border border-surface-variant/50 p-2">
              <div className="w-full h-full rounded-lg overflow-hidden relative">
                <Image
                  alt=""
                  className="object-cover"
                  data-alt="slow pour over coffee brewing process with gooseneck kettle and ceramic dripper capturing morning light filtering through steam"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVdCf2iJJ1cb3Kd2BZigfzGcyNcSu4VxftY3KvQZw5-moUXI9OoRmeoeKINHWer10KwZrmNBCe3yDd4ZMN4LubBUxmm2H5p-t1E-7d0wdbpEPL7C_XMs69giuU89ssfnYBDuZcGT1Kx3_ClckG00tgtpLgpqJvVDIXMEoSTVa91fi_TpEIhAwg1K5P2eigjDQatx6fTeozuTyzbHs4mRwlmchekxitX0BPeBsQrfRpWdh50xINOIHZCJGHh2LY3FiJm8d6PD1qXzrO"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
