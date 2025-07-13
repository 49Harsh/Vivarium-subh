import React from 'react';

const Services = () => (
  <section className="max-w-6xl mx-auto mt-24 py-10 px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-6" style={{ color: '#B3BD31' }}>Core Area of Expertise</h2>
      <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src="/hero-image/Picture3.jpg" 
            alt="Building Permits" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#B3BD31' }}>Building Permits</h3>
          <p className="text-gray-700">Development Permission (CC / OC), Project Feasibility and Reporting, Master Planning, Design Consultation and Scrutiny, Documents Compliance, Design Approvals, NOCs Approvals (Fire, MPCB, Road, Utilities, Irrigation), Conversion of Land Usage.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src="/hero-image/Picture4.jpg" 
            alt="Architectural Design" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#B3BD31' }}>Architectural Design</h3>
          <p className="text-gray-700">Innovative, sustainable, and client-focused architectural solutions for residential, commercial, and institutional projects. We create designs that are both aesthetically pleasing and functionally efficient.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src="/Interior_Project/Picture11.jpg" 
            alt="Interior Design" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#B3BD31' }}>Interior Design</h3>
          <p className="text-gray-700">Personalized, functional, and aesthetic interior spaces for homes and businesses. Our interior designs focus on creating spaces that reflect the client's personality and requirements.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src="/INTERIOR PROJECTS (COMMERCIAL)/Picture18.jpg" 
            alt="Project Support" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#B3BD31' }}>Project Support</h3>
          <p className="text-gray-700">End-to-end support from initial consultation to project handover, including strategy planning, documentation, and compliance. We ensure smooth execution of projects with minimal hassles.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src="/PROJECTS- URBAN PROJECTS/Picture20.jpg" 
            alt="Urban Planning" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#B3BD31' }}>Urban Planning</h3>
          <p className="text-gray-700">Comprehensive urban development solutions that consider environmental impact, community needs, and sustainable growth. We help create harmonious urban spaces for future generations.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src="/hero-image/Picture7.jpg" 
            alt="Consultation Services" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#B3BD31' }}>Consultation Services</h3>
          <p className="text-gray-700">Expert advice on architectural and design-related matters. Our consultation services provide valuable insights and solutions for clients at any stage of their project.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
