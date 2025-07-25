import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  const fadeInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, delay: 0.2, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, delay: 0.4, ease: "easeOut" }
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
  ];

  // Duplicate the logos for seamless infinite scrolling
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  // Professional Project Overview with Advanced Scroll Animations
  const ProjectOverviewSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const cardsContainerRef = useRef(null);
    const cardsRef = useRef([]);
    const buttonRef = useRef(null);
    const decorativeElementsRef = useRef([]);

    const projectData = [
      {
        id: 1,
        title: "Residential Architecture",
        subtitle: "Modern Living Spaces",
        description: "Innovative residential designs that blend comfort with contemporary aesthetics, creating homes that inspire daily living.",
        image: "/hero-image/Picture1.jpg",
        category: "Architecture",
        stats: { projects: "50+", years: "10+" }
      },
      {
        id: 2,
        title: "Commercial Interiors",
        subtitle: "Professional Workspaces",
        description: "Functional and inspiring commercial spaces designed to enhance productivity and create memorable brand experiences.",
        image: "/INTERIOR PROJECTS (COMMERCIAL)/Picture16.jpg",
        category: "Interior",
        stats: { projects: "30+", years: "8+" }
      },
      {
        id: 3,
        title: "Urban Development",
        subtitle: "Community Planning",
        description: "Comprehensive urban planning solutions that create sustainable communities and enhance quality of life for residents.",
        image: "/PROJECTS- URBAN PROJECTS/Picture20.jpg",
        category: "Urban",
        stats: { projects: "20+", years: "12+" }
      },
      {
        id: 4,
        title: "Luxury Villas",
        subtitle: "Premium Residences",
        description: "Exclusive villa designs that epitomize luxury living with attention to every detail and premium finishes.",
        image: "/hero-image/Picture3.jpg",
        category: "Architecture",
        stats: { projects: "25+", years: "15+" }
      },
      {
        id: 5,
        title: "Office Spaces",
        subtitle: "Corporate Excellence",
        description: "Modern office environments that foster collaboration, creativity, and professional growth in dynamic workspaces.",
        image: "/INTERIOR PROJECTS (COMMERCIAL)/Picture13.jpg",
        category: "Interior",
        stats: { projects: "40+", years: "9+" }
      },
      {
        id: 6,
        title: "Public Spaces",
        subtitle: "Community Hubs",
        description: "Thoughtfully designed public spaces that bring communities together and enhance urban living experiences.",
        image: "/PROJECTS- URBAN PROJECTS/Picture21.jpg",
        category: "Urban",
        stats: { projects: "15+", years: "11+" }
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

        // Cards with wave animation
        cardsRef.current.forEach((card, index) => {
          if (card) {
            // Initial state
            gsap.set(card, {
              y: 100,
              opacity: 0,
              rotationY: -15,
              scale: 0.8
            });

            // Wave animation with stagger
            gsap.to(card, {
              y: 0,
              opacity: 1,
              rotationY: 0,
              scale: 1,
              duration: 1.2,
              delay: index * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            });

            // Continuous floating animation
            gsap.to(card, {
              y: -10,
              duration: 2 + (index * 0.3),
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
              delay: index * 0.2
            });

            // Advanced hover interactions
            const cardImage = card.querySelector('.project-image');
            const cardContent = card.querySelector('.project-content');
            const cardOverlay = card.querySelector('.project-overlay');
            const categoryBadge = card.querySelector('.category-badge');

            card.addEventListener('mouseenter', () => {
              gsap.to(card, {
                scale: 1.05,
                rotationY: 5,
                z: 50,
                duration: 0.6,
                ease: "power2.out"
              });
              gsap.to(cardImage, {
                scale: 1.15,
                rotation: 2,
                duration: 0.8,
                ease: "power2.out"
              });
              gsap.to(cardOverlay, {
                opacity: 0.8,
                duration: 0.4
              });
              gsap.to(categoryBadge, {
                scale: 1.1,
                backgroundColor: "#9CAD28",
                duration: 0.3
              });
              gsap.to(cardContent, {
                y: -15,
                duration: 0.4,
                ease: "power2.out"
              });
            });

            card.addEventListener('mouseleave', () => {
              gsap.to(card, {
                scale: 1,
                rotationY: 0,
                z: 0,
                duration: 0.6,
                ease: "power2.out"
              });
              gsap.to(cardImage, {
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: "power2.out"
              });
              gsap.to(cardOverlay, {
                opacity: 0,
                duration: 0.4
              });
              gsap.to(categoryBadge, {
                scale: 1,
                backgroundColor: "#B3BD31",
                duration: 0.3
              });
              gsap.to(cardContent, {
                y: 0,
                duration: 0.4,
                ease: "power2.out"
              });
            });
          }
        });

        // Button with magnetic effect
        gsap.set(buttonRef.current, {
          scale: 0,
          rotation: 180
        });

        gsap.to(buttonRef.current, {
          scale: 1,
          rotation: 0,
          duration: 1,
          delay: 1.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        });

        // Decorative elements animation
        decorativeElementsRef.current.forEach((element, index) => {
          if (element) {
            gsap.to(element, {
              rotation: 360,
              duration: 20 + (index * 5),
              repeat: -1,
              ease: "none"
            });

            gsap.to(element, {
              scale: 1.2,
              duration: 3 + (index * 0.5),
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut"
            });
          }
        });

        // Scroll-based parallax for cards
        cardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.to(card, {
              y: (index % 2 === 0 ? -50 : 50),
              scrollTrigger: {
                trigger: cardsContainerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
              }
            });
          }
        });

      }, sectionRef);

      return () => ctx.revert();
    }, []);

    return (
      <div ref={sectionRef} className="relative mb-20 overflow-hidden py-20">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            ref={el => decorativeElementsRef.current[0] = el}
            className="absolute top-20 left-10 w-32 h-32 border-2 border-[#B3BD31]/20 rounded-full"
          />
          <div
            ref={el => decorativeElementsRef.current[1] = el}
            className="absolute top-40 right-20 w-24 h-24 bg-[#B3BD31]/10 rounded-full"
          />
          <div
            ref={el => decorativeElementsRef.current[2] = el}
            className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-[#B3BD31]/30 rotate-45"
          />
        </div>

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
                backgroundSize: '200% 200%'
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

          {/* Project Grid */}
          <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {projectData.map((project, index) => (
              <div
                key={project.id}
                ref={el => cardsRef.current[index] = el}
                className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0" />

                  {/* Category Badge */}
                  <div className="category-badge absolute top-6 left-6 px-4 py-2 bg-[#B3BD31] text-white text-sm font-bold rounded-full backdrop-blur-sm">
                    {project.category}
                  </div>

                  {/* Stats */}
                  <div className="absolute top-6 right-6 text-white text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-lg font-bold">{project.stats.projects}</div>
                    <div className="text-xs uppercase tracking-wide">Projects</div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-sm font-semibold">{project.stats.years} Experience</div>
                  </div>
                </div>

                {/* Content */}
                <div className="project-content p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-[#B3BD31] font-semibold text-sm uppercase tracking-wide">{project.subtitle}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Learn More</span>
                    <div className="w-10 h-10 bg-[#B3BD31] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <Link to="/projects">
              <button
                ref={buttonRef}
                className="group relative px-16 py-5 bg-gradient-to-r from-[#B3BD31] to-[#9CAD28] text-white font-bold text-xl rounded-full shadow-2xl overflow-hidden transition-all duration-700 hover:shadow-3xl"
              >
                <span className="relative z-10 flex items-center">
                  Explore All Projects
                  <svg className="w-7 h-7 ml-4 transition-transform duration-500 group-hover:translate-x-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </span>

                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#9CAD28] to-[#B3BD31] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-700" />
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
        <AnimatedSection animation={fadeInUp} className="text-center mt-16">
          <motion.button
            className="px-8 py-3 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: '#B3BD31' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Consultation
          </motion.button>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ConsultingServicesPage;