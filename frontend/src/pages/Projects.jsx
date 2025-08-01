import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetailModal from '../components/ProjectDetailModal';

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
        title: 'Town House',
        image: '/New folder/Town House.png',
        description: 'Residential project in Munich, Germany with G+3 configuration and pent house.'
      },
      {
        id: 2,
        title: 'Maurya Heights',
        image: '/New folder/Maurya Heights.jpg',
        description: 'Residential complex in Nashik with G+7 configuration and 2 BHK apartments.'
      },
      {
        id: 3,
        title: 'Triplet Bungalow',
        image: '/New folder/Triplet Bungalow.jpg',
        description: 'Luxury triplet bungalow project in Munich, Germany.'
      },
      {
        id: 4,
        title: "Pooja's Niwas",
        image: "/New folder/Pooja's Niwas.jpg",
        description: '5 BHK Bungalow in Muzaffarpur with G+1 configuration.'
      },
      {
        id: 5,
        title: 'Villa Eichleite',
        image: '/New folder/Villa Eichleite.jpg',
        description: 'Luxurious villa project in Munich with G+2 configuration.'
      },
      {
        id: 6,
        title: 'Yadav Enclave',
        image: '/New folder/Yadav Enclave.jpg',
        description: '6BHK Cluster Bungalows in Gorakhpur with G+2 configuration.'
      }
    ],

    // Interior Projects
    interior: {
      commercial: [
        {
          id: 7,
          title: 'YES Germany - Andheri',
          type: 'commercial',
          image: '/interior/YES Germany-1.jpg',
          description: 'Commercial office space interior in Andheri, Mumbai.'
        },
        {
          id: 8,
          title: 'Spiceland Restaurant',
          type: 'commercial',
          image: '/interior/Spiceland-1.jpg',
          description: 'Restaurant interior project in Muzaffarpur, Bihar.'
        },
        {
          id: 9,
          title: 'YES Germany - Belapur',
          type: 'commercial',
          image: '/interior/YES Germany-Belapur-1.jpg',
          description: 'Commercial office space interior in Belapur, Mumbai.'
        }
      ],
      residential: [
        {
          id: 10,
          title: 'Abu Niwas',
          type: 'residential',
          image: '/interior/Abu Niwas-1.jpg',
          description: 'Residential interior project in Purnia, Bihar.'
        }
      ]
    },

    // Urban Projects
    urban: [
      {
        id: 11,
        title: 'Smart City Junction Design (Hathi Chowk)',
        image: '/urban/SCJD-Hathi Chowk-1.jpg',
        description: 'Junction design project in Muzaffarpur covering 525 sq. m.'
      },
      {
        id: 12,
        title: 'Smart City Junction Design (Mithanpura Chowk)',
        image: '/urban/SCJD-Mithanpura Chowk-1.jpg',
        description: 'Junction design project in Muzaffarpur covering 479 sq. m.'
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

  // Open detailed project modal
  const openProjectDetail = (project) => {
    setSelectedImage(project);
    const index = allImages.findIndex(img => img.image === project.image);
    setCurrentImageIndex(index);
  };

  // Close detailed project modal
  const closeProjectDetail = () => {
    setSelectedImage(null);
  };

  // Navigate to different project
  const navigateToProject = (newIndex) => {
    if (allImages.length > 0 && newIndex >= 0 && newIndex < allImages.length) {
      setCurrentImageIndex(newIndex);
      setSelectedImage(allImages[newIndex]);
    }
  };

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
                onClick={() => openProjectDetail(project)}
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
                    onClick={() => openProjectDetail(project)}
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
                    onClick={() => openProjectDetail(project)}
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
                onClick={() => openProjectDetail(project)}
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

      {/* Detailed Project Modal */}
      <ProjectDetailModal
        project={selectedImage}
        isOpen={!!selectedImage}
        onClose={closeProjectDetail}
        allProjects={allImages}
        currentIndex={currentImageIndex}
        onNavigate={navigateToProject}
      />
    </section>
  );
};

export default Projects;
