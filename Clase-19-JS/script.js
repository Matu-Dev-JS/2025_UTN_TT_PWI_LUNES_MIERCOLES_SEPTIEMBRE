//CONST: Una variable que no varia de valor a lo largo de la ejecucion programa

//1.
//Constantes
//Los valores constantes primitivos se suelen escribir en UPPER_CAMEL_CASE
/* const PI = 3.14
const IVA = 21
 */
//2.
//Diccionarios
//Se suelen escribir en mayusculas con UPPER_CAMEL_CASE
/* const CONFIGURACION = {
    VERSION: '2.1',
    MAIN_MODULE: 'main.js'
} */

//3.
//Los objetos y arrays suelen escribirse en constante
//Esto es debido a que cuando una variable es un obj o un array  a lo largo de la ejecucion del programa esperamos que se mantenga la referencia

//const persona = {}

//Esto se puede ✅
//persona.nombre = 'pepe'

//ESTO NO ☠
//persona = {}


//Cuando creamos un objeto, este crea una referencia unica, la cual puede ser asignada a una variable

/* 
const persona_1 = {}
const persona_2 = {}

persona_2.nombre = 'pepe'
persona_1.edad = 21
console.log(persona_2.edad) */

//Las variables que guardan datos primitivos, no guardan la referencia, sino que guardan el dato (VALOR)

/* let nombre_1 = 'pepe'
let nombre_2 = nombre_1

nombre_2 = 'juan'

console.log(nombre_1) */

/* 
Listar mensajes:
*/


//DOM = Document Object Model

/* 
Imprimir los mensajes en pantalla
- Idealmente que la impresion la maneje una funcion llamada renderMessages()
*/

const mensajes = [
    {
        id: 1,
        content: 'Hola que tal!',
        author: 'pepe',
        created_at: 'hoy'
    },
    {
        id: 2,
        content: 'Todo bien?',
        author: 'maria',
        created_at: 'hoy'
    },
    {
        id: 3,
        content: 'Si, con mucho miedo por el calor',
        author: 'Pepe',
        created_at: 'hoy'
    },
]


//Paso 1: Llamar del HTML al contenedor donde mostraras los mensajes

//Que me devuelve getElementById 
//Devuelve un OBJETO
const contenedor_mensajes_HTML = document.getElementById('contenedor_mensajes')


//Paso 2: Recorrer la lista de mensajes y generar un string html de la lista

function renderMensajes (){
    let html_generado = ''
    for(const mensaje of mensajes){
        html_generado = html_generado + `
        <div>
            <h3>${mensaje.author}</h3>
            <p>${mensaje.content}</p>
            <span>${mensaje.created_at}</span>
        </div>
        `
    }
    
    contenedor_mensajes_HTML.innerHTML = html_generado
}


renderMensajes()