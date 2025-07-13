import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-[#B3BD31] text-white">
    {/* Main Footer */}
    <div className="max-w-7xl mx-auto px-4 pt-16 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Column 1 - About */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <h3 className="text-xl font-playfair font-bold mb-6">Vivarium Design Studio</h3>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            Founded in 2021, Vivarium Design Studio specializes in architectural design, 
            building permits, and interior design with a client-centric approach to deliver 
            innovative solutions.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Column 2 - Quick Links */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
            <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Column 3 - Services */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-6">Our Services</h3>
          <ul className="space-y-3">
            <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Building Permits</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Architectural Design</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Interior Design</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Project Management</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">NOC Approvals</Link></li>
          </ul>
        </div>
        
        {/* Column 4 - Contact Info */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <h3 className="text-lg font-bold mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-300 text-sm">
                Office No. 5, Plot No. 3A, Sairama CHS, Station Rd., Sector-2, Kharghar, Navi Mumbai - 410210
              </p>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@vivarium.co.in" className="text-gray-300 hover:text-white transition-colors text-sm">info@vivarium.co.in</a>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+919930336099" className="text-gray-300 hover:text-white transition-colors text-sm">+91 9930336099</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Copyright Bar */}
    <div className="border-t border-blue-800 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Vivarium Design Studio. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0 text-sm text-gray-400">
          Designed and developed by <span className="text-blue-300">Vivarium Team</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
