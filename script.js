document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("pedido").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Tu pedido está vacío. ¡Agrega un café para comenzar!");
  });
});