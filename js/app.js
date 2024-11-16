document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial");
    let current = 0;
  
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        if (i === index) {
          testimonial.classList.add("active");
        } else {
          testimonial.classList.remove("active");
        }
      });
    }
  
    function startAnimation() {
      setInterval(() => {
        showTestimonial(current);
        current = (current + 1) % testimonials.length;
      }, 3000); // Cambia cada 3 segundos
    }
  
    startAnimation();
  });
  