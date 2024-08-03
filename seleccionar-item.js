document.addEventListener('DOMContentLoaded', function() {
    fetch('items.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Red de respuesta no OK');
            }
            return response.json();
        })
        .then(data => {
            mostrarItems(data);
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud Fetch:', error);
            Swal.fire('Error', 'No se pudieron cargar los ítems.', 'error');
        });
});

let itemElegido = null;

function mostrarItems(items) {
    const container = document.getElementById('items');
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" />
            <h3>${item.nombre}</h3>
            <button onclick="seleccionarItem('${item.nombre}', '${item.imagen}')">Seleccionar</button>
        `;
        container.appendChild(itemDiv);
    });
}

function seleccionarItem(nombre, imagen) {
    itemElegido = { nombre, imagen };
    document.getElementById('img-seleccionado').src = imagen;
    document.getElementById('nombre-seleccionado').textContent = nombre;
    document.getElementById('item-seleccionado').style.display = 'block';
    document.getElementById('confirmar-container').style.display = 'block';
    document.querySelectorAll('.item button').forEach(button => {
        button.disabled = true; 
    });
}

document.getElementById('confirmar-btn').addEventListener('click', function() {
    if (itemElegido) {
        localStorage.setItem('itemElegido', JSON.stringify(itemElegido));
        // No almacenes las características del ítem aquí
        window.location.href = 'resultado.html';
    } else {
        Swal.fire('Error', 'Selecciona un ítem antes de confirmar.', 'error');
    }
});

document.getElementById('cambiar-btn').addEventListener('click', function() {
    document.getElementById('confirmar-container').style.display = 'none';
    document.getElementById('item-seleccionado').style.display = 'none';
    itemElegido = null;
    document.querySelectorAll('.item button').forEach(button => {
        button.disabled = false; // Reactivar botones
    });
});
