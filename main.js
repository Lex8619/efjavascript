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
const cargarDatos = async () => {
    try {
        const respuesta = await fetch('categorias.json');
        const datos = await respuesta.json();
        elegirCategoria(datos.categorias);
    } catch (error) {
        console.error('Error:', error);
    }
};
const elegirCategoria = (data) => {
    const categ = document.querySelector("#categorias");

    if (!categ) {
        return;
    }

    data.forEach(categoria => {
        const cardCategoria = document.createElement("article");
        cardCategoria.setAttribute("id", "tarjeta-categoria");

        cardCategoria.innerHTML = `
            <img class="cat-imagen" src="${categoria.imagen}" alt="${categoria.estilo}" style="width:150px">
            <div class="cat-description">
                <h5 class="hnombre">${categoria.estilo}</h5>
                <a href="compras.html?categoria=${categoria.id}" class="btn-categorias">Quiero trabajar de "${categoria.estilo}"</a>
            </div>
        `;
        categ.appendChild(cardCategoria);
    });
};
