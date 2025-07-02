// ScrollReveal.js - Animation utility for revealing elements on scroll

export function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  // Make elements visible initially on non-home pages
  const currentPath = window.location.pathname;
  const isHomePage = currentPath === '/' || currentPath === '';
  
  if (!isHomePage) {
    revealElements.forEach(element => {
      element.classList.add('active');
    });
  }
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  };
  
  // Initial check
  window.addEventListener('DOMContentLoaded', () => {
    // Immediate reveal for all elements on page load
    revealOnScroll();
    
    // Set a short timeout to make sure all elements are visible even if scroll event doesn't fire
    setTimeout(revealOnScroll, 300);
  });
  
  // Check on scroll
  window.addEventListener('scroll', revealOnScroll);
}

// Utility to add staggered animation delays to children
export function setupStaggeredAnimations() {
  const staggerContainers = document.querySelectorAll('.stagger-container');
  
  staggerContainers.forEach(container => {
    const children = container.querySelectorAll('.stagger-item');
    
    children.forEach((child, index) => {
      child.style.animationDelay = `${index * 100}ms`;
    });
  });
} 