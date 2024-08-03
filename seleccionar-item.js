const items = ['Impresora', 'Engrapadora', 'Agenda', 'Office', 'Birome', 'Bolígrafo'];

// Función para mostrar ítems
function mostrarItems() {
    const itemsDiv = document.getElementById('items');
    itemsDiv.innerHTML = '';

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <span>${item}</span>
            <button onclick="elegirItem('${item}')">Seleccionar</button>
        `;
        itemsDiv.appendChild(div);
    });
}

// Función para elegir un ítem
function elegirItem(item) {
    localStorage.setItem('item', item);
    window.location.href = 'resultado.html';
}

// Llamar a la función para mostrar los ítems cuando se carga la página
document.addEventListener('DOMContentLoaded', mostrarItems);
