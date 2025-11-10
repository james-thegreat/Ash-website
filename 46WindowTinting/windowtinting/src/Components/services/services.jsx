export default function Services() {
    return (
        <section id="services"
         className='hero-bg-house min-h-screen flex flex-col items-center justify-center bg-gray-50'>

              <h1 className="text-5xl font-bold text-white mb-80">Services</h1>

            {/* container for glass cards */}
            <div className="flex flex-wrap justify-center gap-8">
                <div className="glass p-10 w-80">
                <h3 className="text-xl font-semibold text-white mb-2">Car</h3>
                <p className="text-gray-300">Enhance your driving comfort and style with premium automotive tints that block UV rays, reduce glare, and keep your car cooler all year round.</p>
                </div>

                <div className="glass p-10 w-80">
                <h3 className="text-xl font-semibold text-white mb-2">Boat</h3>
                <p className="text-gray-300">Protect your vessel’s interior from harsh sunlight while reducing cabin heat and glare — perfect for clear views on the water and added privacy.</p>
                </div>

                <div className="glass p-10 w-80">
                <h3 className="text-xl font-semibold text-white mb-2">House</h3>
                <p className="text-gray-300">Improve energy efficiency and comfort at home with residential window tints that filter UV rays, increase privacy, and add a sleek modern finish.</p>
                </div>
            </div>
        
        
        </section>
    );
}