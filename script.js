// Función para realizar la búsqueda
document.querySelector('#busqueda-cuenta input').addEventListener('input', function(e) {
    let query = e.target.value.toLowerCase();
    let productos = document.querySelectorAll('.producto, .mezcla');
    productos.forEach(function(producto) {
        let nombre = producto.querySelector('h3').textContent.toLowerCase();
        if (nombre.includes(query)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
});

// Función para mostrar u ocultar el contenido de cada sección al hacer clic en los enlaces del menú
document.querySelectorAll('header nav ul li a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let targetId = this.getAttribute('href').substring(1);
        let secciones = document.querySelectorAll('.contenido, #inicio');
        secciones.forEach(function(seccion) {
            seccion.style.display = 'none';
        });
        document.getElementById(targetId).style.display = 'block';
    });
});

// Mostrar la primera sección (Inicio) por defecto
document.getElementById('inicio').style.display = 'block';