document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showNextTestimonial() {
    // Remove 'active' class from the current item
    items[currentIndex].classList.remove('active');

    // Calculate the next index
    currentIndex = (currentIndex + 1) % items.length;

    // Add 'active' class to the next item
    items[currentIndex].classList.add('active');
  }

  // Start the carousel
  setInterval(showNextTestimonial, 3000); // Cambia cada 3 segundos

});
