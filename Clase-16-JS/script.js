
//Una funcion nos permite guardar un bloque de codigo en la memoria
//Una funcion es un tipo de dato
//Declaracion de la funcion

//Las funciones deberian tener como maximo UNA responsabilidad

//Solicitar por prompt a un numero
//Solicitar por prompt otro numero
//Hacer la suma entre a y b => esta deberia ser LA UNICA responsabilidad de sumar
//Elegir la salida, por alerta
/* function sumar(){
    let a = prompt()
    while(isNaN(a)){
        a = prompt('Ingresa un numero')
    }
    a = Number(a)

    let b = prompt()
    while(isNaN(b)){
        b = prompt('Ingresa un numero')
    }
    b = Number(b)

    alert(a + b)
}
 */

//Como podriamos mejorar a sumar?
//Mejoras:
//Hacer la suma entre a y b => esta deberia ser LA UNICA responsabilidad de sumar
//Elegir la salida, por alerta
/* function sumar(a, b){
    alert(a + b)   
}
sumar(6, 7)

let a  = prompt('ingresa un numero')
while(isNaN(a)){
    a = prompt('Ingresa un numero')
}
a = Number(a)
let doble_a = sumar(a, a) */

function sumar(a, b){
    return a + b  
}

let resultado = sumar(1, 1)
console.log(resultado)
alert(resultado)

//Invocar a la funcion sumar
/* 
sumar()
sumar()
sumar() */

//Referenciacion
//Estoy guardando en memoria que a apunta a la referencia de la funcion sumar
/* let a = sumar
a() */


/* 
Determina como es el saludo (osea decir hola + mati)
Mostrar por consola un saludo a MATI
*/

//DRY: Dont repeat yourself
//Un problema que tiene esta funcion es su poca reutilidad
//Para solucionarlo podemos crear un parametro
//Un paremetro es una forma de transferir informacion a nuestra funcion
/* function saludar( nombre ){
    console.log("Hola " + nombre)
}

saludar('pepe')
saludar('mati')
saludar('maria') */