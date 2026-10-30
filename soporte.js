
document.getElementById("enviar").addEventListener("click", function() {

    let campo = document.getElementById("mensaje");
    let texto = campo.value.trim();
    let conversacion = document.getElementById("conversacion");

    if (texto === "") {
        alert("Por favor, escribe un mensaje.");
    } else {
        let mensajeUsuario = document.createElement("p");
        mensajeUsuario.textContent = "Tú: " + texto;

        let respuesta = document.createElement("p");
        respuesta.textContent = "Soporte: Gracias por comunicarte con Aroma a Café. Hemos recibido tu consulta.";

        conversacion.appendChild(mensajeUsuario);
        conversacion.appendChild(respuesta);

        campo.value = "";
    }
});
