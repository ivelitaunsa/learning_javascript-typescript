/*
Nombre: Italo Velita Aguilar
*/

// var
// Suele ser usado como variable global
var variableGlobal = 10
document.getElementById("variableGlobal1").innerHTML = "variableGlobal = " + variableGlobal
function ejecutarEjemploVar() {
        variableGlobal = 100
        document.getElementById("variableGlobal2").innerHTML += variableGlobal
    if(true) {
        variableGlobal = 5
        document.getElementById("variableGlobal3").innerHTML += variableGlobal
    }
}
function mostrarVar() {
    document.getElementById("variableGlobal1").innerHTML = "variableGlobal = " + variableGlobal
}

// let
// Suele ser usado mas que todo para respetar el scope de la variable, por esa razon debe declararse siempre en cada bloque
let variable = "Luis"
document.getElementById("variable1").innerHTML = "variable let = " + variable
function ejecutarEjemploLet() {
    let variable = "Raúl"
    document.getElementById("variable2").innerHTML += variable
    if(true) {
        variable = "Alex"
        document.getElementById("variable3").innerHTML += variable
    }
}
function mostrarLet() {
    document.getElementById("variable1").innerHTML = "variable let = " + variable
}


// const
// La principal característica es que no se puede modificar, aunque con arrays tiene un comportamiento inusual
const constante = true
document.getElementById("constante1").innerHTML = "constante = " + constante
function ejecutarEjemploConst() {
    constante = false
    document.getElementById("constante2").innerHTML += constante
}
const cosas = [1, "naranja", true]
document.getElementById("arreglo1").innerHTML = "arreglo constante = " + cosas
function cambiarElementos() {
    cosas[0] = 0
    cosas[1] = "manzana"
    cosas[2] = false
    cosas.push("zapato")
    document.getElementById("arreglo2").innerHTML += cosas
}