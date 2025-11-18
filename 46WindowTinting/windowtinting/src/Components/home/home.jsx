import { Car, ShieldCheck, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="hero-bg-car min-h-screen flex flex-col items-center justify-center pt-20"
    >
      {/* ====== Hero Heading ====== */}
      <header className="text-left mb-80 -mt-10">
        <h1
          id="home-heading"
          className="text-5xl font-bold text-white mb-4"
        >
          Professional <br /> Window Tinting
        </h1>

        {/* SEO-friendly tagline */}
        <p className="text-gray-300 max-w-xl">
          Premium automotive window tinting services in Auckland — enhancing
          comfort, privacy, UV protection, and long-term interior durability.
        </p>
      </header>

      {/* ====== Glass Cards Section ====== */}
      <div
        className="flex flex-wrap justify-center gap-8 mt-1"
        aria-labelledby="tinting-features"
      >
        {/* Hidden H2 for SEO + accessibility */}
        <h2 id="tinting-features" className="sr-only">
          Tinting Features and Benefits
        </h2>

        {/* ===== Card 1 ===== */}
        <article className="glass p-10 w-80 text-center">
          <div className="flex justify-center mb-4">
            <Car
              className="w-10 h-10 text-blue-400"
              aria-label="Automotive Tinting Icon"
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Automotive Tinting
          </h3>
          <p className="text-gray-300">
            Stay cool and protected with high-performance films that block UV
            rays, reduce glare, and enhance the look and comfort of your
            vehicle.
          </p>
        </article>

        {/* ===== Card 2 ===== */}
        <article className="glass p-10 w-80 text-center">
          <div className="flex justify-center mb-4">
            <ShieldCheck
              className="w-10 h-10 text-blue-400"
              aria-label="Tint Benefits Icon"
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Benefits of Tinting
          </h3>
          <p className="text-gray-300">
            Improve heat reduction, UV protection, and cabin comfort while adding
            a clean, modern appearance to your vehicle.
          </p>
        </article>

        {/* ===== Card 3 ===== */}
        <article className="glass p-10 w-80 text-center">
          <div className="flex justify-center mb-4">
            <Sparkles
              className="w-10 h-10 text-blue-400"
              aria-label="Why Choose Us Icon"
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Why Choose Us
          </h3>
          <p className="text-gray-300">
            Expert installers using premium film materials to deliver durable,
            long-lasting results you can rely on.
          </p>
        </article>
      </div>
    </section>
  );
}
