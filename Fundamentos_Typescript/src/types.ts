//Declaración de tipos
//Primitivos
let numeroPar: number = 8;
let nombre: string = "Italo";
let correcto: boolean = false;
console.log(`Nombre: ${nombre}\nNumero: ${numeroPar}\nCorrecto: ${correcto}`);

//Arreglos
let notas: number[] = [1, 2, 3];
let frutas: Array<string> = ["Manzana", "Pera", "Mango"];

//Any
let coeficiente: any;
coeficiente = "A";
console.log(coeficiente);
coeficiente = 2;
console.log(coeficiente);

//Funciones
//Atributos pueden ser declarados
//El valor de retorno es inferido por typescript
function suma2Numeros(number1: number, number2: number): number {
  return number1 + number2;
}
console.log(`Suma de ${4} y ${6} es ${suma2Numeros(4, 6)}`);
//Funciones asincronas
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
//Funciones anónimas
//Type infiere el tipo de la funcion anónima
frutas.forEach(function (fruta) {
  console.log(fruta.toUpperCase());
});
notas.forEach((numero) => {
  console.log(numero * numero);
});

//Objects y parametro opcional
// El parametro puede ser un tipo Object
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  //console.log(obj.last.toUpperCase());
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
printName({ first: "Gabriel" });
printName({ first: "Gabriel", last: "Miller" });

function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
printId("abcde");
printId(12345);

//Alias Type
//Permite utilizarlo con tipo object, union
type Point = {
  x: number;
  y: number;
};
type ID = number | string;

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

//Interfaces
interface NombreCompleto {
  nombre: string;
  apellido: string;
}

function printFullName(n: NombreCompleto) {
  console.log(`El nombre es: ${n.nombre} ${n.apellido}`);
}

printFullName({ nombre: "Italo", apellido: "Velita" });

//Type Assertions
//const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
//No funciona si es .tsx
//const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

/* //Literal Inference
declare function handleRequest(url: string, method: "GET" | "POST"): void;
// Directa
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
// Asignar literales
const req2 = { url: "https://example.com", method: "GET" };
handleRequest(req2.url, req2.method as "GET");

// Symbol Type
const firstName = Symbol("name");
const secondName = Symbol("name"); */

/* if (firstName === secondName) {
//This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.
//Can't ever happen
} */
