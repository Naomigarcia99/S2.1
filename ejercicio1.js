// Ejercicio 1.1. Arrow functions

// Nivel 1
// Ejercicio 1

function add(a, b) {
  return a + b;
}
//Conversion
const suma = (a, b) => a + b;
console.log(suma(2, 3));

//Ejercicio 2

const randomNumber = () => Math.floor(Math.random() * 101);
console.log(randomNumber());
