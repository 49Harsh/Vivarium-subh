import React from 'react';

const About = () => (
  <section className="max-w-6xl mx-auto mt-24 py-10 px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#B3BD31' }}>About Us</h2>
        <p className="text-gray-700 mb-4">Vivarium Design Studio, established in 2021, is one of the fastest growing architecture companies based in Mumbai. We specialize in delivering functional design and support across Architectural, Engineering, Municipal Permits, and Interior. Our expertise encompasses Building Permits of MSRDC, NAINA, PMC, NMMC, CIDCO, PMRDA, and more, including NOCs and Approvals from responsible Authorities.</p>
        <div className="w-24 h-1 bg-gray-300 my-6"></div>
        <h3 className="text-2xl font-semibold mb-3" style={{ color: '#B3BD31' }}>Our Mission</h3>
        <p className="text-gray-700 mb-6">At Vivarium, our mission is to create pioneering, interdisciplinary design solutions that seamlessly merge the aspirational with the practicality. We are devoted to understanding each client's distinct needs and aspirations, translating them into innovative, comprehensive, and meaningful architectural outcomes.</p>
      </div>
      <div className="rounded-lg overflow-hidden shadow-xl">
        <img src="/PROJECTS- URBAN PROJECTS/Picture19.jpg" alt="Urban Project" className="w-full h-auto object-cover" />
      </div>
    </div>
    
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
        <img src="/INTERIOR PROJECTS (COMMERCIAL)/Picture17.jpg" alt="Commercial Interior" className="w-full h-auto object-cover" />
      </div>
      <div className="order-1 md:order-2">
        <h3 className="text-2xl font-semibold mb-3" style={{ color: '#B3BD31' }}>Our Vision</h3>
        <p className="text-gray-700 mb-6">Our vision is to redefine architecture by fostering an integrative approach that merges urbanism, landscape, history, social frameworks, and regulatory codes. We aspire to create designs where simplicity meets depth, maximizing impact through minimal forms.</p>
        <p className="text-gray-700 mb-4">By incorporating Indigenous perspectives and re-imagining traditional design principles, we seek to inspire a shift in conventional architectural thought and cultivate spaces that resonate with cultural authenticity and the inter-connectedness of all life forms.</p>
      </div>
    </div>
  </section>
);

export default About;
