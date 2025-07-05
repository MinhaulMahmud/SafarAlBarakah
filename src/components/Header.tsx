import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Packages', to: '/packages' },
    { label: 'Ticketing', to: '/ticketing' },
    { label: 'Makkah', to: '/makkah' },
    { label: 'Madinah', to: '/madinah' },
    { label: 'Support', to: '/support' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden backdrop-blur-md bg-transparent border-b border-gray-200">
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo with Text */}
          <Link
            to="/"
            className="flex items-center space-x-2 flex-shrink-0 focus:outline-none"
            aria-label="Home"
          >
            <img
              src="/logo2.png"
              alt="Safar Al Barakah Logo"
              className="h-14 w-auto object-contain select-none scale-110"
            />
            <span className="text-nusuk-teal font-bold text-base tracking-wide">
              Safar Al Barakah
            </span>
            <span className="sr-only">Home</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold w-full max-w-[500px] justify-center">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-nusuk-teal hover:text-nusuk-gold transition-colors duration-200 whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <button className="flex items-center text-nusuk-teal hover:text-nusuk-gold transition-colors space-x-1 text-sm font-semibold">
              <Globe size={20} />
              <span>EN</span>
            </button>
          </div>

 {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-nusuk-teal"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/packages" className="block px-3 py-2 text-gray-700 hover:text-nusuk-teal" onClick={() => setIsMenuOpen(false)}>Packages</Link>
            <Link to="/ticketing" className="block px-3 py-2 text-gray-700 hover:text-nusuk-teal" onClick={() => setIsMenuOpen(false)}>Ticketing</Link>
            <Link to="/makkah" className="block px-3 py-2 text-gray-700 hover:text-nusuk-teal" onClick={() => setIsMenuOpen(false)}>Makkah</Link>
            <Link to="/madinah" className="block px-3 py-2 text-gray-700 hover:text-nusuk-teal" onClick={() => setIsMenuOpen(false)}>Madinah</Link>
            <Link to="/support" className="block px-3 py-2 text-gray-700 hover:text-nusuk-teal" onClick={() => setIsMenuOpen(false)}>Support</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-nusuk-teal" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="border-t pt-2">
              {/* <button className="w-full bg-nusuk-gold text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                Sign In
              </button> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;