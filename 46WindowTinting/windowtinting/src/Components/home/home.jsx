import { useState } from 'react';

export default function Home() {
    return (
<section
  id="home"
  className="hero-bg-car min-h-screen flex flex-col items-center justify-center pt-20"
>
    <div className="text-left mb-80 -mt-10">
        <h1 className="text-5xl font-bold text-white mb-100">Professional <br /> Window Tinting</h1>
        <p className="text-gray-300">We provide top-quality window tinting services for your vehicle.</p>
    </div>

  {/* container for glass cards */}
  <div className="flex flex-wrap justify-center gap-8 mt-1">
    <div className="glass p-10 w-80">
      <h3 className="text-xl font-semibold text-white mb-2">Automotive Tinting</h3>
      <p className="text-gray-300">Stay cool and protected with premium films that block UV rays, reduce glare, and enhance your car’s style.</p>
    </div>

    <div className="glass p-10 w-80">
      <h3 className="text-xl font-semibold text-white mb-2">Benefits of Tinting</h3>
      <p className="text-gray-300">TImprove comfort, reduce heat, and protect interiors — all while adding a sleek, modern look.</p>
    </div>

    <div className="glass p-10 w-80">
      <h3 className="text-xl font-semibold text-white mb-2">Why Choose Us</h3>
      <p className="text-gray-300">Expert installers, quality materials, and lasting results you can trust</p>
    </div>
  </div>
</section>

    );
}
