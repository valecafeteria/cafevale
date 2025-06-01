let carrito = [];

function agregarProductoPersonalizado(nombre) {
  const tamano = document.querySelector(`#tamano-${formatearId(nombre)}`);
  const leche = document.querySelector(`#leche-${formatearId(nombre)}`);
  const extra = document.querySelector(`#extra-${formatearId(nombre)}`);

  const precio = parseFloat(tamano.value);
  const detalle = `${nombre} (${tamano.options[tamano.selectedIndex].text}, ${leche ? leche.value : 'Sin leche'}, ${extra ? extra.value : 'Sin extra'})`;

  const producto = {
    nombre: detalle,
    precio: precio
  };

  carrito.push(producto);
  actualizarCarrito();
}

// Función para mostrar el carrito
function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';

  carrito.forEach((producto, index) => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = '❌';
    btnEliminar.onclick = () => eliminarProducto(index);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

// Vaciar todo el carrito
function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

// Eliminar producto individual
function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Mostrar/Ocultar carrito
function abrirCarrito() {
  const contenedor = document.getElementById('carrito-contenedor');
  contenedor.classList.toggle('abierto');
}

// Ayuda a manejar nombres con espacios y tildes
function formatearId(nombre) {
  return nombre.toLowerCase().replace(/ /g, '-').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/ñ/g, 'n');
}