//Arrays

/* 
Son un nuevo tipo de dato que nos permiten enlistar valores
Los valores pueden ser de cualquier tipo de dato
Los arrays son listas ordenadas, es decir que SI importa la posicion de un elemento dentro de un array
Cada elemento guarda un valor de indice, que empieza en 0 y puede terminar en cualquier numero positivo
*/

/* let notas = [
    8, //El indice es: 0
    2, //El indice es: 1
    10 //El indice es: 2
] */
/* 
let persona = ['pepe', 40, 700]

//Modifico una propiedad del array
persona[0] = 'juan'

//Eliminamos un elemento por su numero de indice
delete persona[1]

//Para acceder a un elemento de nuestro array debemos usar su numero de indice
console.log(persona[0])

 */

//Los arrays cuentan con una propiedad que nos permite saber cuantos elementos hay dentro del array
//console.log(notas.length)


//Para manipular los arrays podemos utlizar metodos 
//Los metodos son funcionalidades asosciadas al array
//Metodos

let nombres = ['pepe', 'juan', 'sofia']

//Para agregar un elemento al final del array PUSH
//Este es un metodo MUTABLE, lo que quiere decir que modifica el array original
//nombres.push('messi')

//Para eliminar un elemento al final del array pop
//Este es un metodo MUTABLE, lo que quiere decir que modifica el array original
//nombres.pop()

//Para agregar un elemento al principio del array unshift
//Este es un metodo MUTABLE, lo que quiere decir que modifica el array original
//nombres.unshift('messi')

//Para eliminar un elemento al principio del array shift
//Este es un metodo MUTABLE, lo que quiere decir que modifica el array original
//nombres.shift()

//Para averiguar el indice de un elemento
//indexOf
//Si no lo encuentra traera -1

//console.log('El indice de pepe es: ' + nombres.indexOf('pepe'))

/* 
Su traduccion es empalmar
splice necesita almenos 2 parametros
1. La posicion desde donde vamos a operar
2. Cuantos elementos quiero eliminar desde esa posicion (Si es 0 no se cortara nada)
3. Elementos que quiero agregar a esa posicion (los elementos desplazaran hacia el final a los que le siguen)
Lo podemos usar la eliminar por posicion

*/
//splice

//Primero debemos averiguar la posicion del elemento a eliminar
let posicion = nombres.indexOf('juan')

//Quito a juan y agrego a nicolas y juancito
//nombres.splice(posicion, 1, 'juancito', 'nicolas')

//Agrego a nicolas y juancito en la posicion de juan
//nombres.splice(posicion, 0, 'juancito', 'nicolas')

//Elimino a juan
//nombres.splice(posicion, 1)

console.log(nombres)
