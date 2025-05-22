
export const initScrollAnimations = () => {
  const animateOnScroll = () => {
    // Select all elements with data-animate attribute
    const elements = document.querySelectorAll('[data-animate]');
    
    elements.forEach((element) => {
      // Get the animation style from data attribute
      const animationType = element.getAttribute('data-animate');
      const delay = element.getAttribute('data-delay') || '0';
      
      // Calculate if element is in viewport
      const rect = element.getBoundingClientRect();
      const isInViewport = (
        rect.top <= (window.innerHeight * 0.9) &&
        rect.bottom >= 0
      );
      
      // Apply animation class when element is in viewport
      if (isInViewport) {
        element.classList.add(animationType);
        element.style.animationDelay = `${delay}s`;
        element.style.opacity = '1';
      }
    });
  };
  
  // Add scroll event listener
  window.addEventListener('scroll', animateOnScroll);
  
  // Run once to animate elements already in view
  setTimeout(animateOnScroll, 100);
  
  // Clean up function
  return () => window.removeEventListener('scroll', animateOnScroll);
};
