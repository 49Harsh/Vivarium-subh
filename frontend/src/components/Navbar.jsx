import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-900 tracking-tight">
        Vivarium Design Studio
      </div>
      <div className="space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-700 transition">Home</Link>
        <Link to="/about" className="hover:text-blue-700 transition">About</Link>
        <Link to="/services" className="hover:text-blue-700 transition">Services</Link>
        <Link to="/projects" className="hover:text-blue-700 transition">Projects</Link>
        <Link to="/team" className="hover:text-blue-700 transition">Team</Link>
        <Link to="/contact" className="hover:text-blue-700 transition">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
