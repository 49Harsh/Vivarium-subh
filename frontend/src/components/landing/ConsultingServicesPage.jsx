import React, { useEffect, useRef } from 'react';
import {motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

gsap.registerPlugin(ScrollTrigger);

const ConsultingServicesPage = () => {
  // Add custom styles for 3D effects
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .perspective-1000 {
        perspective: 1000px;
      }
      .transform-gpu {
        transform: translate3d(0, 0, 0);
      }
      .shadow-3xl {
        box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
      }
      .project-card-3d {
        transform-style: preserve-3d;
      }
      .swiper-slide-thumb-active {
        opacity: 1 !important;
        border-color: #B3BD31 !important;
      }
      .swiper-button-next,
      .swiper-button-prev {
        color: #B3BD31 !important;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      .swiper-button-next:hover,
      .swiper-button-prev:hover {
        background: #B3BD31;
        color: white !important;
      }
      .swiper-pagination-bullet {
        background: #B3BD31 !important;
      }
      .swiper-pagination-bullet-active {
        background: #9CAD28 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const fadeInUp = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" }
  };

  // Section component with animation on scroll
  const AnimatedSection = ({ children, animation, id }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.15, // Trigger animation a bit earlier
      triggerOnce: false // Allow animations to repeat every time element comes into view
    });

    useEffect(() => {
      if (inView) {
        controls.start('animate');
      } else {
        // Reset animation when element is out of view
        controls.start('initial');
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={animation}
        id={id}
      >
        {children}
      </motion.div>
    );
  };

  // Service card component that matches the reference design
  const ServiceCard = ({ title, icon, children, links = [] }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-[320px] flex flex-col group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#aab600] via-[#B3BD3180] to-[#aab600] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div className="flex flex-col items-center mb-4 relative z-10">
          <div className="w-14 h-14 mb-3 text-[#B3BD31] group-hover:scale-110 transition-transform duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              {icon}
            </svg>
          </div>
          <h2 className="text-xl font-bold text-center group-hover:text-[#B3BD31] transition-colors duration-300">{title}</h2>
        </div>

        <div className="text-center text-gray-700 mb-4 flex-grow overflow-y-auto relative z-10">
          {children}
        </div>

        {links.length > 0 && (
          <div className="mt-auto relative z-10">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="flex items-center justify-center text-gray-700 hover:text-[#B3BD31]"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span>{link.text}</span>
                <svg className="w-4 h-4 ml-2 text-[#B3BD31]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Client logos for the carousel
  const clientLogos = [
    "/Client/Picture25.png",
    "/Client/Picture26.png",
    "/Client/Picture27.png",
    "/Client/Picture28.png",
    "/Client/Picture29.png",
    "/Client/Picture30.png",
    "/Client/chaline.jpg",
    

  ];

  // Duplicate the logos for seamless infinite scrolling
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  // Professional Project Overview with Swiper Thumbs Gallery
  const ProjectOverviewSection = () => {
    // Using useRef instead of useState to avoid stale state issues
    const swiperStatesRef = useRef({
      architecture: { main: null, thumbs: null },
      interior: { main: null, thumbs: null },
      urban: { main: null, thumbs: null }
    });
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    const projectData = [
      {
        id: 1,
        title: "Architecture",
        subtitle: "Modern Living Spaces",
        description: "Innovative residential designs that blend comfort with contemporary aesthetics, creating homes that inspire daily living. Our architectural expertise spans from luxury villas to modern residential complexes.",
        images: [
          "/Projects/Architecture/Pooja Niwas/pooja.png",
          "/Projects/Architecture/Triplet Bungalow/tb1.jpg",
          "/Projects/Architecture/Maurya Heights/mh.jpg",
          "/Projects/Architecture/Town House/VILLA CAM 1.jpg"
        ],
        category: "Architecture",
        stats: { projects: "50+" }
      },
      {
        id: 2,
        title: "Interior",
        subtitle: "Professional Workspaces",
        description: "Functional and inspiring commercial spaces designed to enhance productivity and create memorable brand experiences. From office spaces to commercial interiors, we transform environments.",
        images: [
          "/Projects/Interior/Abu Niwas/an1.jpg",
          "/Projects/Interior/Yes Germany, Belapur/3.jpeg",
          "/Projects/Interior/Spiceland/sp.jpg",
          "/Projects/Interior/Yes Germany, Andheri/1.jpg"
        ],
        category: "Interior",
        stats: { projects: "30+" }
      },
      {
        id: 3,
        title: "Urban Design",
        subtitle: "Community Planning",
        description: "Comprehensive urban planning solutions that create sustainable communities and enhance quality of life for residents. We design public spaces and urban developments that bring communities together.",
        images: [
          "/Projects/Urban Projects//scj(mc)/1.jpg",
          "/Projects/Urban Projects//scj(mc)/2.jpg",
          "/Projects/Urban Projects/scj(hc)/1.jpg",
          "/Projects/Urban Projects/scj(hc)/3.jpg"
        ],
        category: "Urban",
        stats: { projects: "5+" }
      }
    ];

    useEffect(() => {
      const ctx = gsap.context(() => {
        // Create timeline for coordinated animations
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        });

        // Advanced title animation with morphing effect
        gsap.set(titleRef.current, {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          y: 60
        });

        tl.to(titleRef.current, {
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          y: 0,
          duration: 1.2,
          ease: "power4.out"
        });

        // Subtitle with typewriter effect
        gsap.set(subtitleRef.current, { opacity: 0, y: 30 });
        tl.to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.6");

      }, sectionRef);

      return () => ctx.revert();
    }, []);

    return (
      <div ref={sectionRef} className="relative mb-20 overflow-hidden py-20">
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2
              ref={titleRef}
              className="text-6xl md:text-7xl font-bold mb-8"
              style={{
                background: 'linear-gradient(135deg, #2D3748, #B3BD31, #4A5568)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 200%',
                paddingBottom: '0.1em',
                lineHeight: '1.2'
              }}
            >
              Project Overview
            </h2>
            <p
              ref={subtitleRef}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Discover our exceptional portfolio of architectural masterpieces, where innovation meets functionality
              to create spaces that inspire and endure.
            </p>
          </div>

                     {/* Swiper Gallery */}
           <div className="max-w-7xl mx-auto">
             {projectData.map((project) => {
               const projectKey = project.title.toLowerCase().replace(/\s+/g, '');
               const currentSwiperState = swiperStatesRef.current[projectKey] || { main: null, thumbs: null };
               
               return (
                 <div key={project.id} className="mb-20">
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     {/* Left Side - Project Details (or Right for Interior) */}
                     <div className={`${project.title === "Interior" ? "order-1 lg:order-2" : "order-2 lg:order-1"}`}>
                       <div className="text-left">
                         <h3 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h3>
                         <p className="text-xl text-[#B3BD31] font-semibold mb-4">{project.subtitle}</p>
                         <p className="text-gray-600 leading-relaxed mb-8">{project.description}</p>
                         <div className="flex items-center space-x-8 mb-8">
                           <div className="text-center">
                             <div className="text-3xl font-bold text-[#B3BD31]">{project.stats.projects}</div>
                             <div className="text-sm text-gray-500 uppercase tracking-wide">Projects</div>
                           </div>
                         </div>
                         
                         {/* Learn More Button */}
                         <Link to="/projects">
                           <button className="group relative px-8 py-4 bg-gradient-to-r from-[#B3BD31] to-[#9CAD28] text-white font-bold text-lg rounded-full shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105">
                             <span className="relative z-10 flex items-center">
                               Learn More About {project.title}
                               <svg className="w-5 h-5 ml-3 transition-transform duration-500 group-hover:translate-x-2" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                               </svg>
                             </span>
                             <div className="absolute inset-0 bg-gradient-to-r from-[#9CAD28] to-[#B3BD31] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                           </button>
                         </Link>
                       </div>
                     </div>

                     {/* Right Side - Swiper Gallery (or Left for Interior) */}
                     <div className={`${project.title === "Interior" ? "order-2 lg:order-1" : "order-1 lg:order-2"}`}>
                       <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                         {/* Main Swiper */}
                         <Swiper
                           onSwiper={(swiper) => {
                             swiperStatesRef.current[projectKey] = {
                               ...swiperStatesRef.current[projectKey],
                               main: swiper
                             };
                           }}
                           spaceBetween={10}
                           navigation={true}
                           autoplay={{
                             delay: 3000,
                             disableOnInteraction: false,
                             pauseOnMouseEnter: true
                           }}
                           loop={true}
                           modules={[FreeMode, Navigation, Pagination, Thumbs, Autoplay]}
                           className="main-swiper h-80 md:h-[450px]"
                           onSlideChange={(swiper) => {
                             // Always get the latest reference from swiperStatesRef.current
                             const latestSwiperState = swiperStatesRef.current[projectKey];
                             if (latestSwiperState && latestSwiperState.thumbs && latestSwiperState.thumbs.slides && latestSwiperState.thumbs.slides.length > 0) {
                               // Use slideToLoop instead of slideTo for loop mode
                               if (latestSwiperState.thumbs.slideToLoop) {
                                 latestSwiperState.thumbs.slideToLoop(swiper.realIndex);
                               } else {
                                 // Fallback to slideTo if slideToLoop is not available
                                 latestSwiperState.thumbs.slideTo(swiper.realIndex);
                               }
                             }
                           }}
                         >
                           {project.images.map((image, index) => (
                             <SwiperSlide key={index}>
                               <div className="relative w-full h-full">
                                 <img
                                   src={image}
                                   alt={`${project.title} - Image ${index + 1}`}
                                   className="w-full h-full object-cover"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                 <div className="absolute bottom-6 left-6 text-white">
                                   <div className="text-sm font-semibold">{project.title}</div>
                                   <div className="text-xs opacity-80">Image {index + 1} of {project.images.length}</div>
                                 </div>
                               </div>
                             </SwiperSlide>
                           ))}
                         </Swiper>

                         {/* Thumbs Swiper */}
                         <Swiper
                           onSwiper={(swiper) => {
                             swiperStatesRef.current[projectKey] = {
                               ...swiperStatesRef.current[projectKey],
                               thumbs: swiper
                             };
                           }}
                           spaceBetween={10}
                           slidesPerView={4}
                           freeMode={true}
                           watchSlidesProgress={true}
                           loop={false}
                           modules={[FreeMode, Navigation, Thumbs]}
                           className="thumbs-swiper h-20 bg-gray-100 p-3"
                         >
                           {project.images.map((image, index) => (
                             <SwiperSlide key={index}>
                               <div 
                                 className="relative w-full h-full cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-[#B3BD31] transition-all duration-300"
                                 onClick={() => {
                                   // Always get the latest reference from swiperStatesRef.current
                                   const latestSwiperState = swiperStatesRef.current[projectKey];
                                   if (latestSwiperState && latestSwiperState.main && latestSwiperState.main.slides && latestSwiperState.main.slides.length > 0) {
                                     // Use slideToLoop instead of slideTo for loop mode
                                     if (latestSwiperState.main.slideToLoop) {
                                       latestSwiperState.main.slideToLoop(index);
                                     } else {
                                       // Fallback to slideTo if slideToLoop is not available
                                       latestSwiperState.main.slideTo(index + latestSwiperState.main.loopedSlides);
                                     }
                                     
                                     // Pause autoplay temporarily when user clicks
                                     if (latestSwiperState.main.autoplay) {
                                       latestSwiperState.main.autoplay.stop();
                                       setTimeout(() => {
                                         latestSwiperState.main.autoplay.start();
                                       }, 2000);
                                     }
                                   }
                                 }}
                               >
                                 <img
                                   src={image}
                                   alt={`${project.title} - Thumbnail ${index + 1}`}
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
                 </div>
               );
             })}
           </div>

          {/* Call to Action Button */}
          <div className="text-center mt-16">
            <Link to="/projects">
              <button className="group relative px-16 py-5 bg-gradient-to-r from-[#B3BD31] to-[#9CAD28] text-white font-bold text-xl rounded-full shadow-2xl overflow-hidden transition-all duration-700 hover:shadow-3xl hover:scale-105">
                <span className="relative z-10 flex items-center">
                  Explore All Projects
                  <svg className="w-7 h-7 ml-4 transition-transform duration-500 group-hover:translate-x-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#9CAD28] to-[#B3BD31] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Enhanced Project Overview Section with GSAP */}
        <ProjectOverviewSection />

        {/* Services Section */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Advise Card */}
            <AnimatedSection animation={fadeInUp} id="advice">
              <ServiceCard
                title="Advise"
                icon={<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />}
              >
                <p>
                  Expert advice on purchasing land or real estate. Reliable guidance for your construction project from start to finish.
                </p>
              </ServiceCard>
            </AnimatedSection>

            {/* Evaluate Card */}
            <AnimatedSection animation={fadeInUp} id="evaluation">
              <ServiceCard
                title="Evaluate"
                icon={<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />}
                links={[
                  { text: "Property valuation for Munich and Starnberg", url: "#munich" }
                ]}
              >
                <p>
                  Objective and independent market value assessment providing a qualified basis for your investment decisions.
                </p>
              </ServiceCard>
            </AnimatedSection>

            {/* Develop Card */}
            <AnimatedSection animation={fadeInUp} id="development">
              <ServiceCard
                title="Develop"
                icon={<path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-6h8v6zm0-8h-8V5h8v6z" />}
              >
                <p>
                  Precise planning and development concepts considering all building regulations. Optimize your land use with our villa construction expertise.
                </p>
              </ServiceCard>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Card */}
            <AnimatedSection animation={fadeInUp} id="planning">
              <ServiceCard
                title="Plan"
                icon={<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />}
              >
                <p>
                  Complete architectural and engineering services including spatial interior design. Available as your general planner for seamless project execution.
                </p>
              </ServiceCard>
            </AnimatedSection>

            {/* Represent Card */}
            <AnimatedSection animation={fadeInUp} id="depiction">
              <ServiceCard
                title="Represent"
                icon={<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />}
              >
                <p>
                  Photorealistic 3D visualization and modeling that brings spaces to life, enhancing understanding and facilitating better interior design decisions.
                </p>
              </ServiceCard>
            </AnimatedSection>

            {/* Realize Card */}
            <AnimatedSection animation={fadeInUp} id="realization">
              <ServiceCard
                title="Realize"
                icon={<path d="M12 7V3H2v18h20V7H12zM10 19H4v-6h6v6zm0-8H4V5h6v6zm10 8h-8v-6h8v6zm0-8h-8V5h8v6z" />}
              >
                <p>
                  Full project management from planning to completion with our network of reliable construction partners for optimal coordination.
                </p>
              </ServiceCard>
            </AnimatedSection>
          </div>
        </div>

        {/* Our Clients Section */}
        <div className="mb-20">
          <AnimatedSection animation={fadeInUp} id="our-clients">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Clients</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We're proud to have worked with a diverse range of clients across industries. Our partnerships are built on trust, communication, and delivering exceptional results.
              </p>
            </div>

            {/* Client Logo Carousel */}
            <div className="relative w-full overflow-hidden">
              {/* Left Vignette */}
              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>

              {/* Right Vignette */}
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

              {/* Scrolling Carousel */}
              <div className="flex items-center">
                <motion.div
                  className="flex items-center space-x-12 py-8"
                  animate={{
                    x: [0, -1920],
                  }}
                  transition={{
                    x: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    },
                  }}
                >
                  {duplicatedLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-28 w-48 flex-shrink-0"
                    >
                      <img src={logo} alt={`Client ${index % clientLogos.length + 1}`} className="max-h-16 max-w-full" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-700 font-medium">Join our growing list of satisfied clients</p>
              <Link to="/contact">
                <motion.button
                  className="mt-4 px-8 py-3 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: '#B3BD31' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Call to Action */}
       
      </div>
    </div>
  );
};

export default ConsultingServicesPage;