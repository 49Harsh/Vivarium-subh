import React from 'react';

const Career = () => (
  <section className="max-w-6xl mx-auto mt-24 py-8 px-4">
    {/* <h1 className="text-4xl font-bold text-gray-800 mb-8">Join Our Team</h1>
    
    <div className="mb-10">
      <p className="text-lg text-gray-700 mb-6">
        At Vivarium Design Studio, we're always looking for talented individuals who are passionate about design and architecture. 
        Join our creative team and be part of projects that transform spaces and lives.
      </p>
      
      <div className="bg-[#B3BD31]/10 border-l-4 border-[#B3BD31] p-4 my-6">
        <p className="font-medium">
          We value innovation, sustainability, and excellence in everything we do.
        </p>
      </div>
    </div> */}
    
    {/* <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#B3BD31] mb-6">Current Openings</h2>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#B3BD31] hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Senior Architect</h3>
          <p className="text-gray-600 mb-4">Full-time • Mumbai</p>
          <p className="mb-4">We're looking for an experienced architect with 5+ years of experience to lead design projects and mentor junior team members.</p>
          <button className="bg-[#B3BD31] text-white py-2 px-6 rounded hover:bg-[#9da728] transition-colors">Apply Now</button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#B3BD31] hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Interior Designer</h3>
          <p className="text-gray-600 mb-4">Full-time • Mumbai</p>
          <p className="mb-4">Join our interior design team to create functional, aesthetic spaces for residential and commercial projects.</p>
          <button className="bg-[#B3BD31] text-white py-2 px-6 rounded hover:bg-[#9da728] transition-colors">Apply Now</button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#B3BD31] hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">CAD Technician</h3>
          <p className="text-gray-600 mb-4">Full-time • Mumbai</p>
          <p className="mb-4">Looking for detail-oriented CAD professionals with experience in architectural drawing and 3D modeling.</p>
          <button className="bg-[#B3BD31] text-white py-2 px-6 rounded hover:bg-[#9da728] transition-colors">Apply Now</button>
        </div>
      </div>
    </div> */}
    
    <div className="bg-gray-50 rounded-lg p-8">
      {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">Don't see a suitable position?</h2>
      <p className="mb-6">We're always on the lookout for exceptional talent. Send us your resume and portfolio, and we'll keep you in mind for future opportunities.</p>
       */}
      <div className="flex flex-col md:flex-row gap-4">
        <input 
          type="email" 
          placeholder="Your email" 
          className="px-4 py-3 border rounded flex-1 focus:outline-none focus:ring-2 focus:ring-[#B3BD31]"
        />
        <button className="bg-[#B3BD31] text-white py-3 px-6 rounded hover:bg-[#9da728] transition-colors">
          Submit Application
        </button>
      </div>
    </div>
  </section>
);

export default Career; 