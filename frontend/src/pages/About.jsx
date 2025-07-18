import React from 'react';
import { Building2, Target, Eye, Users, Shield, Award, Clock, Lightbulb } from 'lucide-react';

const About = () => (
  <section className="max-w-6xl mx-auto mt-24 py-10 px-4">
    {/* About Us Section */}
    <div className="mb-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B3BD31]/10 rounded-full mb-6">
          <Building2 className="w-8 h-8 text-[#B3BD31]" />
        </div>
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#B3BD31' }}>About Us</h2>
        <div className="w-20 h-1 bg-[#B3BD31] mx-auto mb-8"></div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Vivarium Design Studio, established in 2021, is one of the fastest growing architecture companies based in Mumbai. We specialize in delivering functional design and support across Architectural, Engineering, Municipal Permits, and Interior. Our expertise encompasses Building Permits of MSRDC, NAINA, PMC, NMMC, CIDCO, PMRDA, and more, including NOCs and Approvals from responsible Authorities.
        </p>
      </div>
    </div>
    
    {/* Mission & Vision Section */}
    <div className="grid md:grid-cols-2 gap-8 mb-20">
      {/* Mission */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-[#B3BD31]/10 rounded-full flex items-center justify-center mr-4">
            <Target className="w-6 h-6 text-[#B3BD31]" />
          </div>
          <h3 className="text-2xl font-bold" style={{ color: '#B3BD31' }}>Our Mission</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          At Vivarium, our mission is to create pioneering, interdisciplinary design solutions that seamlessly merge the aspirational with the practicality. We are devoted to understanding each client's distinct needs and aspirations, translating them into innovative, comprehensive, and meaningful architectural outcomes.
        </p>
      </div>
      
      {/* Vision */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-[#B3BD31]/10 rounded-full flex items-center justify-center mr-4">
            <Eye className="w-6 h-6 text-[#B3BD31]" />
          </div>
          <h3 className="text-2xl font-bold" style={{ color: '#B3BD31' }}>Our Vision</h3>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our vision is to redefine architecture by fostering an integrative approach that merges urbanism, landscape, history, social frameworks, and regulatory codes. We aspire to create designs where simplicity meets depth, maximizing impact through minimal forms.
        </p>
        <p className="text-gray-700 leading-relaxed">
          By incorporating Indigenous perspectives and re-imagining traditional design principles, we seek to inspire a shift in conventional architectural thought and cultivate spaces that resonate with cultural authenticity.
        </p>
      </div>
    </div>
    
    {/* Why Us Section */}
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#B3BD31' }}>Why Choose Us?</h2>
        <div className="w-20 h-1 bg-[#B3BD31] mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group">
          <div className="w-12 h-12 bg-[#B3BD31]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#B3BD31]/20 transition-colors">
            <Users className="w-6 h-6 text-[#B3BD31]" />
          </div>
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#B3BD31' }}>Local Expertise</h3>
          <p className="text-gray-700 text-sm leading-relaxed">Robust network and deep understanding of local building regulations and business practices in major Indian cities, fluent in Hindi, Marathi and English.</p>
        </div>
        
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group">
          <div className="w-12 h-12 bg-[#B3BD31]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#B3BD31]/20 transition-colors">
            <Lightbulb className="w-6 h-6 text-[#B3BD31]" />
          </div>
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#B3BD31' }}>Tailored Solutions</h3>
          <p className="text-gray-700 text-sm leading-relaxed">Specialised support across Architecture, Interior and Engineering with Industry specific strategies.</p>
        </div>
        
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group">
          <div className="w-12 h-12 bg-[#B3BD31]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#B3BD31]/20 transition-colors">
            <Shield className="w-6 h-6 text-[#B3BD31]" />
          </div>
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#B3BD31' }}>Strong Ethics</h3>
          <p className="text-gray-700 text-sm leading-relaxed">Commitment to honesty, confidentiality and adherence to industry standards.</p>
        </div>
        
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group">
          <div className="w-12 h-12 bg-[#B3BD31]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#B3BD31]/20 transition-colors">
            <Users className="w-6 h-6 text-[#B3BD31]" />
          </div>
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#B3BD31' }}>Client Support</h3>
          <p className="text-gray-700 text-sm leading-relaxed">Dedicated Architects providing proactive, individualized support.</p>
        </div>
        
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group">
          <div className="w-12 h-12 bg-[#B3BD31]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#B3BD31]/20 transition-colors">
            <Award className="w-6 h-6 text-[#B3BD31]" />
          </div>
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#B3BD31' }}>Proven Expertise</h3>
          <p className="text-gray-700 text-sm leading-relaxed">Skilled professionals with a successful track record in handling complex projects and permissions.</p>
        </div>
        
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group">
          <div className="w-12 h-12 bg-[#B3BD31]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#B3BD31]/20 transition-colors">
            <Clock className="w-6 h-6 text-[#B3BD31]" />
          </div>
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#B3BD31' }}>High End Solutions</h3>
          <p className="text-gray-700 text-sm leading-relaxed">Timely, high-quality service delivery with client specific solutions and transparent communication.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;