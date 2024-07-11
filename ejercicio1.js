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

//Ejercicio 3

class Person {
  constructor(name) {
    this._name = name;
  }

  greet = () => console.log(`Hola, ${this._name}`);
}

const instancia = new Person("Naomi");
instancia.greet();

//Nivel 2
//Ejercicio 4

function printNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    const print = (num) => console.log(num);
    print(arrNumbers[i]);
  }
}

const arrNumbers = [1, 2, 3, 4, 5];
printNumbers(arrNumbers);

//Nivel 3
//Ejercicio 5

setTimeout(() => console.log("Mensaje después de 3 segundos"), 3000);

//Ejercicio 1.2. Operador ternario

//Nivel 1
//Ejercicio 1

function potConduir(edad) {
  edad >= 18 ? console.log("Pots conduir") : console.log("No pots conduir");
}

potConduir(17);

//Ejercicio 2
let num1 = 5;
let num2 = 4;

num1 > num2 ? console.log("num1 és més gran") : console.log("num2 és més gran");

//Nivel 2
//Ejercicio 3
//Enlace
let num = -2;

num > 0
  ? console.log("el número es positivo")
  : num < 0
  ? console.log("el número es negativo")
  : console.log("el número es cero");

//Con funciones
let num3 = 8;
let num4 = 7;
let num5 = 5;

function trobarMaxim(a, b, c) {
  a > b && a > c
    ? console.log(`${a} es el valor máximo comparado con ${b} y ${c}`)
    : b > a && b > c
    ? console.log(`${b} es el valor máximo comparado con ${a} y ${c}`)
    : c > a && c > b
    ? console.log(`${c} es el valor máximo comparado con ${b} y ${a}`)
    : console.log("Alguno de los tres valores coincide");
}

trobarMaxim(num3, num4, num5);
