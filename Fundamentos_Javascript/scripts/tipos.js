/*
Nombre: Italo Velita Aguilar
*/

const ul = document.querySelector("ul");

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

const ejemplos = [
  // Primitivos
  12,
  12.1,
  NaN,
  Infinity,
  "texto",
  true,
  false,
  undefined,
  null,
  Symbol("id"),
  BigInt(123456789012345678901234567890n),

  // Funciones
  function () {},
  () => {},
  Persona,

  // Objetos
  [],
  {},
  { nombre: "Juan", edad: 30 },
  new Date(),
  new RegExp(".*"),
  new Error("algo falló"),
  new Persona("Ana", 25),
  new Animal("perro"),
  new Vehiculo("Toyota", "Corolla"),

  // DOM y navegador
  document,
  document.createElement("div"),

  // Clases
  class Temporal {},
  new (class Estudiante {
    constructor(nombre) {
      this.nombre = nombre;
    }
  })("Luis"),

  // APIs y estructuras
  new Map(),
  new Set(),
  new WeakMap(),
  new WeakSet(),
  new Int16Array(),
  new ArrayBuffer(16),
  JSON,
  Math,
  Promise.resolve(),
];

ejemplos.forEach((ejemplo) => {
  const li = document.createElement("li");
  let valor;
  try {
    valor = String(ejemplo);
  } catch {
    valor = "[valor no convertible]";
  }
  li.textContent = `${valor} : ${typeof ejemplo}`;
  ul.appendChild(li);
});
