// Datos de categorías y características
const categorias = {
    'manager': { nombre: 'Gerente', caracteristicas: [7, 4, 6, 7] },
    'contador': { nombre: 'Contador', caracteristicas: [3, 7, 5, 9] },
    'abogado': { nombre: 'Abogado', caracteristicas: [5, 6, 7, 8] },
    'pasante': { nombre: 'Pasante', caracteristicas: [6, 5, 9, 4] }
};

// Función para mostrar SweetAlert y pedir nombre
async function pedirNombre() {
    const { value: nombre } = await Swal.fire({
        title: 'Ingresa tu nombre',
        input: 'text',
        inputLabel: 'Nombre',
        inputPlaceholder: 'Escribe tu nombre',
        confirmButtonText: 'Continuar'
    });

    if (nombre) {
        Swal.fire(`¡Hola ${nombre}!`, 'Elige una categoría para comenzar.', 'success').then(() => {
            mostrarCategorias();
        });
    }
}

// Función para mostrar categorías
function mostrarCategorias() {
    const categoriaContainer = document.getElementById('categoria-container');
    categoriaContainer.style.display = 'block';

    const categoriasDiv = document.getElementById('categorias');
    categoriasDiv.innerHTML = '';

    for (const [key, categoria] of Object.entries(categorias)) {
        const div = document.createElement('div');
        div.className = 'categoria';
        div.innerHTML = `
            <img src="imagenes/${key}.jpeg" alt="${categoria.nombre}">
            <span>${categoria.nombre}</span>
            <button onclick="elegirCategoria('${key}')">Seleccionar</button>
        `;
        categoriasDiv.appendChild(div);
    }
}

// Función para elegir una categoría
function elegirCategoria(categoriaKey) {
    const categoria = categorias[categoriaKey];
    localStorage.setItem('categoria', categoria.nombre);
    localStorage.setItem('caracteristicas', JSON.stringify(categoria.caracteristicas));
    window.location.href = 'seleccionar-item.html';
}

// Llamar a la función para pedir el nombre cuando se carga la página
document.addEventListener('DOMContentLoaded', pedirNombre);
