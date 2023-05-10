var numeroRandom = Math.floor(Math.random() * 15) + 1;

console.log("Vamos a jugar a un juego, tienes que adivinar un número entre 1 y 15 en tres intentos.");
console.log("Si fallas, te decimos si el número es mayor o menor y si aciertas, ganarás");

let intentos = 0;

function validarNumero(numero) {
  var numeroNormal = Number(numero);

  if (isNaN(numeroNormal)) {
    console.log("El valor ingresado no es un número válido");
    return false;
  }

  if (numeroNormal < 1 || numeroNormal > 15) {
    console.log("El número debe estar entre 1 y 15");
    return false;
  }

  return true;
}
function comprobarNumero(numero) {
  intentos++;

  if (!validarNumero(numero)) {
    return false;
  }
  var numeroNormal = Number(numero);

  if (numeroNormal === numeroRandom) {
    console.log(`Has ganado el juego en ${intentos} intentos.`);
    return true;
  }

  if (numeroNormal < numeroRandom) {
    console.log("El número es mayor");
  } else {
    console.log("El número es menor");
  }

  return false;
}

while (intentos < 3) {
  var numeroIntroducido = prompt("Introduce un número");

  if (comprobarNumero(numeroIntroducido)) {
    break;
  }
}

if (intentos >= 3) {
  console.log(`Has perdido el juego. El número era ${numeroRandom}.`);
}

 

