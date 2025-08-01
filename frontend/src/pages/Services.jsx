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
      icon: "🏛️"
    },
    {
      id: 3,
      title: "Interior Design",
      subtitle: "Space Planning & Aesthetics",
      description: "Comprehensive interior design services tailored to create functional and beautiful spaces that reflect your vision and requirements.",
      features: ["Space Planning", "Material Selection", "Furniture Layout", "Color Consultation"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: "🛋️"
    },
    {
      id: 4,
      title: "Project Management",
      subtitle: "End-to-End Coordination",
      description: "Complete project oversight from planning to execution, ensuring timely delivery and quality standards throughout the construction process.",
      features: ["Timeline Management", "Cost Control", "Quality Assurance", "Contractor Coordination"],
      image: "https://plus.unsplash.com/premium_photo-1725400817468-ddb0135d865d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
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

    </div>
  );
};

export default Services;
