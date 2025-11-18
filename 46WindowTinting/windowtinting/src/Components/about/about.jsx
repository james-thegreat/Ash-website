import { ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="hero-bg-boat min-h-screen flex flex-col items-center justify-center bg-gray-50"
    >
      {/* ===== Main Page Heading ===== */}
      <h1
        id="about-heading"
        className="text-5xl font-bold text-white mb-80"
      >
        About Us
      </h1>

      {/* ===== Hidden secondary heading for SEO structure ===== */}
      <h2 className="sr-only">46 Window Tinting — Who We Are</h2>

      {/* ===== Content Card ===== */}
      <div className="flex flex-wrap justify-center gap-8">
        <article
          className="glass-wide text-center p-10"
          aria-label="About 46 Window Tinting"
        >
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <ShieldCheck
              className="w-12 h-12 text-blue-400"
              aria-label="Quality and protection icon"
            />
          </div>

          {/* Section Title */}
          <h3 className="text-xl font-semibold text-white mb-4">
            Quality, Precision, and Protection
          </h3>

          {/* Paragraph (SEO-friendly) */}
          <p className="text-gray-300 leading-relaxed">
            46 Window Tinting is dedicated to delivering premium tinting solutions
            across Auckland for vehicles, homes, boats, and commercial buildings.
            Our experienced team uses high-performance films and precise installation
            techniques to ensure improved comfort, UV protection, privacy, and long-lasting durability for every client.
          </p>
        </article>
      </div>
    </section>
  );
}
