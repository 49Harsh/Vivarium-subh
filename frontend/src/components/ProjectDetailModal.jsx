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
    'Modern Residential Complex': {
      location: 'Mumbai, Maharashtra',
      area: '25,000 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Priya Sharma',
      client: 'ABC Developers',
      year: '2023',
      description: 'A luxury residential complex featuring modern amenities, sustainable design, and premium finishes. The project includes 50 units with state-of-the-art facilities.'
    },
    'Contemporary Villa': {
      location: 'Pune, Maharashtra',
      area: '8,500 sq.ft.',
      status: 'Under Construction',
      team: 'Rohit Walimbe, Amit Patel',
      client: 'Private Client',
      year: '2024',
      description: 'Contemporary villa with minimalist architectural approach, featuring clean lines, open spaces, and natural materials.'
    },
    'Sustainable Housing': {
      location: 'Bangalore, Karnataka',
      area: '15,000 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Neha Singh',
      client: 'Green Homes Ltd',
      year: '2023',
      description: 'Eco-friendly housing project with sustainable features including solar panels, rainwater harvesting, and green building materials.'
    },
    'Urban Residence': {
      location: 'Delhi, NCR',
      area: '6,200 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Rajesh Kumar',
      client: 'Urban Living',
      year: '2023',
      description: 'Modern urban residence with innovative design solutions, maximizing space efficiency and natural light.'
    },
    'Luxury Apartment Complex': {
      location: 'Hyderabad, Telangana',
      area: '45,000 sq.ft.',
      status: 'Under Construction',
      team: 'Rohit Walimbe, Deepak Verma',
      client: 'Luxury Developers',
      year: '2024',
      description: 'High-end apartment complex with premium amenities including swimming pool, gym, and landscaped gardens.'
    },
    'Commercial Building': {
      location: 'Chennai, Tamil Nadu',
      area: '18,000 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Kavya Reddy',
      client: 'Tech Corp',
      year: '2023',
      description: 'Commercial building with contemporary architectural style, designed for modern office spaces and retail outlets.'
    },
    'Mixed-Use Development': {
      location: 'Ahmedabad, Gujarat',
      area: '35,000 sq.ft.',
      status: 'Under Construction',
      team: 'Rohit Walimbe, Meera Shah',
      client: 'Metro Developers',
      year: '2024',
      description: 'Mixed-use development combining residential and commercial spaces with integrated amenities and smart city features.'
    },
    'Luxury Home Interior': {
      location: 'Mumbai, Maharashtra',
      area: '4,500 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Anjali Desai',
      client: 'Private Client',
      year: '2023',
      description: 'Modern, functional, and aesthetic interiors for luxury home with premium finishes and custom furniture.'
    },
    'Apartment Renovation': {
      location: 'Pune, Maharashtra',
      area: '2,800 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Suresh Iyer',
      client: 'Private Client',
      year: '2023',
      description: 'Complete renovation of apartment with modern interiors, maximizing space and creating a contemporary living environment.'
    },
    'Minimalist Home Design': {
      location: 'Bangalore, Karnataka',
      area: '3,200 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Priya Rao',
      client: 'Private Client',
      year: '2023',
      description: 'Clean, minimalist interior design for contemporary home with focus on functionality and aesthetic appeal.'
    },
    'Villa Interior': {
      location: 'Goa, India',
      area: '6,500 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Maria Fernandes',
      client: 'Private Client',
      year: '2023',
      description: 'Elegant interior design for spacious villa with tropical influences and luxury finishes.'
    },
    'Corporate Office': {
      location: 'Mumbai, Maharashtra',
      area: '12,000 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Vikram Mehta',
      client: 'Tech Solutions Inc',
      year: '2023',
      description: 'Innovative and efficient commercial office space designed for productivity and employee well-being.'
    },
    'Retail Store Design': {
      location: 'Delhi, NCR',
      area: '3,500 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Ritu Sharma',
      client: 'Fashion Retail',
      year: '2023',
      description: 'Modern retail store with unique shopping experience, featuring innovative display systems and customer-friendly layout.'
    },
    'Restaurant Interior': {
      location: 'Pune, Maharashtra',
      area: '4,200 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Chef Arjun',
      client: 'Fine Dining Restaurant',
      year: '2023',
      description: 'Stylish restaurant interior with comfortable dining atmosphere, featuring warm lighting and elegant decor.'
    },
    'Hotel Lobby Design': {
      location: 'Jaipur, Rajasthan',
      area: '8,000 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Maharani Hotels',
      client: 'Heritage Hotels',
      year: '2023',
      description: 'Elegant hotel lobby with welcoming ambiance, blending traditional Rajasthani elements with modern luxury.'
    },
    'Co-working Space': {
      location: 'Bangalore, Karnataka',
      area: '15,000 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Startup Hub',
      client: 'Innovation Workspace',
      year: '2023',
      description: 'Modern co-working space designed for productivity and collaboration, featuring flexible work areas and meeting rooms.'
    },
    'Conference Center': {
      location: 'Hyderabad, Telangana',
      area: '20,000 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Event Corp',
      client: 'Business Events Ltd',
      year: '2023',
      description: 'State-of-the-art conference center with versatile meeting spaces, advanced audio-visual systems, and modern amenities.'
    },
    'Urban Housing Development': {
      location: 'Mumbai, Maharashtra',
      area: '50,000 sq.ft.',
      status: 'Under Construction',
      team: 'Rohit Walimbe, Urban Planners',
      client: 'City Development Authority',
      year: '2024',
      description: 'Urban housing development with sustainable features, green spaces, and community amenities.'
    },
    'City Master Plan': {
      location: 'Smart City Project',
      area: '500,000 sq.ft.',
      status: 'Planning Phase',
      team: 'Rohit Walimbe, Urban Design Team',
      client: 'Municipal Corporation',
      year: '2024',
      description: 'Comprehensive master plan for urban development including infrastructure, transportation, and sustainable city planning.'
    },
    'Public Space Renovation': {
      location: 'Public Park, City Center',
      area: '25,000 sq.ft.',
      status: 'Completed',
      team: 'Rohit Walimbe, Landscape Architects',
      client: 'Municipal Corporation',
      year: '2023',
      description: 'Renovation of public spaces with modern amenities and green areas, creating community gathering spaces.'
    }
  };

  const details = projectDetails[project?.title] || {
    location: 'Location TBD',
    area: 'Area TBD',
    status: 'Status TBD',
    team: 'Rohit Walimbe',
    client: 'Client TBD',
    year: '2024',
    description: project?.description || 'Project description not available'
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

                {/* Team and Client */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Project Team</h3>
                  <p className="text-gray-800 font-medium mb-4">{details.team}</p>
                  
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Client</h3>
                  <p className="text-gray-800 font-medium">{details.client}</p>
                </div>

                {/* Detailed Description */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Project Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{details.description}</p>
                </div>

                                 {/* Navigation Info */}
                 <div className="bg-[#B3BD31] bg-opacity-10 p-4 rounded-lg">
                   <p className="text-sm text-gray-600">
                     <span className="font-semibold">Navigation:</span> Click on thumbnail images below to explore different projects
                   </p>
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