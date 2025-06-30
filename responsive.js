
  function toggleMobileNav() {
    const nav = document.getElementById('section-category-nav');
    const overlay = document.getElementById('mobile-overlay');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  function closeMobileNav() {
    const nav = document.getElementById('section-category-nav');
    const overlay = document.getElementById('mobile-overlay');
    nav.classList.remove('active');
    overlay.classList.remove('active');
  }

  // Close if user clicks outside or on any nav item
  document.addEventListener('click', function (e) {
    const nav = document.getElementById('section-category-nav');
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const overlay = document.getElementById('mobile-overlay');

    if (
      nav.classList.contains('active') &&
      !nav.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      closeMobileNav();
    }

    // Close on any nav link/button click
    if (e.target.tagName === 'A' || e.target.closest('li')) {
      closeMobileNav();
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.carousel2-img');
    let currentIndex = 0;
    let interval;

    // Only run this script on mobile (width < 1160)
    function isMobile() {
      return window.innerWidth < 1160;
    }

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function startAutoSlide() {
      interval = setInterval(nextImage, 5000);
    }

    function resetAutoSlide() {
      clearInterval(interval);
      startAutoSlide();
    }

    function initCarousel() {
      if (!isMobile()) return;

      showImage(currentIndex);
      startAutoSlide();

      images.forEach(img => {
        img.addEventListener('click', () => {
          nextImage();
          resetAutoSlide();
        });
      });
    }

    initCarousel();

    // Re-initialize on resize
    window.addEventListener('resize', () => {
      if (isMobile()) {
        initCarousel();
      } else {
        clearInterval(interval);
        images.forEach(img => img.classList.remove('active'));
        images.forEach(img => img.style.display = 'block'); // for desktop fallback
      }
    });
  });

    window.addEventListener('load', () => {
    const carousel = document.querySelector('.image-carousel');
    const images = carousel.querySelectorAll('.carousel-image');

    const containerRect = carousel.getBoundingClientRect();

    images.forEach(img => {
      const imgRect = img.getBoundingClientRect();

      // Check if the image overflows the container
      const overflows =
        imgRect.right > containerRect.right ||
        imgRect.bottom > containerRect.bottom ||
        imgRect.left < containerRect.left ||
        imgRect.top < containerRect.top;

      if (overflows) {
        img.style.visibility = 'hidden';
      } else {
        img.style.visibility = 'visible';
      }
    });
  });