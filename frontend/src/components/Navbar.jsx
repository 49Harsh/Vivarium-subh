import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900 tracking-tight">
          Vivarium Design Studio
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-blue-900 mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-blue-900 mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-blue-900 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-700 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-700 transition">About</Link>
          <Link to="/services" className="hover:text-blue-700 transition">Services</Link>
          <Link to="/projects" className="hover:text-blue-700 transition">Projects</Link>
          <Link to="/team" className="hover:text-blue-700 transition">Team</Link>
          <Link to="/contact" className="hover:text-blue-700 transition">Contact</Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 flex flex-col space-y-3 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/projects" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/team" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>Team</Link>
          <Link to="/contact" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
