document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos. Pronto responderemos tu mensaje.');
    this.reset();
  });
  