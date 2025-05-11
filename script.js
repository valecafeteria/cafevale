let carrito = [];

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  alert(`Agregado: ${producto} - $${precio}`);
}

function abrirCarrito() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  let resumen = "Tu pedido:\n";
  let total = 0;

  carrito.forEach(item => {
    resumen += `${item.producto} - $${item.precio}\n`;
    total += item.precio;
  });

  resumen += `\nTotal: $${total}`;
  alert(resumen);
}