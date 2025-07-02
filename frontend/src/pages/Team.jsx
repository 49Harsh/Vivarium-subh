import React from 'react';

const Team = () => (
  <section className="max-w-5xl mx-auto py-10">
    <h2 className="text-3xl font-bold text-blue-900 mb-6">Organization Structure</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Ashish Sharma</h3>
        <p className="text-gray-700 text-sm mb-1">Project Architect</p>
        <p className="text-gray-600 text-xs mb-2">Bachelor in Architecture (Mumbai University), Masters in Urban Agglomeration (FRAUS, Frankfurt, Germany)</p>
        <p className="text-gray-700">Specializes in leading teams to create luxury villas, residential complexes, institutional, and industrial spaces. Global experience in India and Germany.</p>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Atul Kumar Yadav</h3>
        <p className="text-gray-700 text-sm mb-1">Urban Planner</p>
        <p className="text-gray-600 text-xs mb-2">Bachelor in Architecture (Mumbai University), Masters in Urban Agglomeration (FRAUS, Frankfurt, Germany)</p>
        <p className="text-gray-700">Architectural Designer with experience in bungalows, residential complexes, and urban development.</p>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Rashid Sikandar</h3>
        <p className="text-gray-700 text-sm mb-1">Design Architect</p>
        <p className="text-gray-600 text-xs mb-2">Bachelor in Architecture (Mumbai University), MBA in Supply Chain (TUD, Dresden, Germany)</p>
        <p className="text-gray-700">Bridges design innovation and operational efficiency. Four years of experience in construction and architecture.</p>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Mohammad Ehsan</h3>
        <p className="text-gray-700 text-sm mb-1">Project Manager</p>
        <p className="text-gray-600 text-xs mb-2">Bachelor in Architecture (Mumbai University), MBA in Supply Chain (TUD, Dresden, Germany)</p>
        <p className="text-gray-700">Expert in site management, project planning, and client/vendor relationship management.</p>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Alok Gupta</h3>
        <p className="text-gray-700 text-sm mb-1">Interior Architecture</p>
        <p className="text-gray-600 text-xs mb-2">Bachelor in Architecture (Mumbai University)</p>
        <p className="text-gray-700">Specializes in minimalism, functionality, and futurism for interior spaces.</p>
      </div>
    </div>
  </section>
);

export default Team;
