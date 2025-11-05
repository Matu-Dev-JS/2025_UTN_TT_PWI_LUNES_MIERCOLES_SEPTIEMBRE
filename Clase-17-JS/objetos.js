/* 
Objeto:
Es un tipo de dato que nos permite describir una entidad
que puede tener un conjunto de propiedades
*/

//Objeto literal
/* 
Literalmente estamos escribiendo como queremos que sea nuestro objeto
*/
/* 
El objeto tiene propiedades/claves y valores asociados, tiene la forma de una tabla clave-valor
*/
/* 
Los objetos se usan en casi todos lados debido a que son muy faciles de manipular y tienen la capacidad de contener muchos datos
*/
let personaje = {
    "nombre": 'Pepe',
    "vida": 900,
    "edad": 90,
    "dinero": 1200
}

//Modificar la propiedad de un objeto
personaje['nombre'] = 'juan'

//Extiendo/Creo una nueva propiedad de un objeto
personaje['pais'] = "Argentina"

//Elimino una propiedad
delete personaje['dinero']

//Accedo a una propiedad inexistente (esto dara undefined)
//console.log(personaje['propiedad-random'])


console.log("hola me llamo " + personaje['nombre'])
console.log(personaje['propiedad-random'])

/* 
Creen 2 objetos llamado pais_1, pais_2
- PBI
- Cantidad Habitantes
- Continente
- Nombre
- Cantidad de superficie en M2
- Fecha fundacion
*/

let pais1 = {
    "nombre real" : "Argentina",
    "continente" : "America",
    "poblacion_total" : 45000000,
    "superficeEnM2": 4000000,
    "pbi" : "633300000"
}
let pais2 = {
    "nombre" : "Colombia",
    "continente" : "America",
    "poblacion_total" : 52000000,
    "superfice en m2": 4000,
    "pbi" : "418500000"
}

//Notacion de puntos
//Es una forma abreviada de escribir: 
//console.log(pais1['continente'])
//NO podemos usar notacion de puntos si la propiedad del objeto lleva espacios, guiones medios, +, *, /, =
//Recomendacion: Escribir las propiedades en camelCase o snake_case
/* 
console.log(pais1.continente) */

//Notacion de corchetes
/* 
console.log(pais1['nombre real'])
pais1.nombre 
 */
let propiedad_a_elegir = prompt('Que propiedad queres, nombre o continente')
//Esto esta bien
console.log(pais2[propiedad_a_elegir])

//Este no, por que?
console.log(pais2.propiedad_a_elegir) //Enrealidad se lee como pais2['propiedad_a_elegir']