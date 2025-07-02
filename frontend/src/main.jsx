import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { setupScrollReveal, setupStaggeredAnimations } from './utils/ScrollReveal'

// Wrap the App with initialization code
const AppWithEffects = () => {
  useEffect(() => {
    // Initialize animations
    setupScrollReveal();
    setupStaggeredAnimations();
    
    // Add loaded class to html element after a short delay
    setTimeout(() => {
      document.documentElement.classList.add('loaded');
    }, 1500);
    
    // Force all content to be visible after 2.5 seconds
    setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(element => {
        element.classList.add('active');
      });
    }, 2500);
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWithEffects />
  </StrictMode>,
)
