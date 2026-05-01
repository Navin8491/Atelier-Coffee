import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex-grow flex flex-col items-center w-full max-w-[1200px] mx-auto px-gutter py-20">
      {/* Header Section */}
      <div className="w-full text-center mb-16 md:mb-24 mt-8">
        <h1 className="font-headline-xl text-headline-xl text-primary mb-6">
          Get in Touch
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Whether you have a question about our roasts, wish to inquire about
          private events, or simply want to say hello, we welcome your
          correspondence.
        </p>
      </div>

      {/* Split Layout Area */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Form Side */}
        <div className="w-full bg-surface-container-low p-8 lg:p-12 rounded-lg border border-surface-variant">
          <form className="flex flex-col space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label
                  className="font-label-caps text-label-caps text-on-surface-variant mb-2"
                  htmlFor="first-name"
                >
                  FIRST NAME
                </label>
                <input
                  className="w-full border-0 border-b border-outline-variant bg-transparent px-0 py-2 text-on-surface focus:ring-0 focus:border-tertiary-container transition-colors font-body-md"
                  id="first-name"
                  placeholder="Enter your first name"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="font-label-caps text-label-caps text-on-surface-variant mb-2"
                  htmlFor="last-name"
                >
                  LAST NAME
                </label>
                <input
                  className="w-full border-0 border-b border-outline-variant bg-transparent px-0 py-2 text-on-surface focus:ring-0 focus:border-tertiary-container transition-colors font-body-md"
                  id="last-name"
                  placeholder="Enter your last name"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                className="font-label-caps text-label-caps text-on-surface-variant mb-2"
                htmlFor="email"
              >
                EMAIL ADDRESS
              </label>
              <input
                className="w-full border-0 border-b border-outline-variant bg-transparent px-0 py-2 text-on-surface focus:ring-0 focus:border-tertiary-container transition-colors font-body-md"
                id="email"
                placeholder="Enter your email address"
                type="email"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="font-label-caps text-label-caps text-on-surface-variant mb-2"
                htmlFor="inquiry"
              >
                INQUIRY TYPE
              </label>
              <select
                className="w-full border-0 border-b border-outline-variant bg-transparent px-0 py-2 text-on-surface focus:ring-0 focus:border-tertiary-container transition-colors font-body-md appearance-none"
                id="inquiry"
                defaultValue="general"
              >
                <option value="general">General Inquiry</option>
                <option value="reservations">Reservations</option>
                <option value="events">Private Events</option>
                <option value="wholesale">Wholesale</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                className="font-label-caps text-label-caps text-on-surface-variant mb-2"
                htmlFor="message"
              >
                YOUR MESSAGE
              </label>
              <textarea
                className="w-full border-0 border-b border-outline-variant bg-transparent px-0 py-2 text-on-surface focus:ring-0 focus:border-tertiary-container transition-colors font-body-md resize-none"
                id="message"
                placeholder="How can we assist you?"
                rows={4}
              ></textarea>
            </div>
            <button
              className="mt-4 bg-primary text-on-primary py-4 px-8 rounded-DEFAULT font-label-caps text-label-caps hover:bg-on-primary-fixed-variant transition-colors self-start"
              type="button"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Info & Map Side */}
        <div className="w-full flex flex-col justify-between">
          <div className="space-y-12 mb-12">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                Visit Us
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Velvet Bean Café<br />
                124 Artisan Way<br />
                Coffee District, CD 90210
              </p>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                Hours of Service
              </h3>
              <div className="font-body-md text-body-md text-on-surface-variant space-y-2">
                <div className="flex justify-between max-w-xs">
                  <span>Mon - Fri</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Saturday</span>
                  <span>8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Sunday</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                Direct Contact
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                +1 (555) 123-4567<br />
                concierge@velvetbean.com
              </p>
            </div>
          </div>

          {/* Custom Map Container */}
          <div className="w-full h-64 md:h-80 bg-surface-variant rounded-lg overflow-hidden border border-outline-variant relative group">
            <Image
              alt="stylized minimalist street map in warm sepia and cream tones showing a downtown district"
              className="object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-500 sepia-[.3]"
              data-alt="stylized minimalist street map in warm sepia and cream tones showing a downtown district"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcKzQ8SvnyGUhsgdutu6eMlXYRApbnSSUf1FQ7Q_XmXycIQezj8TGOPT7IKPK7N8yXjEfgnRJ3_VpRnHo1oyb2yPuJyuD67r7QHyN1KXA_7bGksqqBiwwBJCPrEODbjRDSOrsBhmQFqvraZ1nZ6FCufcIEWdfNrTnDJIZEh_dT95Ofj4xgFio9nLQvQugvlpAb6REW7mnY3w1827vaPVMecAfe-UFMZkNvxOQA0_A7BvCaE6oOyCg48-PfA90gl3jSDUr0vatJMPCb"
            />
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            {/* Faux Map Pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span
                className="material-symbols-outlined text-tertiary-container text-4xl"
                data-icon="location_on"
              >
                location_on
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
