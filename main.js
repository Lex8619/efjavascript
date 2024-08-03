const categorias = {
    'manager': { 
        nombre: 'Gerente', 
        caracteristicas: {
            conocimiento: 4, 
            excel: 7, 
            motivacion: 6, 
            carisma: 7 
        } 
    },
    'contador': { 
        nombre: 'Contador', 
        caracteristicas: {
            conocimiento: 7, 
            excel: 9, 
            motivacion: 5, 
            carisma: 3 
        } 
    },
    'abogado': { 
        nombre: 'Abogado', 
        caracteristicas: {
            conocimiento: 5, 
            excel: 6, 
            motivacion: 7, 
            carisma: 8 
        } 
    },
    'pasante': { 
        nombre: 'Pasante', 
        caracteristicas: {
            conocimiento: 6, 
            excel: 5, 
            motivacion: 9, 
            carisma: 4 
        } 
    }
};


async function pedirNombre() {
    let nombre = '';


    while (!nombre) {
        const { value } = await Swal.fire({
            title: 'Bienvenido a Office Lord',
            text: 'Ingresa tu nombre:',
            input: 'text',
            inputPlaceholder: 'Escribe tu nombre',
            confirmButtonText: 'Continuar',
            inputValidator: (value) => {
                if (!value) {
                    return 'Sin nombre no hay sueldo';
                }
            }
        });

        if (value) {
            nombre = value;
            localStorage.setItem('nombreJugador', nombre);
            Swal.fire(`¡Hola ${nombre}!`, '¿De qué te gustaría trabajar?.', 'success').then(() => {
                mostrarCategorias();
            });
        }
    }
}


function mostrarCategorias() {
    const categoriaContainer = document.getElementById('categoria-container');
    categoriaContainer.style.display = 'block';

    const categoriasDiv = document.getElementById('categorias');
    categoriasDiv.innerHTML = '';

    for (const [key, categoria] of Object.entries(categorias)) {
        const div = document.createElement('div');
        div.className = 'categoria';
        div.innerHTML = `
            <img src="imagenes/${key}.jpeg" alt="${categoria.nombre}" style="width: 75px">
            <span>${categoria.nombre}</span>
            <button onclick="elegirCategoria('${key}')">Seleccionar</button>
        `;
        categoriasDiv.appendChild(div);
    }
}

function elegirCategoria(categoriaKey) {
    const categoria = categorias[categoriaKey];
    localStorage.setItem('categoria', categoria.nombre);
    localStorage.setItem('caracteristicas', JSON.stringify(categoria.caracteristicas));
    window.location.href = 'seleccionar-item.html';
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});
document.addEventListener('DOMContentLoaded', pedirNombre);
