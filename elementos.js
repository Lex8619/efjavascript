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
                modificador: [0, 0, 1, 1]
            };
            break;
        case 'Cafe':
            elementoElegido = {
                nombre: 'Café',
                modificador: [1, -1, 1, 0]
            };
            break;
        case 'Tarjeta':
            elementoElegido = {
                nombre: 'Tarjeta',
                modificador: [0, 0, 2, 0]
            };
            break;
        case 'Impresora':
            elementoElegido = {
                nombre: 'Impresora',
                modificador: [0, 0, -1, 2]
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
        li.textContent = `${elementoElegido.nombre}`;
        valijaElement.appendChild(li);
    }
}
function verPersonaje() {
    // Recuperar los datos del personaje desde localStorage
    let personajeElegido = localStorage.getItem('personajeElegido');

    // Verificar si hay datos en localStorage
    if (personajeElegido) {
        // Convertir de JSON a objeto JavaScript
        personajeElegido = JSON.parse(personajeElegido);

        // Obtener las características del personaje
        let tipoPersonaje = personajeElegido.tipoPersonaje;
        let caracteristicas = personajeElegido.caracteristicas;

        // Construir el mensaje con las características
        let mensaje = `Has elegido ser ${tipoPersonaje}. ¡A trabajar!\n`;
        mensaje += `Tus características son:\n`;
        mensaje += `Carisma: ${caracteristicas[0]}\n`;
        mensaje += `Ética: ${caracteristicas[1]}\n`;
        mensaje += `Motivación: ${caracteristicas[2]}\n`;
        mensaje += `Excel: ${caracteristicas[3]}`;

        // Mostrar el mensaje en una alerta
        alert(mensaje);
    } else {
        alert('No se ha seleccionado ningún personaje.');
    }
}
