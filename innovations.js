document.addEventListener('DOMContentLoaded', () => {
  // Desktop Scroll Component Logic
  const items = document.querySelectorAll('.inno-item');
  const images = document.querySelectorAll('.inno-img-wrapper');
  
  if (items.length > 0 && window.IntersectionObserver) {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-index');
          
          items.forEach(item => item.classList.remove('is-active'));
          images.forEach(img => img.classList.remove('is-active'));
          
          entry.target.classList.add('is-active');
          const targetImg = document.querySelector('.inno-img-wrapper[data-index="' + index + '"]');
          if (targetImg) targetImg.classList.add('is-active');
        }
      });
    }, observerOptions);
    
    items.forEach(item => observer.observe(item));
  }

  // Mobile Slider Logic
  const mobTexts = document.querySelectorAll('.inno-mob-text');
  const mobImgs = document.querySelectorAll('.inno-mob-img');
  const btnPrev = document.getElementById('inno-prev');
  const btnNext = document.getElementById('inno-next');
  let currentIndex = 0;
  const totalItems = mobTexts.length;

  function updateMobileSlider(index) {
    mobTexts.forEach(t => t.classList.remove('is-active'));
    mobImgs.forEach(i => i.classList.remove('is-active'));
    
    const targetText = document.querySelector('.inno-mob-text[data-index="' + index + '"]');
    const targetImg = document.querySelector('.inno-mob-img[data-index="' + index + '"]');
    
    if(targetText) targetText.classList.add('is-active');
    if(targetImg) targetImg.classList.add('is-active');
  }

  if (btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateMobileSlider(currentIndex);
    });

    btnNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateMobileSlider(currentIndex);
    });
  }
});
