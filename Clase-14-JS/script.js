


//Condicionales

//Bucles


//JS es un lenguaje debilmente tipado
//JS es un lenguaje de tipado dinamico

//Variables
//Es la forma de guardar datos en memoria con JS

//Declaracion
//Cuanto valdra dinero si no tiene un valor incial?
//undefined
/* var dinero
console.log(dinero) */

//Declaramos la variable nombre y le asignamos el valor 'pepe'
/* var nombre = 'pepe'
var edad = 80 */

//Reasignacion
/* dinero = 100
console.log(dinero) */

//La variable VAR ya no se usa
//EcmaScript
//ES6: LET y CONST

//Declaracion de una variable
//LET ES LA VARIABLE QUE MAS VAMOS A USAR POR AHORA
/* let edad = 90

let numero = 10

numero = 20

edad = 'pepe' */

//CONST: Variable constante
//NO se pueden reasignar
//Usamos este tipo de variable para valores que seran los mismos desde el principio a fin de nuestro programa
/* 

const PI = 3.14
PI = 40
const PORCENTAJE_IVA = 21
const version = 1

 */


/* 
let nombreUsuario
let nombre_usuario
let $nombreUsuario
let esMayorYCumple
let es_mayor_y_cumple
let aAndB

 */


//Funciones nativas

//console.log() => Enviar mensaje por consola
//alert() => Activa un popup en el navegador
//alert('hola')

//prompt() => Activa un popup en navegador con un INPUT
//prompt retorna null si das al boton de 'cancelar'
//Sino retorna el string que escribio el usuario

/* let mensaje = 'ingresa tu nombre'
//Nombre valdra el resultado del prompt
//COMO GUARDAR UN RESULTADO DE PROMPT EN UNA VARIABLE
let nombre = prompt(mensaje)

if(nombre == null){
    console.log('Error: El usuario cancelo')
}
else{
    console.log('El nombre del usuario es: ' + nombre)
}
 */

//Bloques de codigo
//Es un fragmento de codigo
/* let numero_a = 0
{
    //Si declaro una let o const dentro de un bloque de codigo
    //Dicha variable dejara de existir cuando se termine de ejecutar el bloque de codigo
    //Esta eliminacion automatica de la variable la maneja el garbarage storage
    let numero_a = prompt('Dame un numero')
    console.log("El numero del usuario es " + numero_a)
}

{
    let numero_a = 20

}
console.log("El numero del usuario es " + numero_a)
 */

/* 
let nombre = 'pepe'

{
    console.log(nombre) // pepe
    nombre = 'maria'
    {
        let nombre = 'lucas'
    }
    console.log(nombre) //maria
    {
        nombre = 'carlos'
    }
    console.log(nombre) //carlos
    {
        let nombre 
        {
            console.log(nombre) //undefined
        }
    }
    console.log(nombre) //carlos
}
console.log(nombre) //carlos 
// */

/* let edad = 90 */

//CONDICION
//Puedo elegir que bloque de codigo ejecutar en base a una condicion
/* if(edad >= 18){
    let mensaje = 'Sos mayor de edad'
    console.log(mensaje)
}
else {
    let mensaje = 'Sos menor de edad'
    console.log(mensaje)
}

console.log(mensaje) */

/* 
Solicitar un nombre, si el nombre es 'pepe' decir por consola 'podes pasar' sino decir por consola 'patada ninja 🐱‍👤'
*/

/* let nombre = prompt('Dame tu nombre')
if (nombre === 'pepe'){
    console.log('podes pasar')
}
else{
    console.log('patada ninja 🐱‍👤')
} */


//Validar un numero
//Solicitar un dato al usuario
//Si el dato es un numero entonces mostrar por consola 'Dato valido'
//SINO mostrar por consola 'Dato invalido'
/* let data = prompt('Ingresa un número')
if (Number(data) || data === '0') {
    console.log('Dato válido')
}
else {
    console.log('Dato inválido')
} */
let nombre = '  pepe '
nombre.trim() //'pepe'
/* let numero = prompt("Ingrese un numero");
if (Number(numero) || numero === '0' ){
    console.log("dato valido")
    console.log(numero)
}else{
    console.log("dato invalido")
} */

let numero = null

//Alternativa larga:
//if( numero !== null && numero !== ''  && !isNaN(numero) ){

if( numero && !isNaN(numero) ){
    console.log('dato valido')
}