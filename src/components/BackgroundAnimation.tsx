
import React, { useEffect } from 'react';

const BackgroundAnimation = () => {
  useEffect(() => {
    // Create animated elements on mount
    const container = document.createElement('div');
    container.className = 'fixed inset-0 overflow-hidden pointer-events-none z-0';
    document.body.appendChild(container);
    
    // Create animated shapes
    for (let i = 0; i < 30; i++) {
      const shape = document.createElement('div');
      
      // Randomize shape properties
      const size = Math.random() * 100 + 50;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const duration = Math.random() * 100 + 50;
      const delay = Math.random() * 5;
      const opacity = Math.random() * 0.05 + 0.02;
      
      // Apply styles to shape
      shape.className = 'absolute rounded-full bg-primary';
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.left = `${posX}%`;
      shape.style.top = `${posY}%`;
      shape.style.opacity = `${opacity}`;
      shape.style.animation = `float ${duration}s ease-in-out infinite`;
      shape.style.animationDelay = `${delay}s`;
      shape.style.filter = 'blur(80px)';
      
      container.appendChild(shape);
    }
    
    // Clean up on unmount
    return () => {
      document.body.removeChild(container);
    };
  }, []);
  
  return null; // This component doesn't render anything directly
};

export default BackgroundAnimation;
