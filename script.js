document.getElementById('mezclas-btn').addEventListener('click', function() {
    document.getElementById('mezclas').classList.toggle('hidden');
    document.getElementById('menu').classList.add('hidden'); // Ocultar menú
});

document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('hidden');
    document.getElementById('mezclas').classList.add('hidden'); // Ocultar mezclas
});