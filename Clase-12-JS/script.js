/* 
comentario multilinea
*/
//Comentario unilinea


/* Ejecutar mensaje por consola: 'hola mundo' */
//console.log('hola mundo')

//TIPOS DE DATOS PRIMITIVOS

//string: Cadena de texto
//Se usan: "", ''
'hola'
"hola"
'1'
' '
''

//number: Numeros
1
5
-5
5.1
-5.1
0
NaN //Not a Number, JS lo usa cuando transformamos a numero un dato NO TRANSFORMABLE a numero

//boolean: Se usan para representar el verdadero y el falso
true
false

//null: Representa nulidad (AUSENCIA DE DATO)
null

//undefined: Representa cuando no se define un dato
undefined

//Conversores/Constructores
//Nos permiten transformar un dato en otro tipo de dato

//typeof() nos permite saber el tipo de dato de algo
//typeof('') 'string'
//typeof(undefined) 'undefined'


//Number: Me permite trasnformar a number
/* console.log(typeof(Number('1'))) //number
console.log(typeof('1'))//string

console.log(Number('pepe')) 
console.log(typeof(NaN))

console.log(Number(''))//0
console.log(Number('0'))
console.log(Number(null))
console.log(Number(false))
console.log(Number(true))
console.log(Number(undefined)) //NaN */

//String: Me permite transformar a string

String(true) //'true'
String(null) //'null'

//Boolean: Me permite trasnformar a booleano

//Existen 2 categorias de datos:
//Falsy / falsos: Son aquellos que al transformarlos a booleano nos dan false
/* 
0
''
null
undefined
NaN 
*/

//Truthy / verdaderos: Son aquellos que al transformarlos a booleano nos dan true
// Todo lo que no este en la lista de falsy es truthy

/* 
Boolean(Number('pepe')) //false
Boolean(1.0) //true 
// */