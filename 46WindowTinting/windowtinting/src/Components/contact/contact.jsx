export default function Contact() {
    return (
        <section id="contact" 
        className='hero-bg-man min-h-screen flex flex-col items-center justify-center bg-gray-50'>

            <h1 className="text-5xl font-bold text-white mb-10">Contact</h1>

            {/* container for glass cards */}
            <div className="flex flex-wrap justify-center gap-8">
                <div className="glass p-10 w-80">
                <h3 className="text-xl font-semibold text-white mb-2">Ashley</h3>
                <p className="text-gray-300">Phone: 022 037 0369</p>
                <p className="text-gray-300">Email: as46tint@gmail.com</p>
                </div>

            </div>

        </section>
    );
}