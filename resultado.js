const imagenesPersonaje = {
    'Gerente': 'imagenes/manager.jpeg',
    'Contador': 'imagenes/contador.jpeg',
    'Abogado': 'imagenes/abogado.jpeg',
    'Pasante': 'imagenes/pasante.jpeg'
};

function obtenerUrlImagenItem(nombreItem) {
    return `imagenes/${nombreItem}.jpeg`; 
}

function mostrarResultado() {
    const categoria = localStorage.getItem('categoria');
    const item = JSON.parse(localStorage.getItem('itemElegido'));
    const caracteristicas = JSON.parse(localStorage.getItem('caracteristicas'));
    const nombreJugador = localStorage.getItem('nombreJugador');

    // Mostrar nombre del jugador
    document.getElementById('nombre-jugador').textContent = nombreJugador ? `Jugador: ${nombreJugador}` : 'Jugador: Desconocido';

    // Mostrar datos del personaje
    if (categoria) {
        document.getElementById('nombre-personaje').textContent = categoria;
        document.getElementById('img-personaje').src = imagenesPersonaje[categoria] || 'imagenes/default-personaje.jpeg';
    } else {
        document.getElementById('nombre-personaje').textContent = 'Categoría no encontrada';
        document.getElementById('img-personaje').src = 'imagenes/default-personaje.jpeg';
    }

    // Mostrar datos del ítem
    if (item) {
        document.getElementById('nombre-item').textContent = item.nombre;
        document.getElementById('img-item').src = obtenerUrlImagenItem(item.nombre) || 'imagenes/default-item.jpeg';

        // Mostrar características de la categoría
        const listaCaracteristicas = document.getElementById('lista-caracteristicas');
        if (caracteristicas) {
            listaCaracteristicas.innerHTML = Object.entries(caracteristicas).map(([key, value], index) =>
                `<li>${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}</li>`
            ).join('');
        } else {
            listaCaracteristicas.innerHTML = '<li>No hay características disponibles</li>';
        }
    } else {
        document.getElementById('nombre-item').textContent = 'Ítem no encontrado';
        document.getElementById('img-item').src = 'imagenes/default-item.jpeg';
        document.getElementById('lista-caracteristicas').innerHTML = '<li>No hay características disponibles</li>';
    }
}

function volver() {
    window.location.href = 'index.html';
}

// Cargar los ítems y mostrar el resultado cuando se carga la página
document.addEventListener('DOMContentLoaded', mostrarResultado);
