import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            Krauschaline
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#services" className="text-gray-600 hover:text-gray-800">Services</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Advice Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection animation={fadeInLeft} id="advice">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Advice</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Everything begins with a personal consultation. Thanks to our many years of experience, 
                we understand the individual wishes and needs of our clients. This allows us to provide you 
                with a reliable assessment of the property and its building regulations in a timely manner.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Whether it's a building permit review, preliminary building permit, area assessment, or cost 
                estimate, we provide you with a competent basis. We are happy to take the time to create 
                a permit-compliant foundation for your construction project.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation={fadeInRight}>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="h-64 flex items-center justify-center bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbnN1bHRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80')`,
                  }}
                >
                  <div className="text-center bg-white bg-opacity-80 p-4 rounded-lg">
                    <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">Professional Consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Evaluation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection animation={fadeInLeft} className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="h-64 flex items-center justify-center bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1607545277213-54d51511f9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydHklMjBldmFsdWF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80')`,
                  }}
                >
                  <div className="text-center bg-white bg-opacity-80 p-4 rounded-lg">
                    <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">Property Evaluation</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation={fadeInRight} className="order-1 lg:order-2" id="evaluation">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19v2h-1.5v14.5c0 .83-.67 1.5-1.5 1.5H8c-.83 0-1.5-.67-1.5-1.5V4H5V2h3.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5H19.5z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Evaluation</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Whether it's a property purchase, property sale, or divorce or inheritance law issues, an 
                objective and independent valuation is always an important prerequisite for all further 
                considerations.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                As experts in the valuation of developed and undeveloped land, we have been examining 
                properties and land of all complexity for over 30 years. Thanks to our extensive expertise in 
                all areas of the construction and real estate industry, you benefit from a property valuation 
                tailored to your individual needs and based on legal regulations.
              </p>
              
              <div className="space-y-2">
                <motion.a 
                  href="#munich" 
                  className="flex items-center text-gray-700 hover:text-gray-900"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span>Property valuation for Munich</span>
                  <svg className="w-4 h-4 ml-2" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="#starnberg" 
                  className="flex items-center text-gray-700 hover:text-gray-900"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span>Property valuation for Starnberg</span>
                  <svg className="w-4 h-4 ml-2" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Development Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection animation={fadeInLeft} id="development">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 9V7h-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6v-4zm6-6h4v3h-4V7zM6 7h5v5H6V7zm6 4h4v6h-4v-6z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Development</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Whether new construction, renovation, or an extension, the property dictates the development options. 
                We're here to help you utilize every inch of it safely and effectively.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                With many years of experience on the building, planning, and development committees and as experts 
                in the valuation of developed and undeveloped properties, we are the experts for your project. Trust us 
                and our references when it comes to optimizing your property.
              </p>
              
              <div className="mt-4">
                <motion.a 
                  href="#development-more" 
                  className="flex items-center text-gray-700 hover:text-gray-900"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span>Learn more about development</span>
                  <svg className="w-4 h-4 ml-2" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation={fadeInRight}>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="h-64 flex items-center justify-center bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')`,
                  }}
                >
                  <div className="text-center bg-white bg-opacity-80 p-4 rounded-lg">
                    <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4H8V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">Property Development</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Planning Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection animation={fadeInLeft} className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="h-64 flex items-center justify-center bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3QlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80')`,
                  }}
                >
                  <div className="text-center bg-white bg-opacity-80 p-4 rounded-lg">
                    <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">Project Planning</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation={fadeInRight} className="order-1 lg:order-2" id="planning">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2v-2.5l4.4 4.4c.6.6 1.6.2 1.6-.7V3.8c0-.9-1-.8-1.6-.7z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Planning</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Planning and implementing your project is our daily work. We have been successfully operating in the real 
                estate sector for 30 years, designing, executing, and evaluating architectural structures, and we can draw 
                on extensive experience.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                From consultation and development to the construction planning phase and completion, we always provide our 
                project participants and clients with competent and reliable support, down to the smallest detail, for all 
                their requests and questions.
              </p>
              
              <div className="mt-4">
                <motion.a 
                  href="#planning-more" 
                  className="flex items-center text-gray-700 hover:text-gray-900"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span>Learn more about planning</span>
                  <svg className="w-4 h-4 ml-2" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Depiction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection animation={fadeInLeft} id="depiction">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Depiction</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Whether in the development and planning phase or for sales exposés, the representation of buildings, rooms, 
                and atmospheres is an important decision-making aid for developers, buyers, and prospective buyers.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                In our office, we work with state-of-the-art software to present you with photorealistic buildings and interior 
                concepts. This gives plans and sketches substance. We also use 3D modeling to give you a realistic insight into 
                the construction project. This proves helpful for further solution approaches.
              </p>
              
              <div className="mt-4">
                <motion.a 
                  href="#depiction-more" 
                  className="flex items-center text-gray-700 hover:text-gray-900"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span>See our visualization examples</span>
                  <svg className="w-4 h-4 ml-2" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation={fadeInRight}>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="h-64 flex items-center justify-center bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjB2aXN1YWxpemF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80')`,
                  }}
                >
                  <div className="text-center bg-white bg-opacity-80 p-4 rounded-lg">
                    <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">3D Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Realization Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection animation={fadeInLeft} className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="h-64 flex items-center justify-center bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1472145904681-94702fa6b02e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbGl6YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80')`,
                  }}
                >
                  <div className="text-center bg-white bg-opacity-80 p-4 rounded-lg">
                    <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.4 3.1L15 7.5V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2v-2.5l4.4 4.4c.6.6 1.6.2 1.6-.7V3.8c0-.9-1-.8-1.6-.7z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">Project Realization</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation={fadeInRight} className="order-1 lg:order-2" id="realization">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                  <svg className="w-6 h-6" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Realization</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                We work with professional partners from the construction industry to realize your construction project. 
                Take advantage of our expertise and place your project in experienced hands. Whether it's tendering and 
                awarding contracts, construction supervision, subdivision plans, or the entire project, together with our 
                reliable partners, we are able to accompany your construction project through to completion.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                With us, you benefit from high construction quality and on-time cost compliance. Upon request, you can 
                also rely on local partners from our network for marketing purposes.
              </p>
              
              <div className="mt-4">
                <motion.a 
                  href="#realization-more" 
                  className="flex items-center text-gray-700 hover:text-gray-900"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span>Learn about our construction process</span>
                  <svg className="w-4 h-4 ml-2" style={{ color: '#B3BD31' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </motion.a>
              </div>
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