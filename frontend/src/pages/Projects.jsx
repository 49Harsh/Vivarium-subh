import React, { useState, useEffect } from 'react';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';


const Projects = () => {
  const location = useLocation();
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
    { id: 'urban', name: 'Urban Design' }
  ];

  const projects = {
    // Architecture Projects
    architecture: [
      {
        id: 1,
        title: 'Town House',
        image: '/Projects/Architecture/Town House/VILLA CAM 1.jpg',
        description: 'Residential project in Munich, Germany with G+3 configuration and pent house.'
      },
      {
        id: 2,
        title: 'Morya Heights',
        image: '/Projects/Architecture/Maurya Heights/mh3.jpg',
        description: 'Residential complex in Nashik with G+7 configuration and 2 BHK apartments.'
      },
      {
        id: 3,
        title: 'Triplet Bungalow',
        image: '/Projects/Architecture/Triplet Bungalow/tb1.jpg',
        description: 'Luxury triplet bungalow project in Munich, Germany.'
      },
      {
        id: 4,
        title: "Pooja's Niwas",
        image: "/Projects/Architecture/Pooja Niwas/pooja.png",
        description: '5 BHK Bungalow in Muzaffarpur with G+1 configuration.'
      },
      {
        id: 5,
        title: 'Villa Eichleite',
        image: '/Projects/Architecture/Villa Eichleite/ve.jpg',
        description: 'Luxurious villa project in Munich with G+2 configuration.'
      },
      {
        id: 6,
        title: 'Yadav Enclave',
        image: '/Projects/Architecture/Yadav Enclave/ye.jpg',
        description: '6BHK Cluster Bungalows in Gorakhpur with G+2 configuration.'
      },
      {
        id: 7,
        title: 'Giravale 103',
        image: '/Projects/Architecture/GIRAVALE 103/GIRAVALE 103/01.jpg',
        description: 'Residential project in Giravale, Panvel with G+12 configuration and 1 BHK, 2BHK apartments.'
      },
      {
        id: 8,
        title: 'Venkatesha Realty',
        image: '/Projects/Architecture/VENKATESHA REALTY/VENKATESHA REALTY/VIEWS_01 new.png',
        description: 'Residential complex in Shirdhon, Panvel with G+7 configuration and 1 BHK apartments.'
      },
      {
        id: 9,
        title: 'Jai Malhar Phase III',
        image: '/Projects/Architecture/JAI MALHAR PHASE III/JAI MALHAR PHASE III/Scene 1.png',
        description: 'Residential project in Shedung, Panvel with G+7 configuration and 1BHK, 2BHK apartments.'
      },
      {
        id: 10,
        title: 'Jai Malhar Phase V',
        image: '/Projects/Architecture/JAI MALHAR PHASE V/JAI MALHAR PHASE V/VIEWS_02.png',
        description: 'Residential complex in Shedung, Panvel with G+7 configuration and 1BHK, 2BHK apartments.'
      },
      {
        id: 11,
        title: 'Ashte 58.2',
        image: '/Projects/Architecture/ASHTE 58.2/ASHTE 58.2/204ee68f-d4f7-4e58-8ddd-ffb62d8e5a8e.png',
        description: 'Residential project in Ashte, Panvel with G+7 configuration and 1 BHK, 2BHK apartments.'
      },
      {
        id: 12,
        title: 'Giravale 38',
        image: '/Projects/Architecture/GIRAVALE 38/GIRAVALE 38/1.jpg',
        description: 'Residential complex in Giravale, Panvel with G+14 configuration and 1BHK, 1.5BHK, 2BHK apartments.'
      },
      {
        id: 13,
        title: 'Arivali 105',
        image: '/Projects/Architecture/ARIVALI 105/ARIVALI 105/apartment cam 01.jpg',
        description: 'Residential project in Arivali, Panvel with G+13 configuration and 1 BHK, 1.5BHK, 2BHK apartments.'
      }
    ],

    // Interior Projects
    interior: {
      commercial: [
        {
          id: 7,
          title: 'YES Germany - Andheri',
          type: 'commercial',
          image: '/Projects/Interior/Yes Germany, Andheri/1.jpg',
          description: 'Commercial office space interior in Andheri, Mumbai.'
        },
        {
          id: 8,
          title: 'Spiceland Restaurant',
          type: 'commercial',
          image: '/Projects/Interior/Spiceland/sp.jpg',
          description: 'Restaurant interior project in Muzaffarpur, Bihar.'
        },
        {
          id: 9,
          title: 'YES Germany - Belapur',
          type: 'commercial',
          image: '/Projects/Interior/Yes Germany, Belapur/3.jpeg',
          description: 'Commercial office space interior in Belapur, Mumbai.'
        }
      ],
      residential: [
        {
          id: 10,
          title: 'Abu Niwas',
          type: 'residential',
          image: '/Projects/Interior/Abu Niwas/an1.jpg',
          description: 'Residential interior project in Purnia, Bihar.'
        }
      ]
    },

    // Urban Projects
    urban: [
      {
        id: 11,
        title: 'Smart City Junction Design (Hathi Chowk)',
        image: '/Projects/Urban Projects/scj(hc)/1.jpg',
        description: 'Junction design project in Muzaffarpur covering 525 sq. m.'
      },
      {
        id: 12,
        title: 'Smart City Junction Design (Mithanpura Chowk)',
        image: '/Projects/Urban Projects/scj(mc)/1.jpg',
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

  // Set active category based on URL path and scroll to top
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/projects/architecture')) {
      setActiveCategory('architecture');
      window.scrollTo(0, 0);
    } else if (path.includes('/projects/interior')) {
      setActiveCategory('interior');
      window.scrollTo(0, 0);
    } else if (path.includes('/projects/urban')) {
      setActiveCategory('urban');
      window.scrollTo(0, 0);
    }
  }, [location]);

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
              x: ["0%", "-50%"]
            } : {}}
            transition={{
              x: {
                duration: 15,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }
            }}
            style={{
              width: "fit-content",
              display: "flex"
            }}
            onMouseEnter={() => setIsArchHovered(true)}
            onMouseLeave={() => setIsArchHovered(false)}
          >
            {[...projects.architecture].map((project, index) => (
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
                  x: ["0%", "-50%"]
                } : {}}
                transition={{
                  x: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }
                }}
                style={{
                  width: "fit-content",
                  display: "flex"
                }}
                onMouseEnter={() => setIsResHovered(true)}
                onMouseLeave={() => setIsResHovered(false)}
              >
                {[...projects.interior.residential].map((project, index) => (
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
                  x: ["-50%", "0%"]
                } : {}}
                transition={{
                  x: {
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }
                }}
                style={{
                  width: "fit-content",
                  display: "flex"
                }}
                onMouseEnter={() => setIsComHovered(true)}
                onMouseLeave={() => setIsComHovered(false)}
              >
                {[...projects.interior.commercial].map((project, index) => (
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
              x: ["-50%", "0%"]
            } : {}}
            transition={{
              x: {
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }
            }}
            style={{
              width: "fit-content",
              display: "flex"
            }}
            onMouseEnter={() => setIsUrbanHovered(true)}
            onMouseLeave={() => setIsUrbanHovered(false)}
          >
            {[...projects.urban].map((project, index) => (
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
