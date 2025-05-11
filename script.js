function mostrarCarrito() {
  const carrito = document.getElementById("carrito");
  carrito.style.display = carrito.style.display === "none" ? "block" : "none";
  carrito.innerHTML = "<p>Tu carrito está vacío por ahora.</p>";
}

function descargarMenu() {
  const link = document.createElement("a");
  link.href = "docs/menu.pdf";
  link.download = "menu_cafeteria_vale.pdf";
  link.click();
}