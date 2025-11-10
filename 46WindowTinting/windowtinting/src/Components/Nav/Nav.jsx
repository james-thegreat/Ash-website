import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full glass-nav z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          <span className="text-blue-400">46</span> Window Tinting
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex md:flex-row md:items-center space-x-8">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full glass-nav border-t border-white/10 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#home" className="nav-link" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" className="nav-link" onClick={toggleMenu}>Services</a></li>
            <li><a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
