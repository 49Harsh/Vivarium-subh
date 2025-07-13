import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if a nav link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center h-[70px]">
        {/* Logo section - brand color background */}
        <div className="bg-[#B3BD31] h-full py-2 px-6 flex items-center">
          <Link to="/" className="flex items-center justify-center">
            <img src="/logo.png" alt="Vivarium Design Studio" className="h-10 mr-3" />
            <div className="flex flex-col">
              <div className="text-xl font-bold tracking-tight text-white">
                Vivarium
              </div>
              <div className="text-sm font-medium text-white">
                Design Studio
              </div>
            </div>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-800 px-6">
          <Link 
            to="/" 
            className={`relative py-2 ${isActive('/') ? 'border-b-2 border-[#B3BD31]' : 'hover:text-[#B3BD31]'}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`relative py-2 ${isActive('/about') ? 'border-b-2 border-[#B3BD31]' : 'hover:text-[#B3BD31]'}`}
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            className={`relative py-2 ${isActive('/services') ? 'border-b-2 border-[#B3BD31]' : 'hover:text-[#B3BD31]'}`}
          >
            Services
          </Link>
          <Link 
            to="/projects" 
            className={`relative py-2 ${isActive('/projects') ? 'border-b-2 border-[#B3BD31]' : 'hover:text-[#B3BD31]'}`}
          >
            Portfolio
          </Link>
          <Link 
            to="/team" 
            className={`relative py-2 ${isActive('/team') ? 'border-b-2 border-[#B3BD31]' : 'hover:text-[#B3BD31]'}`}
          >
            Team
          </Link>
          <Link 
            to="/career" 
            className={`relative py-2 ${isActive('/career') ? 'border-b-2 border-[#B3BD31]' : 'hover:text-[#B3BD31]'}`}
          >
            Career
          </Link>
          <Link 
            to="/contact" 
            className="px-6 py-2 bg-[#B3BD31] text-white rounded hover:bg-[#9da728] transition-colors"
          >
            Contact
          </Link>
        </div>
        
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50 mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 mb-1 transition-all duration-300 ${
            menuOpen ? 'rotate-45 translate-y-1.5 bg-white' : 'bg-[#B3BD31]'
          }`}></span>
          <span className={`block h-0.5 w-6 mb-1 transition-opacity duration-300 ${
            menuOpen ? 'opacity-0' : 'bg-[#B3BD31]'
          }`}></span>
          <span className={`block h-0.5 w-6 transition-all duration-300 ${
            menuOpen ? '-rotate-45 -translate-y-1.5 bg-white' : 'bg-[#B3BD31]'
          }`}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#B3BD31] flex flex-col justify-center items-center z-40 animate-fade-in">
          <div className="flex flex-col items-center space-y-8 text-white text-xl font-medium">
            <Link to="/" className={`${isActive('/') ? 'font-semibold border-b-2 border-white pb-1' : ''}`} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className={`${isActive('/about') ? 'font-semibold border-b-2 border-white pb-1' : ''}`} onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/services" className={`${isActive('/services') ? 'font-semibold border-b-2 border-white pb-1' : ''}`} onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link to="/projects" className={`${isActive('/projects') ? 'font-semibold border-b-2 border-white pb-1' : ''}`} onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>
            <Link to="/team" className={`${isActive('/team') ? 'font-semibold border-b-2 border-white pb-1' : ''}`} onClick={() => setMenuOpen(false)}>
              Team
            </Link>
            <Link to="/career" className={`${isActive('/career') ? 'font-semibold border-b-2 border-white pb-1' : ''}`} onClick={() => setMenuOpen(false)}>
              Career
            </Link>
            <Link to="/contact" className="mt-8 px-8 py-3 border-2 border-white rounded hover:bg-white hover:text-[#B3BD31] transition-colors" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
