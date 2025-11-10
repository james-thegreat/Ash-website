export default function About() {
    return (
        <section 
        id="about" 
        className=" hero-bg-boat min-h-screen flex flex-col items-center justify-center bg-gray-50">
              <h1 className="text-5xl font-bold text-white mb-80">About Us</h1>

            {/* container for glass cards */}
            <div className="flex flex-wrap justify-center gap-8">
                <div className="glass-wide">
                    <h3 className="text-xl font-semibold text-white mb-2">Quality, Precision, and Protection</h3>
                    <p className="text-gray-300">We’re passionate about providing premium tinting solutions for vehicles, homes, and boats.
                        Our team combines expert craftsmanship with high-performance films to ensure every job enhances comfort, style, and durability.</p>
                </div>
            </div>
            
        </section>
    );
}