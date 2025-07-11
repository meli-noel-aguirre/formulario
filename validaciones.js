const form = document.getElementById("krakoviaForm");
const successMsg = document.getElementById("mensajeEnviado");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  limpiarErrores();
  successMsg.style.display = "none";

  let errores = [];

  if (nombre.value.trim() === "") {
    mostrarError(nombre, "El nombre es obligatorio.");
    errores.push("nombre");
  }

  if (email.value.trim() === "") {
    mostrarError(email, "El email es obligatorio.");
    errores.push("email");
  } else if (!validarEmail(email.value.trim())) {
    mostrarError(email, "El email no tiene un formato válido.");
    errores.push("email");
  }

  if (mensaje.value.trim() === "") {
    mostrarError(mensaje, "Por favor escribí un mensaje.");
    errores.push("mensaje");
  }

  if (errores.length === 0) {
    form.reset();
    successMsg.textContent = "Mensaje enviado correctamente. Gracias por escribirnos 💌";
    successMsg.style.display = "block";

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 5000);
  }
});

function mostrarError(input, mensaje) {
  const error = document.createElement("div");
  error.className = "error";
  error.innerText = mensaje;
  input.parentElement.insertBefore(error, input.nextSibling);
  input.classList.add("input-error");
}

function limpiarErrores() {
  document.querySelectorAll(".error").forEach(el => el.remove());
  document.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error"));
}

function validarEmail(email) {
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return regex.test(email);
}
