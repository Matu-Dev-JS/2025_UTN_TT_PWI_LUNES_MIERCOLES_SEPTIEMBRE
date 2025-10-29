//BUCLES
/* 
Estructura que nos permite repetir un x bloque de codigo
*/
//FOR
//Bucle por contador/conteo
//Lo utilizamos cuando sabemos cuantas veces queremos repetir algo

//WHILE
//Mientras esta condicion se cumpla se ejecutara el bloque de codigo
//Bucle condicional, lo usamos cuando queremos repetir algo bajo una x condicion, o dicho de otra manera NO sabemos cuantas veces queres repetir algo

/* 
let nombre = prompt('Ingresa el nombre')
while(!nombre){
    nombre = prompt('Volve a ingresar el nombre')
} */


//Solicitar un numero y validarlo, si no es valido volver a solicitar hasta que lo sea
/* 
let numero = prompt("Ingresa un numero")

while(!numero || isNaN(numero)){
    alert('Error, numero no valido')
    numero = prompt("Ingresa el numero")
} 
*/


//Solicitar un nombre, y mietras el nombre no sea 'pepe' decir 'te equivocaste' y volver a solcitar
/* 
let nombre = prompt('Ingrese un nombre')

while(nombre !== 'pepe'){
    alert('Error, nombre no valido')
    nombre = prompt('Ingrese un nombre')
} 
*/

//Solicitar al usuario 3 numeros y luego calcular el promedio

//Esto es codigo repetitivo
//No cumple con el pricipio DRY
//Principio dry: Dont repeat yourself | NO TE REPITAS
/* let numero_1 = prompt('ingresa el primer numero')
let numero_2 = prompt('ingresa el segundo numero')
let numero_3 = prompt('ingresa el tercer numero') */


/* 
Solo usar ++ += -= /= *= 
En caso de que los conozcan
*/

/* let sumatoria = 0

//Quiero ejecutar 3 veces algo
for(
    let contador = 1; //Creo un contador interno
    contador <= 3; //Marco el limite SI ESTA CONDICION DA VERDADERA, SE EJECUTARA EL BLOQUE DE CODIGO
    contador = contador + 1 //Marco el ritmo de actualizacion
){
    let numero = prompt('Ingrese un numero')
    
    //acumulacion
    sumatoria = sumatoria + Number(numero)
}

let promedio = sumatoria / 3
console.log(parseInt(promedio))

//.toFixed es un metodo para numeros
//Devuelve un string ajustado a la cantidad de decimales que le pases
console.log(promedio.toFixed(2)) */

/* 
CALCULADORA
Va a soportar estas operaciones: +, -, *, /
1 - Solicitar una operacion y validarla (osea tiene que ser '+', '-', '*', '/')
2 - Solicitar 1 numero y validarlo (numero_1)
3 - Solicitar 1 numero y validarlo (numero_2)
4 - Dependiendo de la operacion seleccionada operar los 2 numeros


Aclaraciones:
- Cuando validamos si no es valido deberemos volver a solicitar
- Cuando la caculadora muestre el resultado, estaria bueno mostrar una salida limpia, por EJ: '3 + 3 = 6'
*/

/* 
Calculadora v1.0 
*/
const SUMA = '+'
const SUMA_TEXTUAL = 'sumar'
const RESTA = '-'
const MULTIPLICACION = '*'
const DIVISION = '/'

let operacion = prompt('Ingresa la operacion')

if (
    operacion !== SUMA
    &&
    operacion !== RESTA
    &&
    operacion !== MULTIPLICACION
    &&
    operacion !== DIVISION
) {
    alert('Error operacion no valida')
    operacion = prompt("Ingrese la operacion")
}

//Agrupamos las operaciones que necesitan de 2 numeros
if (
    operacion === SUMA
    ||
    operacion === RESTA
    ||
    operacion === MULTIPLICACION
    ||
    operacion === DIVISION
) {

    let numero_1 = prompt('Ingrese el primer numero')
    let resultado = 0

    while (!numero_1 || isNaN(numero_1)) {
        alert('Error, numero no valido')
        numero_1 = prompt("Ingresa el numero")
    }
    numero_1 = Number(numero_1)

    let numero_2 = prompt('Ingrese el primer numero')

    while (!numero_2 || isNaN(numero_2)) {
        alert('Error, numero no valido')
        numero_2 = prompt("Ingresa el numero")
    }
    numero_2 = Number(numero_2)

    if (operacion === SUMA) {
        resultado = numero_1 + numero_2
    }
    else if (operacion === RESTA) {
        resultado = numero_1 - numero_2
    }
    else if (operacion === MULTIPLICACION) {
        resultado = numero_1 * numero_2
    }
    else if (operacion === DIVISION) {
        resultado = numero_1 / numero_2
    }
    alert('El resultado de ' + numero_1 + ' ' + operacion + ' ' + numero_2 + ' = ' + resultado)
}



/* let dia = 1

if(dia == 1){
    console.log('domingo')
}
else if(dia == 2){
    console.log('lunes')
}
else if(dia == 3){
    console.log('martes')
}
else{
    console.log('dia no valido')
}

let numero_1 = prompt('Ingrese el primer numero')

while(!numero_1 || isNaN(numero_1)){
    alert('Error, numero no valido')
    numero_1 = prompt("Ingresa el numero")
}
numero_1 = Number(numero_1)

let numero_2 = prompt('Ingrese el segundo numero')
 */

/* 
Calculadora 2.0
- Solicitar una operacion:
    - '+' | 'sumar'
        - Solicita 2 numeros y los suma

    - '-' | 'restar'
        - Solicita 2 numeros y los resta

    - '*' | 'multiplicar'
        - Solicita 2 numeros y los multiplica

    - '/' | 'dividir'
        - Solicita 2 numeros y los divide

    - 'promediar'
        - Solicita la cantidad de numeros a promediar
        - Promedia (Solicita la cantidad de numeros, los acumula y los divide por la cantidad)

    - 'iva'
        - Solicita un numero 
        - Calcula el 21% de ese numero
*/