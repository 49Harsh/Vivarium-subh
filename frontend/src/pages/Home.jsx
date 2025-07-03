import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Ref for the hero section
  const heroRef = useRef(null);

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")',
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 pt-24 pb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight animate-fade-in">
            <span className="block font-playfair">Vivarium Design Studio</span>
            <span className="block text-2xl md:text-3xl mt-4 font-light animate-slide-up">Innovative Architectural Design</span>
          </h1>
          
          <div className="w-24 h-1 bg-white mt-4 mb-8 animate-slide-up delay-200"></div>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-light animate-slide-up delay-300">
            Transforming spaces through innovative architectural solutions since 2021
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center animate-slide-up delay-400">
            <Link to="/projects" className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-md hover:bg-blue-50 hover-lift">
              View Our Projects
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-900 transition-colors">
              Get In Touch
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-1.5 h-3 bg-white rounded-full animate-slide-up"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12 reveal">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6 text-center font-playfair">About Vivarium</h2>
            <div className="section-divider mb-10"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
              Established in 2021, Vivarium Design Studio is one of the fastest growing architecture companies based in Mumbai. 
              We specialize in delivering functional design and support across Architectural, Engineering, Municipal Permits, and Interior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            <div className="bg-gray-50 rounded-xl p-10 shadow-soft hover-lift reveal">
              <h3 className="text-2xl font-bold text-gradient mb-6">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                At Vivarium, our mission is to create pioneering, interdisciplinary design solutions that seamlessly merge
                the aspirational with the practicality. We are devoted to understanding each client's distinct needs and
                aspirations, translating them into innovative, comprehensive, and meaningful architectural outcomes.
              </p>
              <div className="mt-8 w-16 h-1 bg-blue-500 opacity-75"></div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-10 shadow-soft hover-lift reveal">
              <h3 className="text-2xl font-bold text-gradient mb-6">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to redefine architecture by fostering an integrative approach that merges urbanism, landscape,
                history, social frameworks, and regulatory codes. We aspire to create designs where simplicity meets depth,
                maximizing impact through minimal forms.
              </p>
              <div className="mt-8 w-16 h-1 bg-blue-500 opacity-75"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-24 px-4 gradient-primary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center font-playfair">Core Areas of Expertise</h2>
            <div className="w-24 h-1 bg-white mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 stagger-container">
            <div className="glass rounded-xl p-10 hover-lift stagger-item reveal">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-playfair">Building Permits</h3>
              <p className="text-gray-100 leading-relaxed">
                Expertise in MSRDC, NAINA, PMC, NMMC, CIDCO, PMRDA, and various other municipal authorities for seamless approval processes.
              </p>
              <Link to="/services" className="inline-block mt-8 text-white font-medium border-b border-white pb-1 hover:border-transparent transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="glass rounded-xl p-10 hover-lift stagger-item reveal">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-playfair">Architectural Design</h3>
              <p className="text-gray-100 leading-relaxed">
                Innovative, client-centric, and sustainable design solutions that transform spaces and enhance functionality.
              </p>
              <Link to="/services" className="inline-block mt-8 text-white font-medium border-b border-white pb-1 hover:border-transparent transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="glass rounded-xl p-10 hover-lift stagger-item reveal">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-playfair">Interior Design</h3>
              <p className="text-gray-100 leading-relaxed">
                Personalized, functional, and aesthetic interior spaces that reflect your vision and enhance your lifestyle.
              </p>
              <Link to="/services" className="inline-block mt-8 text-white font-medium border-b border-white pb-1 hover:border-transparent transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section with Stats */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6 font-playfair">Our Approach</h2>
              <div className="w-16 h-1 bg-blue-500 mb-8"></div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We adopt a client-centric approach, tailoring our services to meet the specific needs of each project. 
                Our team provides high-quality solutions with a focus on proactive advice, problem-solving and adherence 
                to the highest standards of ethics and integrity.
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mt-12 mb-6 font-playfair">Our Commitment</h2>
              <div className="w-16 h-1 bg-blue-500 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are dedicated to delivering reliable, efficient and innovative solutions, striving to exceed client 
                expectations through personalized service and timely completion of projects.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 p-6 rounded-xl shadow-soft text-center">
                  <span className="text-4xl font-bold text-blue-900 block">100+</span>
                  <span className="text-gray-600">Projects Completed</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-soft text-center">
                  <span className="text-4xl font-bold text-blue-900 block">95%</span>
                  <span className="text-gray-600">Client Satisfaction</span>
                </div>
              </div>
            </div>
            
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6 font-playfair">Our Process</h2>
              <div className="w-16 h-1 bg-blue-500 mb-12"></div>
              
              <div className="space-y-8">
                {[
                  { num: 1, text: 'Initial Consultation', desc: 'Understanding your vision and requirements' },
                  { num: 2, text: 'Service Agreement', desc: 'Defining the scope and deliverables' },
                  { num: 3, text: 'Strategy Planning', desc: 'Developing a roadmap for success' },
                  { num: 4, text: 'Documents Planning', desc: 'Preparing necessary documentation' },
                  { num: 5, text: 'Designing', desc: 'Creating innovative architectural solutions' },
                  { num: 6, text: 'Project Support', desc: 'Providing guidance throughout the process' },
                  { num: 7, text: 'Project Handover', desc: 'Delivering the finished product' },
                ].map((step) => (
                  <div key={step.num} className="flex items-start reveal">
                    <div className="w-14 h-14 flex items-center justify-center gradient-primary text-white rounded-full font-bold shrink-0">
                      {step.num}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-blue-900">{step.text}</h3>
                      <p className="text-gray-600 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6 text-center font-playfair">What Our Clients Say</h2>
            <div className="section-divider mb-10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
            <div className="bg-white p-8 rounded-xl shadow-soft hover-lift stagger-item reveal">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-800 mr-4">
                  A
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Alison Parker</h4>
                  <p className="text-gray-600">Residential Client</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Vivarium Design Studio transformed our home beyond our expectations. Their attention to detail and understanding of our needs resulted in a space that perfectly balances functionality and aesthetics."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-soft hover-lift stagger-item reveal">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-800 mr-4">
                  R
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Robert Johnson</h4>
                  <p className="text-gray-600">Commercial Client</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Working with the team at Vivarium was seamless from start to finish. Their expertise in permits and approvals saved us valuable time, and their design concepts elevated our commercial space."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-cover bg-center text-white relative">
        <div className="absolute inset-0 gradient-primary opacity-95"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-playfair reveal">Ready to Transform Your Space?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 reveal">
            Let's create something extraordinary together. Contact us today to discuss your project needs and begin your architectural journey.
          </p>
          <Link to="/contact" className="px-10 py-4 bg-white text-blue-900 font-bold rounded-md hover:bg-blue-50 transition-colors inline-block shadow-soft hover-lift reveal">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
