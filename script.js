document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("pedido").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Tu pedido está vacío. ¡Agrega algo delicioso!");
  });

  document.getElementById("buscar").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Función de búsqueda en desarrollo.");
  });

  document.getElementById("cuenta").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Inicia sesión próximamente.");
  });
});
