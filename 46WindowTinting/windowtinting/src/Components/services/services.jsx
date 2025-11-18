import { Car, Anchor, Home as HomeIcon, Building2 } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="hero-bg-house min-h-screen flex flex-col items-center justify-center bg-gray-50"
    >
      {/* Main Section Heading */}
      <h1
        id="services-heading"
        className="text-5xl font-bold text-white mb-80"
      >
        Services
      </h1>

      {/* Hidden subheading for SEO structure */}
      <h2 className="sr-only">Window Tinting Services Offered in Auckland</h2>

      {/* ====== Glass Card Container ====== */}
      <div className="flex flex-wrap justify-center gap-8">

        {/* ====================== */}
        {/* ===== Car Service ===== */}
        {/* ====================== */}
        <article
          className="glass p-10 w-80 text-center"
          aria-label="Automotive Window Tinting Service"
        >
          <div className="flex justify-center mb-4">
            <Car
              className="w-10 h-10 text-blue-400"
              aria-label="Car tinting icon"
            />
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">Car</h3>

          <p className="text-gray-300">
            Enhance your driving comfort with premium automotive tints that block
            UV rays, reduce glare, improve privacy, and help keep your vehicle
            cooler — ideal for everyday driving in Auckland.
          </p>
        </article>

        {/* ====================== */}
        {/* ===== Boat Service ===== */}
        {/* ====================== */}
        <article
          className="glass p-10 w-80 text-center"
          aria-label="Marine Window Tinting Service"
        >
          <div className="flex justify-center mb-4">
            <Anchor
              className="w-10 h-10 text-blue-400"
              aria-label="Boat tinting icon"
            />
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">Boat</h3>

          <p className="text-gray-300">
            Protect your boat’s interior from harsh UV exposure while reducing
            heat and glare on the water. Marine-grade films offer durability,
            privacy, and clear visibility for safer adventures.
          </p>
        </article>

        {/* ====================== */}
        {/* ===== House Service ===== */}
        {/* ====================== */}
        <article
          className="glass p-10 w-80 text-center"
          aria-label="Residential Window Tinting Service"
        >
          <div className="flex justify-center mb-4">
            <HomeIcon
              className="w-10 h-10 text-blue-400"
              aria-label="Home tinting icon"
            />
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">House</h3>

          <p className="text-gray-300">
            Improve home comfort and energy efficiency with residential window
            tinting designed to reduce heat, block harmful UV rays, enhance
            privacy, and modernize your home’s appearance.
          </p>
        </article>

        {/* ====================== */}
        {/* ===== Commercial ===== */}
        {/* ====================== */}
        <article
          className="glass p-10 w-80 text-center"
          aria-label="Commercial Window Tinting Service"
        >
          <div className="flex justify-center mb-4">
            <Building2
              className="w-10 h-10 text-blue-400"
              aria-label="Commercial tinting icon"
            />
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">Commercial</h3>

          <p className="text-gray-300">
            Upgrade your workspace with commercial window films that reduce heat
            load, lower energy costs, improve privacy, and create a sleek,
            professional appearance — perfect for offices, shops, and business
            fronts across Auckland.
          </p>
        </article>

      </div>
    </section>
  );
}
