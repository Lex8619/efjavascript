let nombre = prompt("Ingresa tu nombre");
alert("Bienvenido, " + nombre + "! a Office Lord, la batalla por la oficina moderna\nElegi tu especie");

let caracteristicasGerente = [7, 4, 6, 7];
let caracteristicasAbogado = [9, 4, 7, 4];
let caracteristicasContador = [3, 7, 5, 9];
let caracteristicasPasante = [6, 5, 9, 4];

function elegirPersonaje(personaje) {
    let caracteristicas;

    switch (personaje) {
        case 'manager':
            caracteristicas = caracteristicasGerente;
            break;
        case 'contador':
            caracteristicas = caracteristicasContador;
            break;
        case 'abogado':
            caracteristicas = caracteristicasAbogado;
            break;
        case 'pasante':
            caracteristicas = caracteristicasPasante;
            break;
        default:
            alert('Especie no válida.');
            return;
    }

    let personajeElegido = {
        tipoPersonaje: personaje,
        caracteristicas: caracteristicas
    };

    localStorage.setItem('personajeElegido', JSON.stringify(personajeElegido));

    alert(`Has elegido ser ${personaje}. ¡A trabajar!\nTus características son:\nCarisma: ${caracteristicas[0]}\nÉtica: ${caracteristicas[1]}\nMotivación: ${caracteristicas[2]}\nExcel: ${caracteristicas[3]}`);

    window.location.href = 'elementos.html';
}
