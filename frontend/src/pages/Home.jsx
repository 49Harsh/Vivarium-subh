import React from 'react';

const Home = () => (
  <section className="text-center py-16">
    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Vivarium Design Studio</h1>
    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
      Established in 2021, Vivarium Design Studio is one of the fastest growing architecture companies based in Mumbai. We specialize in delivering functional design and support across Architectural, Engineering, Municipal Permits, and Interior.
    </p>
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      <div className="bg-white shadow-lg rounded-lg p-6 w-72">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Building Permits</h2>
        <p className="text-gray-600">Expertise in MSRDC, NAINA, PMC, NMMC, CIDCO, PMRDA, and more.</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-72">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Architectural Design</h2>
        <p className="text-gray-600">Innovative, client-centric, and sustainable design solutions.</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-72">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Interior Design</h2>
        <p className="text-gray-600">Personalized, functional, and aesthetic interior spaces.</p>
      </div>
    </div>
  </section>
);

export default Home;
