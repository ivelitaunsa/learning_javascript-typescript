/*
Nombre: Italo Velita Aguilar
*/

//Funciones sin parametro
function imprimirFormatoFuncion() {
    document.getElementById("funcionSinParametro").innerHTML = `
    function imprimirFormatoFuncion() {
        document.getElementById("funcionSinParametro").innerHTML = "Hola"
    }
    `
}

//Funciones con parametros
function producto2Numeros(input1, input2) {
    let n1 = parseFloat(input1.value);
    let n2 = parseFloat(input2.value);

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("producto2Numeros").innerHTML = "Producto = Valor inválido";
        return;
    }

    //Usando funcion con retorno
    let producto = producto2NumerosReturn(n1, n2)
    document.getElementById("producto2Numeros").innerHTML = "Producto = " + producto;
}

//Funciones con valor de retorno, pueden asignarse a variables
function producto2NumerosReturn(input1, input2) {
    return input1 * input2
}

// Funciones lambda dentro de promesas
// Función para obtener los datos de un usuario desde la API y calcular la longitud de su nombre completo
function obtenerUsuarioYCalcularLongitud() {
    // Realizamos una consulta a la API de JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/users/1')  // Obtenemos el usuario con ID 1
        .then(response => response.json())  // Convertimos la respuesta a formato JSON
        .then(data => {
            const nombreCompleto = data.name;  // Obtenemos el nombre completo del usuario
            const longitudNombreCompleto = calcularLongitudNombre(nombreCompleto);  // Calculamos la longitud
            document.getElementById("resultadoApi").innerHTML = `Nombre completo: ${nombreCompleto}<br>Longitud del nombre completo: ${longitudNombreCompleto}`;
        })
        .catch(error => {
            document.getElementById("resultadoApi").innerHTML = "Hubo un error al obtener el usuario.";
            console.error("Error al obtener datos de la API:", error);
        });
}

// Función para calcular la longitud de un nombre usando una función lambda
const calcularLongitudNombre = (nombreCompleto) => nombreCompleto.length;
