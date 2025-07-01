document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.tech-slider-track');
    if (track) {
      track.innerHTML += track.innerHTML; // Duplicate the images for seamless loop
    }
});

AOS.init({
    duration: 1000,
    once: true
});