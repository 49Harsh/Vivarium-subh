import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';
import WhyUs from './pages/WhyUs';
import Process from './pages/Process';
import NotFound from './pages/NotFound';
import Career from './pages/Career';
import ConsultingServicesPage from './components/landing/ConsultingServicesPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<ConsultingServicesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/architecture" element={<Projects />} />
          <Route path="/projects/interior" element={<Projects />} />
          <Route path="/projects/urban" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/process" element={<Process />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
