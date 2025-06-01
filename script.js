let carrito = [];

function agregarAlCarrito(nombreProductoBase, precioBase, idProducto) {
  const tamaño = document.querySelector(`#${idProducto} select[name="tamaño"]`).value;
  const leche = document.querySelector(`#${idProducto} select[name="leche"]`).value;
  const complemento = document.querySelector(`#${idProducto} select[name="complemento"]`).value;

  let precioFinal = precioBase;

  // Ajuste de precio por tamaño
  if (tamaño === "Mediano") precioFinal += 5;
  else if (tamaño === "Grande") precioFinal += 10;

  // Ajuste de precio por leche
  if (leche === "Deslactosada" || leche === "Vegetal") precioFinal += 5;

  // Ajuste de precio por complemento
  if (complemento !== "Ninguno") precioFinal += 10;

  const productoCompleto = `${nombreProductoBase} (${tamaño}, Leche: ${leche}, Comp: ${complemento})`;

  carrito.push({ producto: productoCompleto, precio: precioFinal });

  alert(`Agregado: ${productoCompleto} - $${precioFinal}`);
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