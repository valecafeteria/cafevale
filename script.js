let carrito = [];

// Función para agregar productos personalizados del menú
function agregarProductoPersonalizado(nombre) {
  const tamano = document.querySelector(`#tamano-${formatearId(nombre)}`);
  const leche = document.querySelector(`#leche-${formatearId(nombre)}`);
  const extra = document.querySelector(`#extra-${formatearId(nombre)}`);

  if (!tamano) {
    console.error(`No se encontró el elemento tamano para ${nombre}`);
    return;
  }

  const precio = parseFloat(tamano.value);
  const tamanoTexto = tamano.options[tamano.selectedIndex].text;
  const lecheTexto = leche ? leche.value : 'Sin leche';
  const extraTexto = extra ? extra.value : 'Sin extra';
  
  const detalle = `${nombre} (${tamanoTexto}, ${lecheTexto}, ${extraTexto})`;

  const producto = {
    id: Date.now(), // ID único para cada producto
    nombre: detalle,
    precio: precio,
    cantidad: 1
  };

  carrito.push(producto);
  actualizarCarrito();
  mostrarMensajeAgregado(nombre);
}

// Función para agregar productos simples de mezclas
function agregarAlCarrito(nombre, precio) {
  const productoExistente = carrito.find(item => item.nombre === nombre);
  
  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    const producto = {
      id: Date.now(),
      nombre: nombre,
      precio: precio,
      cantidad: 1
    };
    carrito.push(producto);
  }
  
  actualizarCarrito();
  mostrarMensajeAgregado(nombre);
}

// Función para mostrar el carrito
function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  const totalElement = document.getElementById('total-carrito');
  const contadorElement = document.getElementById('contador-carrito');
  
  if (!lista) return; // Si no existe el elemento, no hacer nada
  
  lista.innerHTML = '';
  let total = 0;
  let totalItems = 0;

  carrito.forEach((producto) => {
    const li = document.createElement('li');
    li.className = 'item-carrito';
    
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;
    totalItems += producto.cantidad;
    
    li.innerHTML = `
      <div class="item-info">
        <span class="item-nombre">${producto.nombre}</span>
        <span class="item-precio">$${producto.precio}</span>
      </div>
      <div class="item-controles">
        <button onclick="cambiarCantidad(${producto.id}, -1)" class="btn-cantidad">-</button>
        <span class="cantidad">${producto.cantidad}</span>
        <button onclick="cambiarCantidad(${producto.id}, 1)" class="btn-cantidad">+</button>
        <button onclick="eliminarProducto(${producto.id})" class="btn-eliminar">🗑️</button>
      </div>
      <div class="item-subtotal">Subtotal: $${subtotal}</div>
    `;
    
    lista.appendChild(li);
  });

  // Actualizar total
  if (totalElement) {
    totalElement.textContent = `Total: $${total}`;
  }
  
  // Actualizar contador del carrito
  if (contadorElement) {
    contadorElement.textContent = totalItems;
    contadorElement.style.display = totalItems > 0 ? 'inline' : 'none';
  }
  
  // Actualizar botón del carrito en navbar
  const carritoBtn = document.getElementById('carrito-btn');
  if (carritoBtn && totalItems > 0) {
    carritoBtn.innerHTML = `🛒 (${totalItems})`;
  } else if (carritoBtn) {
    carritoBtn.innerHTML = '🛒';
  }
}

// Cambiar cantidad de un producto
function cambiarCantidad(id, cambio) {
  const producto = carrito.find(item => item.id === id);
  if (producto) {
    producto.cantidad += cambio;
    if (producto.cantidad <= 0) {
      eliminarProducto(id);
    } else {
      actualizarCarrito();
    }
  }
}

// Eliminar producto individual
function eliminarProducto(id) {
  carrito = carrito.filter(item => item.id !== id);
  actualizarCarrito();
}

// Vaciar todo el carrito
function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

// Mostrar/Ocultar carrito
function abrirCarrito() {
  console.log("Abriendo carrito...");
  const contenedor = document.getElementById('carrito-contenedor');
  if (contenedor) {
    contenedor.classList.toggle('abierto');
    console.log("Carrito toggled");
  } else {
    console.error("No se encontró el elemento carrito-contenedor");
  }
}

// Cerrar carrito
function cerrarCarrito() {
  const contenedor = document.getElementById('carrito-contenedor');
  if (contenedor) {
    contenedor.classList.remove('abierto');
  }
}

// Proceder al checkout
function procederCheckout() {
  if (carrito.length === 0) {
    alert('Tu carrito está vacío');
    return;
  }
  
  let mensaje = '¡Hola! Me gustaría hacer el siguiente pedido:\n\n';
  let total = 0;
  
  carrito.forEach(producto => {
    const subtotal = producto.precio * producto.cantidad;
    mensaje += `• ${producto.nombre}\n  Cantidad: ${producto.cantidad}\n  Subtotal: $${subtotal}\n\n`;
    total += subtotal;
  });
  
  mensaje += `TOTAL: $${total}\n\n¿Podrían confirmar disponibilidad y tiempo de entrega?`;
  
  // Crear enlace de WhatsApp
  const numeroWhatsApp = '7202453939'; // Cambia por tu número
  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  
  window.open(enlaceWhatsApp, '_blank');
}

// Mostrar mensaje de producto agregado
function mostrarMensajeAgregado(nombre) {
  // Crear elemento de notificación
  const notificacion = document.createElement('div');
  notificacion.className = 'notificacion-agregado';
  notificacion.textContent = `✅ ${nombre} agregado al carrito`;
  
  document.body.appendChild(notificacion);
  
  // Mostrar notificación
  setTimeout(() => {
    notificacion.classList.add('mostrar');
  }, 100);
  
  // Ocultar y eliminar notificación
  setTimeout(() => {
    notificacion.classList.remove('mostrar');
    setTimeout(() => {
      document.body.removeChild(notificacion);
    }, 300);
  }, 2000);
}

// Ayuda a manejar nombres con espacios y tildes
function formatearId(nombre) {
  return nombre.toLowerCase()
    .replace(/ /g, '-')
    .replace(/á/g, 'a')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ú/g, 'u')
    .replace(/ñ/g, 'n');
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
  console.log('Página cargada, inicializando carrito...');
  
  // Crear el HTML del carrito si no existe
  if (!document.getElementById('carrito-contenedor')) {
    crearHTMLCarrito();
  }
  
  // Configurar eventos
  const carritoBtn = document.getElementById('carrito-btn');
  if (carritoBtn) {
    carritoBtn.addEventListener('click', abrirCarrito);
  }
  
  actualizarCarrito();
});

// Crear el HTML del carrito dinámicamente
function crearHTMLCarrito() {
  const carritoHTML = `
    <div id="carrito-contenedor">
      <div class="carrito-header">
        <h3>🛒 Mi Carrito</h3>
        <button onclick="cerrarCarrito()" class="btn-cerrar">×</button>
      </div>
      
      <div class="carrito-contenido">
        <ul id="lista-carrito"></ul>
        
        <div class="carrito-total">
          <div id="total-carrito">Total: $0</div>
        </div>
        
        <div class="carrito-acciones">
          <button onclick="vaciarCarrito()" class="btn-vaciar">Vaciar Carrito</button>
          <button onclick="procederCheckout()" class="btn-checkout">Proceder al Pedido</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', carritoHTML);
}