import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Homepage images from public folder
    const images = [
        {
            url: '/homepage/1.jpg',
            alt: 'Vivarium Design Project 1'
        },
        {
            url: '/homepage/2.jpg',
            alt: 'Vivarium Design Project 2'
        },
        {
            url: '/homepage/3.jpg',
            alt: 'Vivarium Design Project 3'
        },
        {
            url: '/homepage/NIGHT VIEW FINAL.png',
            alt: 'Vivarium Night View Design'
        },
        {
            url: '/homepage/villa cam 2.jpg',
            alt: 'Vivarium Villa Design'
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(slideInterval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full overflow-hidden bg-white h-auto md:h-screen pt-[40px] md:pt-0">
            {/* Images */}
            <div className="relative w-full h-auto md:h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-auto md:w-full md:h-full md:object-cover block"
                        />
                        <div className="absolute inset-0"></div>
                    </div>
                ))}
                
                {/* Invisible image to maintain container height - only on mobile */}
                <img
                    src={images[0].url}
                    alt="Height maintainer"
                    className="w-full h-auto opacity-0 block md:hidden"
                />
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group z-20 cursor-pointer"
            >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group z-20 cursor-pointer"
            >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        Vivarium Design Studio
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                        Creating innovative architectural solutions that transform spaces and inspire lives
                    </p>
                </div>
            </div>

            {/* Dots Indicator */}
           <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full border border-gray-300 transition-all duration-300 ${

                            index === currentSlide
                                ? 'bg-[#B3BD31] scale-125'
                                : 'bg-white/50 hover:bg-white/70'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;