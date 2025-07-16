import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // Check if a nav link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'
      }`}>
      <div className="flex justify-between items-center h-[50px] sm:h-[60px] lg:h-[70px] px-2 sm:px-4">
        {/* Logo section - brand color background */}
        <div className={`bg-[#B3BD31] h-full py-1 sm:py-2 px-2 sm:px-4 lg:px-6 flex items-center justify-center transition-all duration-300 ${scrolled ? 'lg:pl-8' : 'lg:pl-6'
          } relative ml-2 sm:ml-6 md:ml-12 lg:ml-16 xl:ml-24`}>
          <div className="absolute top-0 left-0 w-full h-[140%] bg-[#B3BD31] z-[-1] rounded-br-lg rounded-bl-lg shadow-md"></div>
          <Link to="/" className="flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Vivarium Design Studio"
              className="h-4 sm:h-6 md:h-8 lg:h-10 mr-1 sm:mr-2 md:mr-3"
            />
            <div className="flex flex-col">
              <div className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold tracking-tight text-white leading-tight">
                Vivarium
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm font-medium text-white leading-tight">
                Design Studio
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Menu - Only show on large screens */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 font-medium text-gray-800 px-4 xl:px-6">
          <Link
            to="/"
            className={`relative py-2 transition-colors duration-200 ${isActive('/') ? 'text-[#B3BD31] border-b-2 border-[#B3BD31]' : 'hover:text-[#B3BD31]'
              }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`relative py-2 transition-colors duration-200 ${isActive('/about') ? 'text-[#B3BD31] border-b-2 border-[#B3BD31]' : 'hover:text-[#B3BD31]'
              }`}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className={`relative py-2 transition-colors duration-200 ${isActive('/services') ? 'text-[#B3BD31] border-b-2 border-[#B3BD31]' : 'hover:text-[#B3BD31]'
              }`}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className={`relative py-2 transition-colors duration-200 ${isActive('/projects') ? 'text-[#B3BD31] border-b-2 border-[#B3BD31]' : 'hover:text-[#B3BD31]'
              }`}
          >
            Portfolio
          </Link>
          <Link
            to="/team"
            className={`relative py-2 transition-colors duration-200 ${isActive('/team') ? 'text-[#B3BD31] border-b-2 border-[#B3BD31]' : 'hover:text-[#B3BD31]'
              }`}
          >
            Team
          </Link>
          <Link
            to="/career"
            className={`relative py-2 transition-colors duration-200 ${isActive('/career') ? 'text-[#B3BD31] border-b-2 border-[#B3BD31]' : 'hover:text-[#B3BD31]'
              }`}
          >
            Career
          </Link>
          <Link
            to="/contact"
            className="px-4 xl:px-6 py-2 bg-[#B3BD31] text-white rounded hover:bg-[#9da728] transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu Button - Show on small and medium screens */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none z-50 mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5 bg-white' : 'bg-[#B3BD31]'
            }`}></span>
          <span className={`block h-0.5 w-5 mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'bg-[#B3BD31]'
            }`}></span>
          <span className={`block h-0.5 w-5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5 bg-white' : 'bg-[#B3BD31]'
            }`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#B3BD31] flex flex-col justify-center items-center z-40 transition-all duration-300 lg:hidden ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col items-center space-y-6 text-white text-lg font-medium w-full px-8">
          <Link
            to="/"
            className={`w-full text-center py-3 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 rounded-lg ${isActive('/') ? 'font-semibold border-b-2 border-white pb-3' : ''
              }`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`w-full text-center py-3 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 rounded-lg ${isActive('/about') ? 'font-semibold border-b-2 border-white pb-3' : ''
              }`}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className={`w-full text-center py-3 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 rounded-lg ${isActive('/services') ? 'font-semibold border-b-2 border-white pb-3' : ''
              }`}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className={`w-full text-center py-3 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 rounded-lg ${isActive('/projects') ? 'font-semibold border-b-2 border-white pb-3' : ''
              }`}
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/team"
            className={`w-full text-center py-3 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 rounded-lg ${isActive('/team') ? 'font-semibold border-b-2 border-white pb-3' : ''
              }`}
            onClick={() => setMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/career"
            className={`w-full text-center py-3 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 rounded-lg ${isActive('/career') ? 'font-semibold border-b-2 border-white pb-3' : ''
              }`}
            onClick={() => setMenuOpen(false)}
          >
            Career
          </Link>
          <Link
            to="/contact"
            className="mt-4 px-8 py-3 text-base border-2 border-white rounded-lg hover:bg-white hover:text-[#B3BD31] transition-colors duration-300 transform hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex space-x-6">
          <a href="#" className="text-white hover:text-white/80 transition-colors p-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-white/80 transition-colors p-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-white/80 transition-colors p-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;