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
