import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const HeroSlideshow  = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Placeholder images - you can replace these with your actual images
  const images = [
    '/hero-image/Picture1.jpg',
    '/hero-image/Picture3.jpg',
    '/hero-image/Picture4.jpg',
    '/hero-image/Picture5.jpg',
    '/hero-image/Picture6.jpg',
    '/hero-image/Picture7.jpg',
    '/hero-image/Picture8.jpg'
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-black bg-opacity-30 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              Vivarium <span style={{color: '#B3BD31'}}>Design Studio</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-yellow-400 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors">About</a>
              <a href="#services" className="text-white hover:text-yellow-400 transition-colors">Services</a>
              <a href="#portfolio" className="text-white hover:text-yellow-400 transition-colors">Portfolio</a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Architecture ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute bottom-20 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 z-10"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Vivarium
            <span style={{color: '#B3BD31'}} className="block mt-2">Design Studio</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Creating pioneering, interdisciplinary design solutions since 2021
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              style={{backgroundColor: '#B3BD31'}}
              className="px-8 py-3 text-black font-semibold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Work
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HeroSlideshow ;