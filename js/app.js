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



// contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de manera convencional

  // Obtenemos los valores de los campos
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Validación básica
  if (name === "" || email === "" || message === "") {
    // Si hay campos vacíos, mostramos un mensaje de error
    Swal.fire({
      icon: 'error',
      title: '¡Oops!',
      text: 'Por favor, completa todos los campos.',
    });
  } else {
    // Si todo está correcto, mostramos un mensaje de éxito
    Swal.fire({
      icon: 'success',
      title: '¡Mensaje Enviado!',
      text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
    });

    // Limpiamos el formulario después de enviar
    document.getElementById("contactForm").reset();
  }
});
