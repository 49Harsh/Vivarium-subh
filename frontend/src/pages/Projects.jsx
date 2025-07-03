import React from 'react';

const Projects = () => (
  <section className="max-w-4xl mx-auto mt-10 py-10">
    <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Projects</h2>
    <ul className="grid md:grid-cols-2 gap-8">
      <li className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Architectural Projects</h3>
        <p className="text-gray-700">Residential complexes, luxury villas, institutional and industrial spaces.</p>
      </li>
      <li className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Interior Projects (Residential)</h3>
        <p className="text-gray-700">Modern, functional, and aesthetic interiors for homes.</p>
      </li>
      <li className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Interior Projects (Commercial)</h3>
        <p className="text-gray-700">Innovative and efficient commercial spaces.</p>
      </li>
      <li className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Urban Projects</h3>
        <p className="text-gray-700">Urban development and master planning projects.</p>
      </li>
    </ul>
  </section>
);

export default Projects;
