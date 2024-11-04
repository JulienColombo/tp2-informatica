document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
     // Validación de número de teléfono
  const phone = document.getElementById('phone').value;
  const phonePattern = /^[0-9]+$/;
  if (!phonePattern.test(phone)) {
    alert('Por favor, ingrese un número de teléfono válido (solo números).');
    return false;
  }
    
    // Expresión regular simple para validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(emailInput.value)) {
      errorMessage.style.display = "none";
      alert("Formulario enviado correctamente. ¡Gracias por contactar a El Nota!");
      // Aquí puedes enviar el formulario o resetearlo
      document.getElementById("contactForm").reset();
    } else {
      errorMessage.style.display = "block";
    }
  });