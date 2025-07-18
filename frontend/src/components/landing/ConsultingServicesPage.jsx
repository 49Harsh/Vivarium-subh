import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const ConsultingServicesPage = () => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Project Overview Section */}
        <div className="mb-20">
          <AnimatedSection animation={fadeInUp} id="project-overview">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Overview</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our diverse portfolio of architectural projects spanning residential, commercial, and urban development.
                Each project showcases our commitment to innovative design, sustainable practices, and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url('/Interior_Project/Picture10.jpg')` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#B3BD31' }}>Residential Interiors</h3>
                  <p className="text-gray-600 mb-4">Modern living spaces designed with comfort and aesthetics in mind.</p>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url('/INTERIOR PROJECTS (COMMERCIAL)/Picture16.jpg')` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#B3BD31' }}>Commercial Spaces</h3>
                  <p className="text-gray-600 mb-4">Functional and inspiring workplaces for businesses of all sizes.</p>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url('/PROJECTS- URBAN PROJECTS/Picture20.jpg')` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#B3BD31' }}>Urban Development</h3>
                  <p className="text-gray-600 mb-4">Thoughtfully designed urban spaces that enhance community life.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link to="/projects">
                <motion.button
                  className="px-8 py-3 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
                  style={{ backgroundColor: '#B3BD31' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Projects
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>

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