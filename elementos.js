let personajeElegido;
let elementoElegido;

function agregarElemento(nombreElemento) {
 
    if (elementoElegido) {
        alert('Ya has elegido un elemento. No puedes elegir más de uno.');
        return;
    }

 
    switch (nombreElemento) {
        case 'Abrochadora':
            elementoElegido = {
                nombre: 'Abrochadora',
                modificador: [1, 0, 0, 0]
            };
            break;
        case 'Cafe':
            elementoElegido = {
                nombre: 'Café',
                modificador: [0, 1, 0, 0]
            };
            break;
        case 'Tarjeta':
            elementoElegido = {
                nombre: 'Tarjeta',
                modificador: [0, 0, 1, 0]
            };
            break;
        case 'Impresora':
            elementoElegido = {
                nombre: 'Impresora',
                modificador: [0, 0, 0, 1]
            };
            break;
        default:
            alert('Elemento no válido.');
            return;
    }

  
    alert(`Has elegido el elemento: ${elementoElegido.nombre}`);


    actualizarValija();
}


function confirmarValija() {

    if (!elementoElegido) {
        alert('Debes elegir al menos un elemento antes de confirmar.');
        return;
    }


    localStorage.setItem('personajeElegido', JSON.stringify(personajeElegido));
    localStorage.setItem('elementoElegido', JSON.stringify(elementoElegido));

    window.location.href = 'evento1.html';
}


function limpiarValija() {
    elementoElegido = null;
    actualizarValija();
}

function actualizarValija() {
    const valijaElement = document.getElementById('valija');
    valijaElement.innerHTML = '';

    if (elementoElegido) {
        const li = document.createElement('li');
        li.textContent = `Elemento: ${elementoElegido.nombre}`;
        valijaElement.appendChild(li);
    }
}
function verPersonaje() {
    let personajeElegido = JSON.parse(localStorage.getItem('personajeElegido'));

    if (!personajeElegido) {
        alert('No hay personaje elegido.');
        return;
    }


    alert(`Tu personaje actual es: ${personajeElegido.tipoPersonaje}\n
           Características:\n
           Carisma: ${personajeElegido.caracteristicas[0]}\n
           Ética: ${personajeElegido.caracteristicas[1]}\n
           Motivación: ${personajeElegido.caracteristicas[2]}\n
           Excel: ${personajeElegido.caracteristicas[3]}`);
}
