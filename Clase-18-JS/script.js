//DOM
//DOCUMENT Object Model
/* 
El dom es un objeto global de JS que guarda la informacion de toda la pagina
EN OTRAS PALABRAS Una representacion virtual de la pagina
*/

//Quiero mostrar por consola el texto que tiene mi H1

//Para poder llamar a mi h1 podemos usar .getElementById
//nos devolvera un elemento del HTML (objeto)
let titulo = document.getElementById("titulo")

//console.dir(titulo.innerText)

//Modifico el texto interno del h1
titulo.innerText = 'pepe'



/* content_container.innerHTML = '<button>Click</button>' */


/* let product_detail = {
    title: 'Tv samsung',
    price: 4000
}

//Templete string
content_container.innerHTML = `
    <h2>${product_detail.title}</h2>
    <span>Precio: $${product_detail.price}</span>
    <button>Comprar</button>
` */

let products = [
    {
        title: 'Tv samsung 32',
        price: 4000
    },
    {
        title: 'Tv samsung 42',
        price: 5000
    },
    {
        title: 'Tv samsung 52',
        price: 6000
    },
    {
        title: 'Tv samsung 64',
        price: 7000
    },
]

let content_container = document.getElementById('content')
function renderProducts () {
    let html = ''

    for(let product of products){
        html = html +  `
            <h2>${product.title}</h2>
            <span>Precio: $${product.price}</span>
            <button>Comprar</button>
        `
    }

    content_container.innerHTML = html
}


renderProducts()

/* //Una funcion es un bloque de codigo guardado en memoria
function saludar (nombre) {
    console.log('Hola ' + nombre)
}

saludar("Paula")
saludar('Tobias') */

function agregarProducto (){
    let title = prompt("Ingresa el title del producto")
    let price = prompt("Ingresa el precio del producto")

    let producto = {
        title: title,
        price: price
    }
    //Agrega un elemento al final de la lista
    products.push(producto)
    renderProducts()
}
/* 
Crear una funcion llamada agregarProducto(), la misma solicitara por prompt un title y un price
Luego creara un objeto con estos datos y lo agregara al array de products
Una vez agregado debera llamarse a renderProducts()
*/

/* 
Crear una funcion llamada eliminarProductoPorTitle que reciba el title y lo busque en la lista, si lo encuentra
debe eliminarlo.
Al modificar la lista debes llamar a renderProducts()

*/



/* for(let i = 0; i < products.length; i = i + 1){
    let product = products[i]
    html = html +  `
        <h2>${product.title}</h2>
        <span>Precio: $${product.price}</span>
        <button>Comprar</button>
    `
} */