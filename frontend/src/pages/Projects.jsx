import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('architecture');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isArchHovered, setIsArchHovered] = useState(false);
  const [isResHovered, setIsResHovered] = useState(false);
  const [isComHovered, setIsComHovered] = useState(false);
  const [isUrbanHovered, setIsUrbanHovered] = useState(false);

  const categories = [
    { id: 'architecture', name: 'Architecture' },
    { id: 'interior', name: 'Interior' },
    { id: 'urban', name: 'Urban Projects' }
  ];

  const projects = {
    // Architecture Projects
    architecture: [
      {
        id: 1,
        title: 'Modern Residential Complex',
        image: '/hero-image/Picture1.jpg',
        description: 'Luxury residential complex with modern design elements.'
      },
      {
        id: 2,
        title: 'Contemporary Villa',
        image: '/hero-image/Picture3.jpg',
        description: 'Contemporary villa with minimalist architectural approach.'
      },
      {
        id: 3,
        title: 'Sustainable Housing',
        image: '/hero-image/Picture4.jpg',
        description: 'Eco-friendly housing project with sustainable features.'
      },
      {
        id: 4,
        title: 'Urban Residence',
        image: '/hero-image/Picture5.jpg',
        description: 'Modern urban residence with innovative design solutions.'
      },
      {
        id: 5,
        title: 'Luxury Apartment Complex',
        image: '/hero-image/Picture6.jpg',
        description: 'High-end apartment complex with premium amenities.'
      },
      {
        id: 6,
        title: 'Commercial Building',
        image: '/hero-image/Picture7.jpg',
        description: 'Commercial building with contemporary architectural style.'
      },
      {
        id: 7,
        title: 'Mixed-Use Development',
        image: '/hero-image/Picture8.jpg',
        description: 'Mixed-use development combining residential and commercial spaces.'
      }
    ],

    // Interior Projects
    interior: {
      residential: [
        {
          id: 8,
          title: 'Luxury Home Interior',
          type: 'residential',
          image: '/Interior_Project/Picture9.jpg',
          description: 'Modern, functional, and aesthetic interiors for luxury home.'
        },
        {
          id: 9,
          title: 'Apartment Renovation',
          type: 'residential',
          image: '/Interior_Project/Picture10.jpg',
          description: 'Complete renovation of apartment with modern interiors.'
        },
        {
          id: 10,
          title: 'Minimalist Home Design',
          type: 'residential',
          image: '/Interior_Project/Picture11.jpg',
          description: 'Clean, minimalist interior design for contemporary home.'
        },
        {
          id: 11,
          title: 'Villa Interior',
          type: 'residential',
          image: '/Interior_Project/Picture12.jpg',
          description: 'Elegant interior design for spacious villa.'
        }
      ],
      commercial: [
        {
          id: 12,
          title: 'Corporate Office',
          type: 'commercial',
          image: '/INTERIOR PROJECTS (COMMERCIAL)/Picture13.jpg',
          description: 'Innovative and efficient commercial office space.'
        },
        {
          id: 13,
          title: 'Retail Store Design',
          type: 'commercial',
          image: '/INTERIOR PROJECTS (COMMERCIAL)/Picture14.jpg',
          description: 'Modern retail store with unique shopping experience.'
        },
        {
          id: 14,
          title: 'Restaurant Interior',
          type: 'commercial',
          image: '/INTERIOR PROJECTS (COMMERCIAL)/Picture15.jpg',
          description: 'Stylish restaurant interior with comfortable dining atmosphere.'
        },
        {
          id: 15,
          title: 'Hotel Lobby Design',
          type: 'commercial',
          image: '/INTERIOR PROJECTS (COMMERCIAL)/Picture16.jpg',
          description: 'Elegant hotel lobby with welcoming ambiance.'
        },
        {
          id: 16,
          title: 'Co-working Space',
          type: 'commercial',
          image: '/INTERIOR PROJECTS (COMMERCIAL)/Picture17.jpg',
          description: 'Modern co-working space designed for productivity and collaboration.'
        },
        {
          id: 17,
          title: 'Conference Center',
          type: 'commercial',
          image: '/INTERIOR PROJECTS (COMMERCIAL)/Picture18.jpg',
          description: 'State-of-the-art conference center with versatile meeting spaces.'
        }
      ]
    },

    // Urban Projects
    urban: [
      {
        id: 18,
        title: 'Urban Housing Development',
        image: '/PROJECTS- URBAN PROJECTS/Picture19.jpg',
        description: 'Urban housing development with sustainable features.'
      },
      {
        id: 19,
        title: 'City Master Plan',
        image: '/PROJECTS- URBAN PROJECTS/Picture20.jpg',
        description: 'Comprehensive master plan for urban development.'
      },
      {
        id: 20,
        title: 'Public Space Renovation',
        image: '/PROJECTS- URBAN PROJECTS/Picture21.jpg',
        description: 'Renovation of public spaces with modern amenities and green areas.'
      }
    ]
  };

  // For image modal navigation
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    // Create a flat array of all images for modal navigation
    let images = [];
    if (activeCategory === 'architecture') {
      images = projects.architecture.map(project => ({
        id: project.id,
        image: project.image,
        title: project.title,
        description: project.description
      }));
    } else if (activeCategory === 'urban') {
      images = projects.urban.map(project => ({
        id: project.id,
        image: project.image,
        title: project.title,
        description: project.description
      }));
    } else if (activeCategory === 'interior') {
      const residential = projects.interior.residential.map(project => ({
        id: project.id,
        image: project.image,
        title: project.title,
        description: project.description,
        type: project.type
      }));

      const commercial = projects.interior.commercial.map(project => ({
        id: project.id,
        image: project.image,
        title: project.title,
        description: project.description,
        type: project.type
      }));

      images = [...residential, ...commercial];
    }

    setAllImages(images);
  }, [activeCategory]);

  // Open image modal
  const openImageModal = (image) => {
    setSelectedImage(image);
    const index = allImages.findIndex(img => img.image === image.image);
    setCurrentImageIndex(index);
  };

  // Close image modal
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
  };

  // Update selected image when currentImageIndex changes
  useEffect(() => {
    if (allImages.length > 0 && currentImageIndex >= 0 && selectedImage) {
      setSelectedImage(allImages[currentImageIndex]);
    }
  }, [currentImageIndex, allImages]);

  // Reset modal state when category changes
  useEffect(() => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  }, [activeCategory]);

  return (
    <section className="max-w-6xl mx-auto mt-24 py-10 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#B3BD31' }}>Our Projects</h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${activeCategory === category.id
                ? 'bg-[#B3BD31] text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Architecture Projects with Rotating Row */}
      {activeCategory === 'architecture' && (
        <div className="relative w-full overflow-hidden">
          {/* Left Vignette */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* Right Vignette */}
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

          <motion.div
            className="flex space-x-6 py-4"
            animate={!isArchHovered ? {
              x: [0, -1400]
            } : {}}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }
            }}
            onMouseEnter={() => setIsArchHovered(true)}
            onMouseLeave={() => setIsArchHovered(false)}
          >
            {[...projects.architecture, ...projects.architecture].map((project, index) => (
              <div
                key={`arch-${project.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openImageModal(project)}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#B3BD31' }}>{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Interior Projects with Rotating Rows */}
      {activeCategory === 'interior' && (
        <div className="space-y-12">
          {/* Residential Row - Auto Scrolling */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Residential Interiors</h3>
            <div className="relative w-full overflow-hidden">
              {/* Left Vignette */}
              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>

              {/* Right Vignette */}
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

              <motion.div
                className="flex space-x-6 py-4"
                animate={!isResHovered ? {
                  x: [0, -1200]
                } : {}}
                transition={{
                  x: {
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }
                }}
                onMouseEnter={() => setIsResHovered(true)}
                onMouseLeave={() => setIsResHovered(false)}
              >
                {[...projects.interior.residential, ...projects.interior.residential].map((project, index) => (
                  <div
                    key={`res-${project.id}-${index}`}
                    className="flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => openImageModal(project)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1" style={{ color: '#B3BD31' }}>{project.title}</h3>
                      <p className="text-gray-700 text-sm">{project.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Commercial Row - Auto Scrolling in Opposite Direction */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Commercial Interiors</h3>
            <div className="relative w-full overflow-hidden">
              {/* Left Vignette */}
              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>

              {/* Right Vignette */}
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

              <motion.div
                className="flex space-x-6 py-4"
                animate={!isComHovered ? {
                  x: [-1200, 0]
                } : {}}
                transition={{
                  x: {
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }
                }}
                onMouseEnter={() => setIsComHovered(true)}
                onMouseLeave={() => setIsComHovered(false)}
              >
                {[...projects.interior.commercial, ...projects.interior.commercial].map((project, index) => (
                  <div
                    key={`com-${project.id}-${index}`}
                    className="flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => openImageModal(project)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1" style={{ color: '#B3BD31' }}>{project.title}</h3>
                      <p className="text-gray-700 text-sm">{project.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Urban Projects with Rotating Row */}
      {activeCategory === 'urban' && (
        <div className="relative w-full overflow-hidden">
          {/* Left Vignette */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* Right Vignette */}
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

          <motion.div
            className="flex space-x-6 py-4"
            animate={!isUrbanHovered ? {
              x: [-900, 0]
            } : {}}
            transition={{
              x: {
                duration: 15,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }
            }}
            onMouseEnter={() => setIsUrbanHovered(true)}
            onMouseLeave={() => setIsUrbanHovered(false)}
          >
            {[...projects.urban, ...projects.urban, ...projects.urban].map((project, index) => (
              <div
                key={`urban-${project.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openImageModal(project)}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#B3BD31' }}>{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
              {/* Close button */}
              <button
                className="absolute right-0 top-0 bg-white rounded-full p-2 transform translate-x-1/2 -translate-y-1/2 z-10"
                onClick={closeImageModal}
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image container */}
              <motion.div
                className="bg-white rounded-lg overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[80vh]">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

              {/* Navigation buttons */}
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
