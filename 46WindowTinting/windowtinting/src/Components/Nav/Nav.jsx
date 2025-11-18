import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 w-full glass-nav z-50 transition-all duration-300"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo / Brand */}
          <h1 className="text-2xl font-bold tracking-wide text-white">
            <a
              href="#home"
              className="focus:outline-none"
              aria-label="46 Window Tinting homepage"
              title="46 Window Tinting Homepage"
            >
              <span className="text-blue-400">46</span> Window Tinting
            </a>
          </h1>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex md:flex-row md:items-center space-x-8">
            <li>
              <a
                href="#home"
                className="nav-link"
                title="Go to Home section"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="nav-link"
                title="Learn more About Us"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="nav-link"
                title="View our Services"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="nav-link"
                title="Contact us today"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-haspopup="true"
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full left-0 w-full glass-nav border-t border-white/10 backdrop-blur-lg md:hidden"
            role="menu"
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li role="none">
                <a
                  href="#home"
                  className="nav-link"
                  role="menuitem"
                  title="Go to Home section"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>

              <li role="none">
                <a
                  href="#about"
                  className="nav-link"
                  role="menuitem"
                  title="Learn more About Us"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>

              <li role="none">
                <a
                  href="#services"
                  className="nav-link"
                  role="menuitem"
                  title="View our Services"
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>

              <li role="none">
                <a
                  href="#contact"
                  className="nav-link"
                  role="menuitem"
                  title="Contact us today"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
