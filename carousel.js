
  let currentIndex = 1;
  let isSnapping = false;

  window.addEventListener("load", function () {
    const carousel = document.getElementById("carousel");
    const images = Array.from(carousel.querySelectorAll("img"));
    const imageWidth = images[0].offsetWidth;

    // Setup layout
    carousel.style.overflow = "hidden";
    carousel.style.whiteSpace = "nowrap";
    images.forEach(img => img.style.display = "inline-block");

    // Clone first and last images
    const firstClone = images[0].cloneNode();
    const lastClone = images[images.length - 1].cloneNode();
    carousel.insertBefore(lastClone, images[0]);
    carousel.appendChild(firstClone);

    // Jump to real first image
    carousel.scrollLeft = imageWidth;
  });

  function scrollCarousel(direction) {
    const carousel = document.getElementById("carousel");
    const images = carousel.querySelectorAll("img");
    const imageWidth = images[0].offsetWidth;
    const totalImages = images.length;
    const maxRealIndex = totalImages - 2;

    currentIndex += direction;

    // Temporarily disable snap detection
    if (currentIndex > maxRealIndex + 1) currentIndex = maxRealIndex + 1;
    if (currentIndex < 0) currentIndex = 0;

    // Scroll to target image
    carousel.scrollTo({
      left: currentIndex * imageWidth,
      behavior: "smooth"
    });

    // After scroll completes (~300ms), handle seamless loop
    setTimeout(() => {
      // Jump from cloned first to real first
      if (currentIndex === maxRealIndex + 1) {
        currentIndex = 1;
        carousel.scrollLeft = currentIndex * imageWidth;
      }

      // Jump from cloned last to real last
      if (currentIndex === 0) {
        currentIndex = maxRealIndex;
        carousel.scrollLeft = currentIndex * imageWidth;
      }
    }, 350); // Wait until smooth scroll finishes
  }
