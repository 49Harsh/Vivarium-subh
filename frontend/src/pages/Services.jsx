import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  // Animated Section Component
  const AnimatedSection = ({ children, animation, className = "" }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
    });

    useEffect(() => {
      if (inView) {
        controls.start('animate');
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={animation}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  const services = [
    {
      id: 1,
      title: "Building Permits",
      subtitle: "Legal Compliance & Approvals",
      description: "We handle all aspects of building permit applications and processing, ensuring your project meets local regulations and standards.",
      features: ["Document Preparation", "Application Processing", "Compliance Check", "Follow-up Support"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: "📋"
    },
    {
      id: 2,
      title: "Architectural Design",
      subtitle: "Creative Building Solutions",
      description: "Professional architectural design services for residential, commercial, and institutional projects, focusing on functionality and aesthetics.",
      features: ["Concept Development", "Design Documentation", "Material Selection", "Construction Drawings"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: "�️"
    },
    {
      id: 3,
      title: "Interior Design",
      subtitle: "Space Planning & Aesthetics",
      description: "Comprehensive interior design services tailored to create functional and beautiful spaces that reflect your vision and requirements.",
      features: ["Space Planning", "Material Selection", "Furniture Layout", "Color Consultation"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: "�"
    },
    {
      id: 4,
      title: "Project Management",
      subtitle: "End-to-End Coordination",
      description: "Complete project oversight from planning to execution, ensuring timely delivery and quality standards throughout the construction process.",
      features: ["Timeline Management", "Cost Control", "Quality Assurance", "Contractor Coordination"],
      image: "https://www.freepik.com/free-photo/still-life-business-roles-with-various-mechanism-pieces_24749607.htm#fromView=keyword&page=1&position=3&uuid=89716628-ed08-45e2-bda0-b1261c708c3a&query=Project+Management",
      icon: "⚙️"
    },
    {
      id: 5,
      title: "NOC Approvals",
      subtitle: "Regulatory Compliance",
      description: "Expert assistance in obtaining various No Objection Certificates (NOCs) from relevant authorities for your construction projects.",
      features: ["Documentation", "Authority Liaison", "Compliance Check", "Timely Processing"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: "✅"
    }
  ];

  // Animation variants defined above

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <AnimatedSection animation={fadeInUp} className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span style={{ color: '#B3BD31' }}>Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive architectural and design solutions that transform spaces and create lasting impressions
          </p>
          <div className="mt-12">
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-[#B3BD31] text-white font-semibold rounded-full text-lg hover:bg-[#9CAD28] transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </Link>
          </div>
        </div>
      </AnimatedSection> */}

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* <AnimatedSection animation={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What We <span style={{ color: '#B3BD31' }}>Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive architectural and design services tailored to your unique needs
            </p>
          </AnimatedSection> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                animation={fadeInUp}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 text-4xl">{service.icon}</div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-sm opacity-90">{service.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-[#B3BD31] rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link to="/contact">
                        <button className="w-full py-3 bg-[#B3BD31] text-white font-semibold rounded-lg hover:bg-[#9CAD28] transition-all duration-300">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span style={{ color: '#B3BD31' }}>Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results on every project
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection
                key={index}
                animation={fadeInLeft}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-4xl font-bold text-[#B3BD31] mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our <span style={{ color: '#B3BD31' }}>Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                animation={fadeInUp}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-[#B3BD31] to-[#9CAD28] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection animation={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can bring your vision to life with our expert services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 bg-white text-[#B3BD31] font-semibold rounded-full text-lg hover:bg-gray-100 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-[#B3BD31] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Portfolio
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
