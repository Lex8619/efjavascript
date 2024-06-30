/*let seleccionUsuario;
let caracteristicas;
let tipoPersonaje;

while (true) {
    seleccionUsuario = prompt("Ahora, elige tu tipo de personaje:\n1. Gerente (Carisma 7, Ética 4, Motivación 6, Excel 7)\n2. Vendedor (Carisma 9, Ética 4, Motivación 7, Excel 4)\n3. Contador (Carisma 3, Ética 7, Motivación 5, Excel 9)\n4. Pasante (Carisma 6, Ética 5, Motivación 9, Excel 4)");

    switch (parseInt(seleccionUsuario)) {
        case 1:
            caracteristicas = caracteristicasGerente;
            tipoPersonaje = "Gerente";
            break;
        case 2:
            caracteristicas = caracteristicasVendedor;
            tipoPersonaje = "Vendedor";
            break;
        case 3:
            caracteristicas = caracteristicasContador;
            tipoPersonaje = "Contador";
            break;
        case 4:
            caracteristicas = caracteristicasPasante;
            tipoPersonaje = "Pasante";
            break;
        default:
            alert("Selección no válida. Por favor, selecciona un número válido del 1 al 4.");
            continue;
    }

    break;
}
console.log(nombre, tipoPersonaje);

alert(`Has elegido ser ${tipoPersonaje}. ¡A trabajar!\nTus características son:\nCarisma: ${caracteristicas[0]}\nÉtica: ${caracteristicas[1]}\nMotivación: ${caracteristicas[2]}\nExcel: ${caracteristicas[3]}`);


let dado = Math.floor(Math.random() * 13)-6;
alert ("Recién llegas a la oficina y te das cuenta que hay mucha gente alrededor del dispenser de agua.\nAL parecer estan hablando de la nueva implementación de IA y quien va a ser remplazado. \nSi queres averiguar más, tira un dado y si sumado a tu carisma da más de 8 te enteras del plan y sumas un punto a conocimiento. \nSi fallas restas un punto de motivación")

const confirmacion = confirm("Tira el dado");
console.log("Resultado del dado:", dado);

const resultadoTotal = dado + caracteristicas[0];

if (resultadoTotal >= 8) {
        caracteristicas[0]++;
        alert("¡Te enteraste del plan! Suma 1 punto a conocimiento.");}
 else {
        caracteristicas[2]--;
        alert("Tus compañeros te miran raro y se cierran en un circulo dejandote afuera. Restas 1 punto de motivación.");
    }


alert ("mas contenido en la proxima versión")*/
let nombre = prompt("Ingresa tu nombre");
alert("Bienvenido, " + nombre + "! a Office Lord, la batalla por la oficina moderna\nElegi tu especie");


let caracteristicasGerente = [7, 4, 6, 7];
let caracteristicasAbogado = [9, 4, 7, 4];
let caracteristicasContador = [3, 7, 5, 9];
let caracteristicasPasante = [6, 5, 9, 4];
/* Características de los personajes: carisma, conocimiento, motivación, excel.*/

document.addEventListener('DOMContentLoaded', (event) => {
    let especie = document.querySelectorAll('.especie');
    let cuadro = document.getElementById('cuadro');

    function mostrarCuadro(event, message) {
        cuadro.style.left = event.pageX + 'px';
        cuadro.style.top = event.pageY + 'px';
        cuadro.textContent = message;
        cuadro.style.display = 'block';
    }

    function sacarcuadro() {
        cuadro.style.display = 'none';}

    especies.forEach(function(especie) {
                especie.addEventListener('mouseenter', function(event) {
                    mostrarCuadro(event, 'Podes elegir ser un ' + this.id + '!');
                });
                especie.addEventListener('mousemove', function(event) {
                    mostrarCuadro(event, 'Podes elegir ser un ' + this.id + '!');
                });
                especie.addEventListener('mouseleave', function() {
                    sacarcuadro();
                });
        });
    });