import MessagesContainer from './Components/MessagesContainer/MessagesContainer'
import ProductCard from './Components/ProductCard/ProductCard'
/* 
Cuando una funcion retorna HTML la llamamos Componente
Los componentes deben ir en UpperCamelCase
Cuando queremos usar un componente decimos que queremos instanciar un componente
Para instanciar un componente se debe usar el componente "as a component" (como componente)
EJ: <CustomComponent/>
*/
function App() {

  let titulo = <h1>Hola mundo</h1>

  const products = [
    { title: "Tv LG 22\"", price: 4000, id: 1},
    { title: "Tv Noblex 34\"", price: 3000, id: 2 },
    { title: "Tv samsung 42\"", price: 5000, id: 3 },
    { title: "Tv samsung 62\"", price: 6000, id: 4 }
  ]
  /* 
  Opcion 1 (poco usado) FOR OF
  const products_jsx = []

  for (const product of products) {
    products_jsx.push(
      <ProductCard title={product.title} price={product.price} />
    )
  } 
  */

  //Opcion 2 (RECOMENDADA) usar map
  /* 
  map es un metodo de arrays (osea solo se puede aplicar sobre un array)
  map sirve para crear un nuevo array a partir del original
  map internamente tiene un for of y por cada elemento del array ejecutara la callback
  Lo que retorne la callback de map sera el nuevo valor del elemento
  MAP ES UN METODO NO MUTABLE, NO MODIFICA EL ARRAY ORIGINAL
  */
  const products_list_JSX = products.map(
    function (product){
      return <ProductCard title={product.title} price={product.price} key={product.id}/>
    }
  )

  console.log({products_list_JSX})



  return (
    <div>
      {titulo}
      <button>Hola</button>
      {products_list_JSX}
      {/* <MessagesContainer/> */}
    </div>
  )
}




/* CustomComponent */

function CustomComponent() {
  return (
    <h1>Soy un componente</h1>
  )
}


export default App
