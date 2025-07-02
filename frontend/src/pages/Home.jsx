import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Vivarium Design Studio</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Transforming spaces through innovative architectural design since 2021
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/projects" className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-md hover:bg-blue-50 transition-colors">
              Our Projects
            </Link>
            <Link to="/contact" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-900 transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">About Vivarium</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-10 text-center">
            Established in 2021, Vivarium Design Studio is one of the fastest growing architecture companies based in Mumbai. 
            We specialize in delivering functional design and support across Architectural, Engineering, Municipal Permits, and Interior.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
            <div className="bg-gray-50 rounded-xl p-8 flex-1 shadow-md transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                At Vivarium, our mission is to create pioneering, interdisciplinary design solutions that seamlessly merge
                the aspirational with the practicality. We are devoted to understanding each client's distinct needs and
                aspirations, translating them into innovative, comprehensive, and meaningful architectural outcomes.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 flex-1 shadow-md transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                Our vision is to redefine architecture by fostering an integrative approach that merges urbanism, landscape,
                history, social frameworks, and regulatory codes. We aspire to create designs where simplicity meets depth,
                maximizing impact through minimal forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">Core Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Building Permits</h3>
              <p className="text-gray-600">
                Expertise in MSRDC, NAINA, PMC, NMMC, CIDCO, PMRDA, and various other municipal authorities for seamless approval processes.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Architectural Design</h3>
              <p className="text-gray-600">
                Innovative, client-centric, and sustainable design solutions that transform spaces and enhance functionality.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Interior Design</h3>
              <p className="text-gray-600">
                Personalized, functional, and aesthetic interior spaces that reflect your vision and enhance your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Our Approach</h2>
              <p className="text-lg text-gray-700 mb-8">
                We adopt a client-centric approach, tailoring our services to meet the specific needs of each project. 
                Our team provides high-quality solution with a focus on proactive advice, problem-solving and adherence 
                to the highest standards of ethics and integrity.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Our Commitment</h2>
              <p className="text-lg text-gray-700">
                We are dedicated to delivering reliable, efficient and innovative solutions, striving to exceed client 
                expectations through personalized service and timely completion of projects.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Our Process</h2>
              <div className="space-y-4">
                {[
                  { num: 1, text: 'Initial Consultation' },
                  { num: 2, text: 'Service Agreement' },
                  { num: 3, text: 'Strategy Planning' },
                  { num: 4, text: 'Documents Planning' },
                  { num: 5, text: 'Designing' },
                  { num: 6, text: 'Projects Support' },
                  { num: 7, text: 'Project Handover' },
                ].map((step) => (
                  <div key={step.num} className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-900 text-white rounded-full font-bold">
                      {step.num}
                    </div>
                    <div className="ml-4 text-lg font-medium text-gray-800">{step.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Let's create something extraordinary together. Contact us today to discuss your project needs.
          </p>
          <Link to="/contact" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-md hover:bg-blue-100 transition-colors inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
