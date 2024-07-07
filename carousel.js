document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const frame = document.querySelector('.resource-slider-frame');
    const itemWidth = frame.querySelector('.resource-slider-item').offsetWidth;
  
    prevButton.addEventListener('click', () => {
      frame.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    });
  
    nextButton.addEventListener('click', () => {
      frame.scrollBy({ left: itemWidth, behavior: 'smooth' });
    });
  
    const checkArrows = () => {
      const totalWidth = frame.scrollWidth;
      const frameWidth = frame.offsetWidth;
      const totalScroll = frame.scrollLeft;
  
      if ((totalWidth - frameWidth) - totalScroll <= itemWidth) {
        nextButton.style.visibility = 'hidden';
      } else {
        nextButton.style.visibility = 'visible';
      }
  
      if (totalScroll <= itemWidth) {
        prevButton.style.visibility = 'hidden';
      } else {
        prevButton.style.visibility = 'visible';
      }
    };
  
    frame.addEventListener('scroll', checkArrows);
    window.addEventListener('resize', checkArrows);
    checkArrows();
  });
  