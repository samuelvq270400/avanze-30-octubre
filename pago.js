
document.getElementById("formPedido").addEventListener("submit", function(evento) {
    evento.preventDefault();

    let precio = Number(document.getElementById("producto").value);
    let cantidad = Number(document.getElementById("cantidad").value);
    let nombre = document.getElementById("nombre").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let molienda = document.getElementById("molienda").value;
    let formaPago = document.getElementById("formaPago").value;

    let resultado = document.getElementById("resultadoPedido");

    if (cantidad <= 0 || nombre === "" || direccion === "") {
        resultado.textContent = "Revisa la cantidad, el nombre y la dirección.";
    } else {
        let total = precio * cantidad;

        resultado.innerHTML =
            "Pedido registrado.<br>" +
            "Cliente: " + nombre + "<br>" +
            "Dirección: " + direccion + "<br>" +
            "Molienda: " + molienda + "<br>" +
            "Cantidad: " + cantidad + "<br>" +
            "Forma de pago: " + formaPago + "<br>" +
            "Total: $" + total.toLocaleString("es-CO") + " COP";
    }
});
