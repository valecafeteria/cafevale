const carrito = [];

function agregarProductoPersonalizado(nombreProductoBase) {
  const id = nombreProductoBase.toLowerCase(); // Ej: "Latte" → "latte"
  
  // Obtener valores de los selects
  const tamañoSelect = document.getElementById(`tamano-${id}`);
  const lecheSelect = document.getElementById(`leche-${id}`);
  const complementoSelect = document.getElementById(`extra-${id}`);

  if (!tamañoSelect || !lecheSelect || !complementoSelect) {
    alert("Error: No se encontraron los selectores del producto.");
    return;
  }

  const tamaño = tamañoSelect.value;
  const leche = lecheSelect.value;
  const complemento = complementoSelect.value;

  let precioFinal = parseFloat(tamaño); // Precio base por tamaño

  // Ajuste por tipo de leche
  if (leche === "Deslactosada" || leche === "Avena" || leche === "Almendra") {
    precioFinal += 5;
  }

  // Ajuste por complemento
  if (complemento !== "Ninguno") {
    precioFinal += 10;
  }

  const productoCompleto = `${nombreProductoBase} (Tamaño: ${tamañoSelect.options[tamañoSelect.selectedIndex].text}, Leche: ${leche}, Extra: ${complemento})`;

  carrito.push({ producto: productoCompleto, precio: precioFinal });

  alert(`Agregado al carrito:\n${productoCompleto}\nTotal: $${precioFinal}`);
}

function mostrarCarrito() {
  const contenedor = document.getElementById("carrito-contenedor");
  contenedor.innerHTML = "<h3>Carrito de compras:</h3>";

  if (carrito.length === 0) {
    contenedor.innerHTML += "<p>El carrito está vacío.</p>";
    return;
  }

  let total = 0;
  const lista = document.createElement("ul");

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${index + 1}. ${item.producto} - $${item.precio} 
      <button onclick="eliminarProducto(${index})">Eliminar</button>`;
    lista.appendChild(li);
    total += item.precio;
  });

  contenedor.appendChild(lista);
  contenedor.innerHTML += `<p><strong>Total: $${total}</strong></p>`;
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}