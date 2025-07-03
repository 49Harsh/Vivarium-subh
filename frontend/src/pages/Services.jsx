import React from 'react';

const Services = () => (
  <section className="max-w-4xl mx-auto mt-10 py-10">
    <h2 className="text-3xl font-bold text-blue-900 mb-6">Core Area of Expertise</h2>
    <ul className="grid md:grid-cols-2 gap-8">
      <li className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Building Permits</h3>
        <p className="text-gray-700">Development Permission (CC / OC), Project Feasibility and Reporting, Master Planning, Design Consultation and Scrutiny, Documents Compliance, Design Approvals, NOCs Approvals (Fire, MPCB, Road, Utilities, Irrigation), Conversion of Land Usage.</p>
      </li>
      <li className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Architectural Design</h3>
        <p className="text-gray-700">Innovative, sustainable, and client-focused architectural solutions for residential, commercial, and institutional projects.</p>
      </li>
      <li className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Interior Design</h3>
        <p className="text-gray-700">Personalized, functional, and aesthetic interior spaces for homes and businesses.</p>
      </li>
      <li className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Project Support</h3>
        <p className="text-gray-700">End-to-end support from initial consultation to project handover, including strategy planning, documentation, and compliance.</p>
      </li>
    </ul>
  </section>
);

export default Services;
