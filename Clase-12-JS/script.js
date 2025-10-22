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


//OPERADORES ARITMETICOS

//+ Concatenacion: 
//Retorna string
//Ocurre cuando en la operacion hay un string
//El dato no string se transformara a string
//Una vez transformado los string se unen

1 + '1'
String(1) + '1'
'1' + '1'
'11'


//Retorna numeros
//Transforma a numero a el operando que no sea numero

//+ Suma
//Ocurre cuando no hay string
/* 
1 + false
1 + Number(false)
1 + 0
1

true + null
Number(true) + Number(null)
1 + 0
1 
*/

//- Restar
4 - '4'
4 - Number('4')
4 - 4
0

'pepe' - 1
Number('pepe') - 1
NaN - 1
NaN

String(true) - null
'true' - null
Number('true') - Number(null)
NaN - 0
NaN

Boolean( String( undefined + 1 ) ) - 'pepe'
/* 
Boolean( String( NaN + 1 ) ) - 'pepe'
Boolean( String( NaN ) ) - 'pepe'
true - 'pepe'
1 - NaN
NaN 
*/

// / dividir
// * multiplicar

//Excepcion de NaN, NaN sumado, restado, multiplicado o dividido da NaN


//Comparadores
//Son operadores que nos permiten hacer comparaciones entre datos
//Siempre devuelven boolean
//Excepcion de null: Solo es igual a si mismo y a undefined
//Excepcion de NaN: No se puede comparar con ningun dato, nisiquiera consigo mismo

// == : Es igual a 
1 == 1
1 == '1'
1 == true
true == '1'
null == false
null == 0
NaN == NaN

/* dato = '19'
isNaN(dato) //false, osea ES un numero */

// === : Es estrictamente igual a
//Compara valor y TIPO DE DATO
1 === '1' //falso

// != : Es distinto de
//Es verdad que x_valor es distinto de y_valor?
7 != 8 //true
'pepe' != 'maria' //true
1 != '1' //false


// !== : Es estrictamente distinto de
1 !== '1' //true 

// > : Mayor
// < : Menor
// >= : Mayor o igual
// <= : Menor o igual

//JS haciendo de las suyas 🤬☕
typeof(null) //object
Number(null) //0
null == 0 //false
null > 0 //false
null < 0 //false
null >= 0 //true
null <= 0 //true


//Operadores Logicos

//! NOT:
//Se usa para negar
//Retorna el valor booleano opuesto
//!1 //false
//!'pepe'//false

/* is_verified = true
is_not_verified = !is_verified */


//Selectores
//&& AND:
//Selecciona el primer valor si es falsy y sino selecciona el segundo
/* null && true //null

false && false //false
false && true  //false
true && false  //false
true && true   //true

is_verified && have_permision */

//|| OR:
//selecciona el primero si es verdadero, sino selecciona el segundo

/* false || false  //false
false || true   //true
true  || false  //true
true  || true   //true

is_admin || have_permision


'pepe' || 'juan' //'pepe'


Boolean(null + NaN) || 9 //9

false || null //null
 */
//Variables
//Nos permiten guardar datos en memoria

//Declarando una variable
let nombre = 'juancito'

//Reasingnando una variable
nombre = 'pepito'

//Si esto se cumple pasa esto
if(nombre === 'juan' || nombre === 'pepito'){
    console.log("Te dejo pasar")
}
//Sino pasa esto otro
else{
    console.log('Patada ninja 🐱‍👤')
}