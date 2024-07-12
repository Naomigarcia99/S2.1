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

//Nivel 3
//Ejercicio 4
function parOImpar(arrNum) {
  for (i = 0; i < arrNum.length; i++) {
    const recorrer = (num) =>
      num % 2 == 0
        ? console.log(`${num} es par`)
        : console.log(`${num} es impar`);
    recorrer(arrNum[i]);
  }
}

const arrNum = [2, 4, 5, 6, 7, 9, 12];
parOImpar(arrNum);

//Ejercicio 1.3. Callbacks
//Nivel 1
//Ejercicio 1
function procesar(nom, callback) {
  let miNombre = "Hola, me llamo " + nom;
  callback(miNombre);
}

function logNombre(nom) {
  console.log(nom);
}

procesar("Naomi", logNombre);

//Ejercicio 2
function calculadora(numero1, numero2, callback) {
  let total = "La suma es: " + (numero1 + numero2);
  callback(total);
}

function resultado(suma) {
  console.log(suma);
}

calculadora(8, 3, resultado);

//Nivel 2
//Ejercicio 3
function esperarISaludar(nom, callback) {
  let saludo = "Saludos para " + nom;
  callback(saludo);
}

function saludar(saludo) {
  console.log(saludo);
}

setTimeout(() => esperarISaludar("Anna", saludar), 2000);

//Ejercicio 4
function procesarElements(arr1, callback) {
  arr1.forEach((num) => {
    let mensaje = "Número: " + num;
    callback(mensaje);
  });
}

function recorrerArr(num) {
  console.log(num);
}

procesarElements([2, 5, 1, 8], recorrerArr);

//Nivel 3
//Ejercicio 5
function procesarCadena(cadena, callback) {
  const letras = cadena.split(""); //Convertir cadena en array para usar forEach
  let palabra = ""; //Para almacenar los cambios a mayúscula aquí y que el resultado sea una palabra entera, no cada carácter

  letras.forEach((letra) => {
    const cambio = letra.toUpperCase();
    palabra += cambio;
  });

  callback(palabra);
}

function mayusculas(palabra) {
  console.log(palabra);
}

procesarCadena("mariposa", mayusculas);

//Ejercicio 1.4. Rest & Spread operators
//Nivel 1
//Ejercicio 1

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const array3 = [...array1, ...array2];
console.log(array3);

//Ejercicio 2
function suma2(...args) {
  console.log(args.reduce((total, num) => total + num, 0));
}

suma2(2, 3, 4);

//Nivel 2
//Ejercicio 3
const objecte1 = {
  nombre: "Naomi",
  edad: 25,
  ciudad: "Barcelona",
};

const objecte2 = { ...objecte1 };
console.log(objecte2);

objecte2.ciudad = "Madrid";
console.log(objecte2);
console.log(objecte1);

//Ejercicio 4
const array4 = [1, 2, 3, 4, 5, 6, 7, 8];

let primerNum, segundoNum, restoNum;

[primerNum, segundoNum, ...restoNum] = array4;
console.log(primerNum);
console.log(segundoNum);
console.log(restoNum);

//Nivel 3
//Ejercicio 5
function operador(a, b, c) {
  console.log(a + b, c);
}
const operadores = [5, 10, 20];

operador(...operadores);

//Ejercicio 6
const persona1 = {
  nombre: "Eli",
  edad: 30,
  ciudad: "Zaragoza",
};

const persona2 = {
  hoobies: "Viajar",
  trabajo: "óptica",
  coche: "seat",
};

const personas = {
  ...persona1,
  ...persona2,
};

console.log(personas);

//Ejercicio 1.5. Array transformations
//Nivel 1
//Ejercicio 1
const arrN = [1, 2, 3, 4];

const cuadrado = arrN.map((n) => n * n);
console.log(cuadrado);

//Ejercicio 2
const pares = arrN.filter((n) => n % 2 == 0);
console.log(pares);

//Ejercicio 3
const arrF = [1, 10, 8, 11];

const mayor = arrF.find((n) => n > 10);
console.log(mayor);

//Ejercicio 4
const arrR = [13, 7, 8, 21];

const sumar = arrR.reduce((acc, valor) => acc + valor);
console.log(sumar);

//Nivel 2
//Ejercicio 5
const arrL = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const operaciones = (arr) => (
  (arr = arr.filter((n) => n >= 10)),
  (arr = arr.map((n) => n * 2)),
  (arr = arr.reduce((acc, valor) => acc + valor))
);
console.log(operaciones(arrL));

//Nivel 3
//Ejercicio 6
const arrES = [11, 12, 13, 14];

const esMayor = (n) => n > 10;

const resultMayorE = arrES.every(esMayor);
const resultMayorS = arrES.some(esMayor);
console.log(resultMayorE);
console.log(resultMayorS);

//Ejercicio 1.6. Array loops
//Nivel 1
//Ejercicio 1
let noms = ["Anna", "Bernat", "Clara"];

noms.forEach((nom) => console.log(nom));

//Ejercicio 2
for (let value of noms) {
  console.log(value);
}

//Ejercicio 3
let numeros = [1, 2, 3, 4, 5, 6];

const paresF = numeros.filter((n) => n % 2 == 0);
console.log(paresF);

//Nivel 2
//Ejercicio 4
let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };

for (const clave in obj) {
  console.log(`${clave}:${obj[clave]}`);
}

//Ejercicio 5
for (let value of numeros) {
  console.log(value);
  if (value == 5) {
    break;
  }
}

//Nivel 3
//Ejercicio 6
for (let value of noms) {
  let index = noms.indexOf(value);
  console.log(`${value}, posición: ${index}`);
}

//Ejercicio 1.7. Promises $ Async/Await
//Nivel 1
//Ejercicio 1
function promesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("Hola, món"));
    }, 2000);
  });
}

promesa();

//Ejercicio 2
promesa().then(() => {
  console.log("Fin de la operación");
});

//Ejercicio 3
function promesa2(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      input == "Hola"
        ? resolve("Promesa resuelta")
        : reject("Promesa rechazada");
    }, 2000);
  });
}

promesa2("Hola")
  .then((mensaje) => console.log(mensaje))
  .catch((mensaje) => console.log(mensaje));
