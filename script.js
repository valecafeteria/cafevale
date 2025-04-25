// Muestra una alerta simulando el carrito
document.addEventListener("DOMContentLoaded", () => {
  const pedidoBtn = document.querySelector("a[href='#pedido']");
  
  if (pedidoBtn) {
    pedidoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Tu carrito está vacío. Agrega algo delicioso.");
    });
  }

  // También podrías animar al hacer scroll o cargar productos automáticamente
});
