const numeroAdivinar = Math.floor(Math.random() * 15) + 1;

let intentos = 0;

function pedirNumero() {
    const numero = prompt('Introduzca un número entre 1 y 15, tienes 3 intentos');
    return parseInt(numero);
}

function comprobarNumero(numero) {
    intentos++;

    if (numero === numeroAdivinar) {
        alert(`Has acertado el número en ${intentos} intentos.`);
    return true;
  } else if (numero < numeroAdivinar) {
    alert('El número es menor.');
  } else {
    alert('El número es mayor.');
  }
  if (intentos === 3 && numero != numeroAdivinar) {
    alert(`Se acabaron tus intentos, el numero era ${ numeroAdivinar }.`);
  }

