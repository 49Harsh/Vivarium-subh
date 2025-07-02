import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Check if a nav link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        (scrolled || !isHomePage) ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
            (scrolled || !isHomePage) ? 'text-blue-900' : 'text-white'
          }`}>
            <span className="font-playfair">Vivarium</span>
            <span className={`ml-2 font-light ${(scrolled || !isHomePage) ? 'text-gradient' : 'text-white'}`}>Design Studio</span>
          </div>
        </Link>
        
        {/* Hamburger for mobile */}
        <button
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50 ${
            menuOpen ? 'fixed right-4' : ''
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 mb-1 transition-all duration-300 ${
            menuOpen ? 'rotate-45 translate-y-1.5 bg-white' : (scrolled || !isHomePage) ? 'bg-blue-900' : 'bg-white'
          }`}></span>
          <span className={`block h-0.5 w-6 mb-1 transition-opacity duration-300 ${
            menuOpen ? 'opacity-0' : (scrolled || !isHomePage) ? 'bg-blue-900' : 'bg-white'
          }`}></span>
          <span className={`block h-0.5 w-6 transition-all duration-300 ${
            menuOpen ? '-rotate-45 -translate-y-1.5 bg-white' : (scrolled || !isHomePage) ? 'bg-blue-900' : 'bg-white'
          }`}></span>
        </button>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-8 font-medium ${
          (scrolled || !isHomePage) ? 'text-gray-700' : 'text-white'
        }`}>
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/services', label: 'Services' },
            { path: '/projects', label: 'Projects' },
            { path: '/team', label: 'Team' },
            { path: '/contact', label: 'Contact' },
          ].map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`relative hover:text-blue-500 transition py-2 ${isActive(item.path) ? 'font-semibold' : ''}`}
            >
              {item.label}
              {isActive(item.path) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform animate-fade-in"></span>
              )}
            </Link>
          ))}
          <Link to="/contact" className={`px-6 py-2 rounded-full transition-all ${
            (scrolled || !isHomePage)
              ? 'bg-blue-900 text-white hover:bg-blue-800' 
              : 'border-2 border-white hover:bg-white hover:text-blue-900'
          }`}>
            Get Quote
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-blue-900 flex flex-col justify-center items-center z-40 animate-fade-in">
          <div className="flex flex-col items-center space-y-8 text-white text-xl font-medium stagger-container">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/services', label: 'Services' },
              { path: '/projects', label: 'Projects' },
              { path: '/team', label: 'Team' },
              { path: '/contact', label: 'Contact' },
            ].map((item, index) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`stagger-item ${isActive(item.path) ? 'font-semibold border-b-2 border-white pb-1' : ''}`}
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="stagger-item mt-8 px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-blue-900 transition-colors"
              onClick={() => setMenuOpen(false)}
              style={{ animationDelay: '700ms' }}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
