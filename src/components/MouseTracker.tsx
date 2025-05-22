
import React, { useEffect, useState } from 'react';

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .hover-lift, .hover-scale');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <>
      {/* Primary large cursor */}
      <div 
        className="pointer-events-none fixed z-50 rounded-full mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          width: isHovering ? '60px' : '20px',
          height: isHovering ? '60px' : '20px',
          backgroundColor: '#F7374F',
          opacity: 0.6,
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
        }}
      />
      {/* Secondary smaller cursor */}
      <div 
        className="pointer-events-none fixed z-50 rounded-full bg-white"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          width: '5px',
          height: '5px',
          opacity: 0.8,
          transition: 'transform 0.1s linear',
        }}
      />
      <style>
        {`
          body {
            cursor: none;
          }
        `}
      </style>
    </>
  );
};

export default MouseTracker;
