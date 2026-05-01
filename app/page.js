import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header
        className="relative h-screen w-full flex items-center justify-center hero-bg overflow-hidden"
        data-alt="close up of hot coffee latte art in a ceramic cup with steam rising gently, soft cinematic lighting, warm moody cafe atmosphere"
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="font-display-lg text-display-lg text-gradient mb-6 glow-text">
            Crafting Moments, One Sip at a Time
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-high mb-10 max-w-xl text-center">
            Experience the quiet luxury of ethically sourced beans, masterfully
            roasted to awaken the senses.
          </p>
          <a
            className="inline-flex items-center justify-center bg-primary text-on-primary px-10 py-4 rounded-full font-label-md uppercase tracking-wider hover:bg-secondary transition-all shadow-lg glow-border active:scale-95 duration-300 font-bold"
            href="#curations"
          >
            Explore Curations
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-surface-container-high">
          <span className="material-symbols-outlined text-3xl">
            keyboard_arrow_down
          </span>
        </div>
      </header>
      
      {/* The Velvet Bean Philosophy */}
      <section className="py-24 px-6 md:px-12 max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-primary-container/10 relative">
              <Image
                alt="Barista pouring latte art"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkKtdErgLNYAMqHtyRdkeJ9qGDWzuvdKkWm_nCMLC0GYpRh4gMom_UIoSrS22sbCgNQx9f0C0t3k47xdD97R24pRgA02TpSVN2hb3CMCK2DK5z7a3vqNEJpmiRil1avbpA5o5MDwgamv8Afb5uG7q3H091TIDfkM3E-rpVFKH7whw4vHCNfxORG-EZ5auxyn0ALDpxOVy9TiQBM5i7pr9Mrcc7uxV0ZrPfzQ8jrJQuZe3rX9_aZQJRbWPcszrAxj5OIsxDdWU2hWtX"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-surface-container-high rounded-full -z-10 blur-2xl opacity-60"></div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4 block">
              Our Philosophy
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              The Velvet Bean Approach
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              We believe that coffee is more than a beverage; it is a ritual. A
              momentary pause in a bustling world. Our master roasters coax the
              delicate, velvet-like textures from every bean, ensuring each cup
              is a testament to patience and craft.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10 leading-relaxed">
              Sourced from single-origin microlots and roasted in small batches,
              our selection rotates with the seasons to bring you the purest
              expression of terroir.
            </p>
            <div>
              <Link
                className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-full font-label-md uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-lg hover:glow-border font-bold"
                href="/story"
              >
                Discover Our Story
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Curations */}
      <section className="py-24 bg-surface-container-low px-6 md:px-12" id="curations">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4 block">
              Seasonal Offerings
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Featured Curations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-card rounded-xl overflow-hidden group cursor-pointer transition-transform duration-500 hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <Image
                  alt="Ethiopian Yirgacheffe Pour Over"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZzMolGEpbZup0W_OJO4AgLTiQU-1vv0EcVxOSdY9k2SvBOEJgDHoAFrpPnADxCYlHAMjmKxMdyqaoE5yhVl_5Rh9yh8wdHCJubH0cW4pX9fxNYtRyjj9uC0CxF5VSIvTsSNOUU-HuE5Gwv2gUxAdwAV1Mq0sZKH4gPVSACcelMhdz9vjWYKa12Q3Bw6kK4aoXArRxwffz8364GVa_Sk6nAdyg3rbomn02GRZOTJSQ-Lu4V7tEJ-E73QkZgedIik2Uz5keF0IJj46d"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Ethiopian Yirgacheffe
                  </h3>
                  <span className="font-label-md text-label-md text-secondary">
                    $8.00
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                  Delicate floral notes of jasmine intertwined with bright
                  bergamot and a clean, honeyed finish.
                </p>
                <Link href="/menu" className="block text-center w-full py-3 border border-primary text-primary rounded-full font-label-md uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-lg hover:glow-border font-bold">
                  Order Reserve
                </Link>
              </div>
            </div>
            {/* Card 2 */}
            <div className="glass-card rounded-xl overflow-hidden group cursor-pointer transition-transform duration-500 hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 bg-tertiary-container/80 backdrop-blur-sm text-on-tertiary px-3 py-1 rounded-full font-label-sm uppercase tracking-wider">
                  New
                </div>
                <Image
                  alt="Smoked Vanilla Latte"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ8eb8T4tpBmMKMq3eejBfz4_7Q_HohbQf5bWdokNU_n2s6taqIGqEq4EvLE94DjdOrnA1WnILIpHMEvDbXhA4lEZYbfFSQyOv9_-wyG-0RyH5TOEOP7lTB_ekUv58wITgembfWrMcSJ2Uc6Jyk1VXV913bCWZxSliL1DxUdWGhH2or1iqTQMq_6v940pw0ZjVnVp7CI_t1gvf7JCr6jaHt7KmRL3jMhHdS-QPeq3PqvGNJx0Ge9eo7CFDtYsiDuqj0O8-BTvH2VPM"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Smoked Vanilla Latte
                  </h3>
                  <span className="font-label-md text-label-md text-secondary">
                    $6.50
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                  Our signature espresso blended with house-smoked Madagascar
                  vanilla and perfectly microfoamed milk.
                </p>
                <Link href="/menu" className="block text-center w-full py-3 border border-primary text-primary rounded-full font-label-md uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-lg hover:glow-border font-bold">
                  Order Reserve
                </Link>
              </div>
            </div>
            {/* Card 3 */}
            <div className="glass-card rounded-xl overflow-hidden group cursor-pointer transition-transform duration-500 hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <Image
                  alt="Kyoto Cold Brew"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFgcj4bqi3X77OXIGSEcTWlbVZwAphdGVkVrqEnJIPgy9jqVSwWtVdyRm-8h2tzqqxsMwTHLLnl7Q6puBGxV-ikEgvx5etA9p7e1O2m9ab7XidHsLYpUbNE2ODqPxUDjOjo133nKO24CMSZ9EjCyYsttMAo883lLjPc7KgTKq5QgGaNqeXVRVWRPYYMJj9KyxUoF8WC7tV8OhJTKtIe9lkdgD7L5vfA42sTXNly6YZCkXJ78rbo-HGCaXyINzTZuh6SRw2LTk0SitS"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Kyoto Cold Brew
                  </h3>
                  <span className="font-label-md text-label-md text-secondary">
                    $7.00
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                  Slow-dripped over 14 hours. A syrupy, deeply complex brew
                  highlighting dark chocolate and dark cherry notes.
                </p>
                <Link href="/menu" className="block text-center w-full py-3 border border-primary text-primary rounded-full font-label-md uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-lg hover:glow-border font-bold">
                  Order Reserve
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Moments of Calm */}
      <section className="py-24 px-6 md:px-12 max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4 block">
              Atmosphere
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Moments of Calm
            </h2>
          </div>
          <a
            className="font-label-md text-label-md text-primary flex items-center gap-2 hover:text-secondary transition-colors"
            href="#"
          >
            Follow @ateliercoffee
            <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="col-span-2 row-span-2 rounded-xl overflow-hidden group relative">
            <Image
              alt="Cafe Interior"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCckzHTQYyJmq_sRK62L6pSscmmj8lMbJATVG1SdsBRQXww0Tj3BSpk9gmgZdgeUVCUYmDua6w7_5uc8rNSCtM6tSLyBZ-07fRHejO983s-_bpUHam1slkF_5S4GPOEkWoqmENdAtDC5Sktc63Bz_XN67rVrA7NHEDg3xAJoEZbVu9tur7hGIueHmFS1yvlXQPaBxjRMauTJrV-S1dkY0oYmfwwi1e7yBP7R5JlwEpWg-RfRQ_JJOTI-AnjkrHpsL7EvpuETBtkCEDZ"
            />
          </div>
          <div className="rounded-xl overflow-hidden group relative">
            <Image
              alt="Coffee Beans"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPhWbsXsc_4KCM_plDUVEXDjrVNThZcu9hG65sZE5zWmHVb_IatKee7FoYICJRTXQs2btNTp4soIlRXc444pvplJyHEUXhC7z8xtXT69FCBDaGAGBAyh_NTIFFTc19mSAz56eo_JbyEn9rl8VTPNGDmEvTirl5QB5Kp4F1zuE4V1moXxGwi5xNDBg5ExH5T17cGDS-eT2u3TiWKxR1OYzyYOsdbeSEdBhiRO4-M_qD5194c12WkoKfuz_-YxZPiTI3CAqicGOx3a7p"
            />
          </div>
          <div className="rounded-xl overflow-hidden group relative">
            <Image
              alt="Pastries"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvt3wFLP_bMuxygQqOVYoVx0LwZd1buCfmW8zLy3An_c8NXIttbTxespu5Dr7t_ASZhxRHNHZMiva6Sgy3ddVxkJU7LTHxIFtNfu0umuot-sydQK04jiOa0xQmewwwXQfThPavmsYdNItairwzEGuSV53n6S7LNWm16gkupwVX0cLuI8vVmmaGSzCb4ksf5fuqy9LRYO-24AoIkLABYv1rXL-qVg9LN8hoTt7-ptT66zDb8tQMuC20eMzeIC23jXPEBp74UX_br29n"
            />
          </div>
          <div className="col-span-2 rounded-xl overflow-hidden group relative">
            <Image
              alt="Reading with coffee"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDONFErqhNu2U2N3cSirOrkwxo5NHzOH8Vb3j_Z6JDBHbazE-jJxtt-HaAKWiXnfUO6xH-61RB_rLhqeJ6XOXr0midiKffFa2zLBLdmutm6g5XnslFnilUDqTnI2SmW7OWKw8sAHrg4R1ln0fIVnofpUoZYt8ieGjN3RbGVrU4ZGxPuRZaket_mOkXr47lIgl_kIe47XNTUWk1zeV8Z6dbB1LoIYOav0oBrKVbEiO6ZX8W6hV6gwKalUcX8KGp8FgxEU0qLUfVPdQAe"
            />
          </div>
        </div>
      </section>
    </>
  );
}
