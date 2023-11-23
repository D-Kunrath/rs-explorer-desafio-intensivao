document.querySelector("form button").addEventListener("click", (e) => {
  e.preventDefault();
  window.alert("Mensagem enviada");
  document
    .querySelectorAll(".contact-form input, .contact-form textarea")
    .forEach((field) => (field.value = ""));
});
