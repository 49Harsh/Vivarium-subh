import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'architectural', name: 'Architectural' },
    { id: 'residential', name: 'Interior (Residential)' },
    { id: 'commercial', name: 'Interior (Commercial)' },
    { id: 'urban', name: 'Urban Projects' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Modern Residential Complex',
      category: 'architectural',
      image: '/hero-image/Picture1.jpg',
      description: 'Luxury residential complex with modern design elements.'
    },
    {
      id: 2,
      title: 'Contemporary Villa',
      category: 'architectural',
      image: '/hero-image/Picture4.jpg',
      description: 'Contemporary villa with minimalist architectural approach.'
    },
    {
      id: 3,
      title: 'Luxury Home Interior',
      category: 'residential',
      image: '/Interior_Project/Picture10.jpg',
      description: 'Modern, functional, and aesthetic interiors for luxury home.'
    },
    {
      id: 4,
      title: 'Apartment Renovation',
      category: 'residential',
      image: '/Interior_Project/Picture11.jpg',
      description: 'Complete renovation of apartment with modern interiors.'
    },
    {
      id: 5,
      title: 'Corporate Office',
      category: 'commercial',
      image: '/INTERIOR PROJECTS (COMMERCIAL)/Picture13.jpg',
      description: 'Innovative and efficient commercial office space.'
    },
    {
      id: 6,
      title: 'Retail Store Design',
      category: 'commercial',
      image: '/INTERIOR PROJECTS (COMMERCIAL)/Picture15.jpg',
      description: 'Modern retail store with unique shopping experience.'
    },
    {
      id: 7,
      title: 'Urban Housing Development',
      category: 'urban',
      image: '/PROJECTS- URBAN PROJECTS/Picture19.jpg',
      description: 'Urban housing development with sustainable features.'
    },
    {
      id: 8,
      title: 'City Park Renovation',
      category: 'urban',
      image: '/PROJECTS- URBAN PROJECTS/Picture21.jpg',
      description: 'Renovation of public park with modern amenities.'
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section className="max-w-6xl mx-auto mt-24 py-10 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#B3BD31' }}>Our Projects</h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                ? 'bg-[#B3BD31] text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#B3BD31' }}>{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 px-3 py-1 bg-gray-100 rounded-full">{categories.find(c => c.id === project.category).name}</span>
                <button className="text-[#B3BD31] font-medium hover:underline">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
