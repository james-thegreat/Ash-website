import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-white/90 backdrop-blur-md z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-600">46 Window Tinting</h1>

                {/* Desktop Links */}
                <ul className="hidden md:flex md:flex-row md:items-center space-x-6">
                    <li><a href="#home" className="hover:text-blue-500">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-500">About</a></li>
                    <li><a href="#services" className="hover:text-blue-500">Services</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-gray-700">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden">
                    <ul className="flex flex-col items-center space-y-3 py-3">
                        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-500">About</a></li>
                        <li><a href="#services" className="hover:text-blue-500">Services</a></li>
                        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}