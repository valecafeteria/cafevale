// Funcionalidad para el carrusel de productos
let currentIndex = 0;
const items = document.querySelector('.items');
const productos = document.querySelectorAll('.producto');

document.querySelector('.flecha.derecha').addEventListener('click', () => {
    if (currentIndex < productos.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

document.querySelector('.flecha.izquierda').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = -currentIndex * 100; // Cambia 100 por el ancho de tu producto
    items.style.transform = `translateX(${offset}%)`;
}

// Funcionalidad para descargar el menú
document.querySelector('.boton-descargar').addEventListener('click', () => {
    alert('¡El menú se está descargando!');
});
