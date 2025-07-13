import React from 'react';

const Team = () => (
  <section className="max-w-6xl mx-auto mt-24 py-10 px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-6" style={{ color: '#B3BD31' }}>Our Team</h2>
      <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>
      <p className="max-w-2xl mx-auto text-gray-700">
        Meet the talented professionals behind Vivarium Design Studio. Our diverse team brings together expertise from different fields to create exceptional architectural solutions.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Ashish Sharma */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="h-80 overflow-hidden">
          <img 
            src="/Team/Ashish sharma/Picture22.jpg" 
            alt="Ashish Sharma" 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1" style={{ color: '#B3BD31' }}>Ashish Sharma</h3>
          <p className="text-gray-600 text-sm font-medium mb-3">Project Architect</p>
          <p className="text-gray-500 text-xs italic mb-4">Bachelor in Architecture (Mumbai University), Masters in Urban Agglomeration (FRAUS, Frankfurt, Germany)</p>
          <p className="text-gray-700">Specializes in leading teams to create luxury villas, residential complexes, institutional, and industrial spaces. Global experience in India and Germany.</p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-[#B3BD31]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#B3BD31]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Rashid Sikandar */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="h-80 overflow-hidden">
          <img 
            src="/Team/Rashid Sikandar/Picture23.jpg" 
            alt="Rashid Sikandar" 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1" style={{ color: '#B3BD31' }}>Rashid Sikandar</h3>
          <p className="text-gray-600 text-sm font-medium mb-3">Design Architect</p>
          <p className="text-gray-500 text-xs italic mb-4">Bachelor in Architecture (Mumbai University), MBA in Supply Chain (TUD, Dresden, Germany)</p>
          <p className="text-gray-700">Bridges design innovation and operational efficiency. Four years of experience in construction and architecture with expertise in modern design techniques.</p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-[#B3BD31]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#B3BD31]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Alok Gupta */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="h-80 overflow-hidden">
          <img 
            src="/Team/Alok Gupta/Picture24.png" 
            alt="Alok Gupta" 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1" style={{ color: '#B3BD31' }}>Alok Gupta</h3>
          <p className="text-gray-600 text-sm font-medium mb-3">Interior Architecture</p>
          <p className="text-gray-500 text-xs italic mb-4">Bachelor in Architecture (Mumbai University)</p>
          <p className="text-gray-700">Specializes in minimalism, functionality, and futurism for interior spaces. Creates elegant and practical designs that transform living and working environments.</p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-[#B3BD31]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#B3BD31]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Atul Kumar Yadav */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="h-80 overflow-hidden">
          {/* <img 
            src="/Client/Picture25.png" 
            alt="Atul Kumar Yadav" 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
          /> */}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1" style={{ color: '#B3BD31' }}>Atul Kumar Yadav</h3>
          <p className="text-gray-600 text-sm font-medium mb-3">Urban Planner</p>
          <p className="text-gray-500 text-xs italic mb-4">Bachelor in Architecture (Mumbai University), Masters in Urban Agglomeration (FRAUS, Frankfurt, Germany)</p>
          <p className="text-gray-700">Architectural Designer with experience in bungalows, residential complexes, and urban development. Expert in sustainable urban planning.</p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-[#B3BD31]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#B3BD31]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Mohammad Ehsan */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="h-80 overflow-hidden">
          {/* <img 
            src="/Client/Picture26.png" 
            alt="Mohammad Ehsan" 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
          /> */}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1" style={{ color: '#B3BD31' }}>Mohammad Ehsan</h3>
          <p className="text-gray-600 text-sm font-medium mb-3">Project Manager</p>
          <p className="text-gray-500 text-xs italic mb-4">Bachelor in Architecture (Mumbai University), MBA in Supply Chain (TUD, Dresden, Germany)</p>
          <p className="text-gray-700">Expert in site management, project planning, and client/vendor relationship management. Ensures projects are completed on time and within budget.</p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-[#B3BD31]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#B3BD31]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
