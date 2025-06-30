
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.style.cursor = 'grabbing';
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = scrollPosition;
  });

  document.addEventListener('mouseup', () => {

    isDown = false;
    carousel.style.cursor = 'grab';

  });

  document.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5; // adjust speed here
    scrollPosition = scrollLeft - walk;

    // clamp
    const maxScroll = carousel.scrollWidth - carousel.parentElement.offsetWidth;
    if (scrollPosition < 0) scrollPosition = 0;
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;

    carousel.style.transform = `translateX(-${scrollPosition}px)`;
  });

  const carousel = document.getElementById("carousel");
  const container = carousel.parentElement;
  const cardWidth = 237; // image + gap
  let scrollPosition = 0;

  function scrollCarousel(direction) {
    const visibleWidth = container.offsetWidth;
    const totalScrollWidth = carousel.scrollWidth;
    const maxScroll = totalScrollWidth - visibleWidth;

    scrollPosition += direction * visibleWidth;

    if (scrollPosition < 0) scrollPosition = 0;
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;

    carousel.style.transform = `translateX(-${scrollPosition}px)`;
  }

    let whyScrollIndex = 0;
  const whyCarousel = document.getElementById("why-carousel");
  const whyCardWidth = 337 + 30; // width + gap
  const whyVisibleCount = 3;

  function scrollWhyCarousel(direction) {
    const totalItems = whyCarousel.children.length;
    const maxIndex = Math.ceil(totalItems / whyVisibleCount) - 1;
    whyScrollIndex += direction;

    if (whyScrollIndex < 0) whyScrollIndex = 0;
    if (whyScrollIndex > maxIndex) whyScrollIndex = maxIndex;

    const scrollAmount = whyScrollIndex * whyCardWidth * whyVisibleCount;
    whyCarousel.style.transform = `translateX(-${scrollAmount}px)`;
  } 