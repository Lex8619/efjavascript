// Función para mostrar el resultado
function mostrarResultado() {
    const categoria = localStorage.getItem('categoria');
    const item = localStorage.getItem('item');
    const caracteristicas = JSON.parse(localStorage.getItem('caracteristicas'));

    Swal.fire({
        title: 'Resultado',
        html: `
            <p><strong>Categoría Elegida:</strong> ${categoria}</p>
            <p><strong>Ítem Seleccionado:</strong> ${item}</p>
            <h3>Características:</h3>
            <ul>
                <li>Característica 1: ${caracteristicas[0]}</li>
                <li>Característica 2: ${caracteristicas[1]}</li>
                <li>Característica 3: ${caracteristicas[2]}</li>
                <li>Característica 4: ${caracteristicas[3]}</li>
            </ul>
        `,
        confirmButtonText: 'Aceptar'
    }).then(() => {
        // Opcional: limpiar el localStorage si es necesario
        localStorage.clear();
    });
}

// Llamar a la función para mostrar el resultado cuando se carga la página
document.addEventListener('DOMContentLoaded', mostrarResultado);
