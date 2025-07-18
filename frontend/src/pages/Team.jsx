import React from 'react';

const Team = () => (
  <section className="max-w-7xl mx-auto mt-24 py-10 px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4" style={{ color: '#B3BD31' }}>Our Team</h2>
      <div className="w-20 h-1 bg-[#B3BD31] mx-auto mb-6"></div>
      <p className="max-w-2xl mx-auto text-gray-600 text-lg">
        Meet the talented professionals behind Vivarium Design Studio
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Ashish Sharma */}
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="/Team/Ashish sharma/Picture22.jpg" 
            alt="Ashish Sharma" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold mb-1" style={{ color: '#B3BD31' }}>Ashish Sharma</h3>
          <p className="text-gray-600 text-sm font-medium mb-2">Project Architect</p>
          <p className="text-gray-500 text-xs mb-3 leading-relaxed">B.Arch (Mumbai), M.Urban Agglomeration (Germany)</p>
          <p className="text-gray-700 text-sm leading-relaxed">Luxury villas, residential complexes, institutional spaces. Global experience in India & Germany.</p>
        </div>
      </div>
      
      {/* Rashid Sikandar */}
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="/Team/Rashid Sikandar/Picture23.jpg" 
            alt="Rashid Sikandar" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold mb-1" style={{ color: '#B3BD31' }}>Rashid Sikandar</h3>
          <p className="text-gray-600 text-sm font-medium mb-2">Design Architect</p>
          <p className="text-gray-500 text-xs mb-3 leading-relaxed">B.Arch (Mumbai), MBA Supply Chain (Germany)</p>
          <p className="text-gray-700 text-sm leading-relaxed">Bridges design innovation with operational efficiency. 4+ years in construction & architecture.</p>
        </div>
      </div>
      
      {/* Alok Gupta */}
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="/Team/Alok Gupta/Picture24.png" 
            alt="Alok Gupta" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold mb-1" style={{ color: '#B3BD31' }}>Alok Gupta</h3>
          <p className="text-gray-600 text-sm font-medium mb-2">Interior Architecture</p>
          <p className="text-gray-500 text-xs mb-3 leading-relaxed">Bachelor in Architecture (Mumbai University)</p>
          <p className="text-gray-700 text-sm leading-relaxed">Specializes in minimalism, functionality & futurism for elegant interior spaces.</p>
        </div>
      </div>
      
      {/* Atul Kumar Yadav */}
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="/Client/Picture25.png" 
            alt="Atul Kumar Yadav" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold mb-1" style={{ color: '#B3BD31' }}>Atul Kumar Yadav</h3>
          <p className="text-gray-600 text-sm font-medium mb-2">Urban Planner</p>
          <p className="text-gray-500 text-xs mb-3 leading-relaxed">B.Arch (Mumbai), M.Urban Agglomeration (Germany)</p>
          <p className="text-gray-700 text-sm leading-relaxed">Expert in bungalows, residential complexes & sustainable urban development.</p>
        </div>
      </div>
      
      {/* Mohammad Ehsan */}
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="/Client/Picture26.png" 
            alt="Mohammad Ehsan" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold mb-1" style={{ color: '#B3BD31' }}>Mohammad Ehsan</h3>
          <p className="text-gray-600 text-sm font-medium mb-2">Project Manager</p>
          <p className="text-gray-500 text-xs mb-3 leading-relaxed">B.Arch (Mumbai), MBA Supply Chain (Germany)</p>
          <p className="text-gray-700 text-sm leading-relaxed">Expert in site management, project planning & client relations. On-time delivery specialist.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Team;