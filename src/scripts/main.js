/**
 * Main JavaScript file for the portfolio site
 * Contains event handlers and interactive functionality
 */

// Parallax scrolling effect for the hero section with optimization
document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.querySelector('.section1');
  const scrollFactor = 0.1;
  let ticking = false;
  let lastScrollY = window.scrollY;

  if (contenedor) {
    // Set initial background size
    contenedor.style.backgroundSize = 'auto 180%';
    
    // Optimized scroll handler using requestAnimationFrame
    window.addEventListener('scroll', () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Only update if we've scrolled enough to make a visible difference
          const backgroundWidth = 180 + lastScrollY * scrollFactor;
          const backgroundSize = 'auto ' + backgroundWidth + '%';
          contenedor.style.backgroundSize = backgroundSize;
          ticking = false;
        });
        
        ticking = true;
      }
    });
  }

  // Project grid click handling
  const container = document.querySelector('.container-grid');
  if (container) {
    const articles = container.querySelectorAll('article');

    articles.forEach((article, index) => {
      article.addEventListener('click', function() {
        let url;
        switch (index + 1) {
          case 1:
            url = 'https://citmalumnes.upc.es/~victordr/videos/hoopling.mp4';
            break;
          case 2:
            url = 'https://victordoru.itch.io/unealia';
            break;
          // Add other cases as needed
          default:
            return;
        }
        if (url) {
          window.open(url, '_blank');
        }
      });
    });
  }
}); 