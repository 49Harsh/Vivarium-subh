import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

const ProjectDetailModal = ({ project, isOpen, onClose, allProjects, currentIndex, onNavigate }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  // Sample project details data - you can expand this
  const projectDetails = {
    '/Projects/Architecture/Town House/VILLA CAM 1.jpg': {
      title: 'Town House',
      location: 'Munich, Germany',
      area: '1484.94 sq. m.',
      status: 'Under Construction',
      projectType: 'Residential',
      floors: 'G+3',
      configuration: 'Pent House',
      possessionDate: '2026',
      year: '2026'
    },
    '/Projects/Architecture/Maurya Heights/mhjpg': {
      title: 'Maurya Heights',
      location: 'Nashik, India',
      area: '5109.66 sq. m.',
      siteArea: '1152 sq. m.',
      status: 'Completed',
      projectType: 'Residential',
      floors: 'G+7',
      configuration: '2 BHK',
      possessionDate: '2024',
      year: '2024'
    },
    '/Projects/Architecture/Triplet Bungalow/tb1.jpg': {
      title: 'Triplet Bungalow',
      location: 'Munich, Germany',
      area: '5414 sq. m.',
      siteArea: '859 sq. m.',
      status: 'Under Construction',
      projectType: 'Residential',
      floors: 'G+1',
      configuration: 'Triplet Bungalow',
      possessionDate: '2026',
      year: '2026'
    },
    '/Projects/Architecture/Pooja Niwas/pooja.png': {
      title: "Pooja's Niwas",
      location: 'Muzaffarpur, India',
      area: '385.52 sq. m.',
      siteArea: '190 sq. m.',
      status: 'Under Construction',
      projectType: 'Residential',
      floors: 'G+1',
      configuration: '5 BHK Bungalow',
      possessionDate: '2024',
      year: '2024'
    },
    '/Projects/Architecture/Villa Eichleite/ve.jpg': {
      title: 'Villa Eichleite',
      location: 'Munich, Germany',
      area: '5414 sq. m.',
      siteArea: '859 sq. m.',
      status: 'Under Construction',
      projectType: 'Residential',
      floors: 'G+2',
      configuration: 'Villa',
      possessionDate: '2025',
      year: '2025'
    },
    '/Projects/Architecture/Yadav Enclave/ye.jpg': {
      title: 'Yadav Enclave',
      location: 'Gorakhpur, Uttar Pradesh, India',
      area: '2000 sq. m.',
      siteArea: '2000 sq. m.',
      status: 'Under Construction',
      projectType: 'Residential',
      floors: 'G+2',
      configuration: '6BHK Cluster Bungalows',
      possessionDate: '2025',
      year: '2025'
    },
    '/Projects/Interior/Yes Germany, Andheri/1.jpg': {
      title: 'YES Germany - Andheri',
      location: 'Andheri, Mumbai, India',
      area: '1100 sq. ft.',
      status: 'Completed',
      projectType: 'Commercial Interior',
      configuration: 'Office Space',
      possessionDate: '2024',
      year: '2024'
    },
    '/Projects/Interior/Spiceland/sp.jpg': {
      title: 'Spiceland Restaurant',
      location: 'Muzaffarpur, Bihar, India',
      area: '1489 sq. ft.',
      status: 'Under Construction',
      projectType: 'Hospitality Interior',
      configuration: 'Restaurant',
      possessionDate: '2025',
      year: '2025'
    },
    '/Projects/Interior/Yes Germany, Belapur/3.jpeg': {
      title: 'YES Germany - Belapur',
      location: 'Belapur, Mumbai, India',
      area: '780 sq. ft.',
      status: 'Completed',
      projectType: 'Commercial Interior',
      configuration: 'Office Space',
      possessionDate: '2021',
      year: '2021'
    },
    '/Projects/Interior/Abu Niwas/an1.jpg': {
      title: 'Abu Niwas',
      location: 'Purnia, Bihar, India',
      area: '820 sq. ft.',
      status: 'Completed',
      projectType: 'Residential Interior',
      configuration: 'Interior',
      possessionDate: '2024',
      year: '2024'
    },
    '/Projects/Urban Projects/scj(hc)/1.jpg': {
      title: 'Smart City Junction Design (Hathi Chowk)',
      location: 'Muzaffarpur, Bihar, India',
      area: '525 sq. m.',
      status: 'Completed',
      projectType: 'Urban Design',
      configuration: 'Junction Design',
      possessionDate: '2023',
      year: '2023'
    },
    '/Projects/Urban Projects/scj(mc)/1.jpg': {
      title: 'Smart City Junction Design (Mithanpura Chowk)',
      location: 'Muzaffarpur, Bihar, India',
      area: '479 sq. m.',
      status: 'Completed',
      projectType: 'Urban Design',
      configuration: 'Junction Design',
      possessionDate: '2023',
      year: '2023'
    }
  };

  const details = projectDetails[project?.image] || {
    location: 'Location TBD',
    area: 'Area TBD',
    siteArea: 'Site Area TBD',
    status: 'Status TBD',
    projectType: 'Project Type TBD',
    floors: 'Floors TBD',
    configuration: 'Configuration TBD',
    possessionDate: 'TBD',
    year: 'Year TBD'
  };

  // Create images array with different project images for navigation
  const getProjectImages = () => {
    if (!allProjects || allProjects.length === 0) {
      return [project?.image].filter(Boolean);
    }
    
    // Get current project index
    const currentIndex = allProjects.findIndex(p => p.id === project?.id);
    
    // Create array with different project images
    const images = [];
    for (let i = 0; i < Math.min(4, allProjects.length); i++) {
      const index = (currentIndex + i) % allProjects.length;
      images.push(allProjects[index]?.image);
    }
    
    return images.filter(Boolean);
  };

  const projectImages = getProjectImages();

  const handleSwiperChange = (swiper) => {
    if (onNavigate && allProjects && allProjects.length > 0) {
      const newIndex = swiper.realIndex;
      // Calculate which project to navigate to based on current project and slide index
      const currentProjectIndex = allProjects.findIndex(p => p.id === project?.id);
      const targetIndex = (currentProjectIndex + newIndex) % allProjects.length;
      
      if (targetIndex !== currentProjectIndex) {
        onNavigate(targetIndex);
      }
    }
  };

  if (!project || !project.title || projectImages.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white bg-opacity-20 backdrop-blur-md z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
        <div className="relative w-full h-full max-w-7xl max-h-[95vh] bg-white rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
          {/* Close button */}
                     <button
             className="absolute right-4 top-4 bg-white rounded-full p-3 shadow-lg z-20 hover:bg-gray-100 transition-colors"
             onClick={(e) => {
               e.stopPropagation();
               onClose();
             }}
           >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Left Side - Project Details */}
            <div className="p-8 lg:p-12 bg-gray-50 overflow-y-auto">
              <div className="space-y-6">
                {/* Project Title */}
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{project?.title || 'Project Title'}</h2>
                  <p className="text-lg text-gray-600">{project?.description || 'Project description not available'}</p>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Location</h3>
                    <p className="text-gray-800 font-medium">{details.location}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Area</h3>
                    <p className="text-gray-800 font-medium">{details.area}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Status</h3>
                    <p className="text-gray-800 font-medium">{details.status}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Year</h3>
                    <p className="text-gray-800 font-medium">{details.year}</p>
                  </div>
                </div>

                {/* Project Type and Configuration */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Project Type</h3>
                  <p className="text-gray-800 font-medium mb-4">{details.projectType}</p>
                  
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Configuration</h3>
                  <p className="text-gray-800 font-medium">{details.configuration}</p>
                </div>

                {/* Additional Details */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Floors</h3>
                  <p className="text-gray-800 font-medium mb-4">{details.floors}</p>

                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Possession Date</h3>
                  <p className="text-gray-800 font-medium">{details.possessionDate}</p>
                </div>
              </div>
            </div>

            {/* Right Side - Swiper Gallery */}
            <div className="bg-white">
              {/* Main Swiper */}
              <Swiper
                onSwiper={setMainSwiper}
                spaceBetween={10}
                navigation={true}
                                 // autoplay={{
                 //   delay: 4000,
                 //   disableOnInteraction: false,
                 //   pauseOnMouseEnter: true
                 // }}
                loop={true}
                modules={[FreeMode, Navigation, Pagination, Thumbs, Autoplay]}
                className="main-swiper h-96 lg:h-[calc(100vh-200px)]"
                                 onSlideChange={handleSwiperChange}
              >
                {projectImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                             <div className="absolute bottom-6 left-6 text-white">
                         <div className="text-sm font-semibold">{project?.title || 'Project'}</div>
                         <div className="text-xs opacity-80">Image {index + 1} of {projectImages.length}</div>
                       </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbs Swiper */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                loop={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="thumbs-swiper h-20 bg-gray-100 p-3"
              >
                {projectImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div 
                      className="relative w-full h-full cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-[#B3BD31] transition-all duration-300"
                                             onClick={() => {
                         if (allProjects && allProjects.length > 0) {
                           // Calculate which project to navigate to
                           const currentIndex = allProjects.findIndex(p => p.id === project?.id);
                           const targetIndex = (currentIndex + index) % allProjects.length;
                           
                           // Navigate to the target project
                           if (onNavigate) {
                             onNavigate(targetIndex);
                           }
                           
                                                       // Reset swiper to first slide
                            if (mainSwiper && mainSwiper.slides && mainSwiper.slides.length > 0) {
                              mainSwiper.slideTo(0);
                            }
                         }
                       }}
                    >
                                             <img
                         src={image}
                         alt={`${project?.title || 'Project'} - Thumbnail ${index + 1}`}
                         className="w-full h-full object-cover"
                       />
                      <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-300"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
                 </div>
       </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal; 