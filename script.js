const numeroAdivinar = Math.floor(Math.random() * 15) + 1;

let intentos = 0;

function pedirNumero() {
    const numero = prompt('Introduzca un número entre 1 y 15, tienes 3 intentos');
    return parseInt(numero);
}

