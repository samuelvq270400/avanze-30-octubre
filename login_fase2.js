
document.getElementById("formLogin").addEventListener("submit", function(evento) {
    evento.preventDefault();

    let correo = document.getElementById("correo").value.trim();
    let contrasena = document.getElementById("contrasena").value;
    let mensaje = document.getElementById("mensajeLogin");

    if (correo === "" || contrasena === "") {
        mensaje.textContent = "Debes completar todos los campos.";
    } else if (correo.indexOf("@") === -1 || correo.indexOf(".") === -1) {
        mensaje.textContent = "Ingresa un correo válido.";
    } else if (contrasena.length < 4) {
        mensaje.textContent = "La contraseña debe tener al menos 4 caracteres.";
    } else {
        mensaje.textContent = "Datos ingresados correctamente (demostración).";
    }
});
