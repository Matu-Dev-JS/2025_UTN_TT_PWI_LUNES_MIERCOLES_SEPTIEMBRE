
/* 
Cuando una funcion retorna HTML la llamamos Componente
Los componentes deben ir en UpperCamelCase
Cuando queremos usar un componente decimos que queremos instanciar un componente
Para instanciar un componente se debe usar el componente "as a component" (como componente)
EJ: <CustomComponent/>
*/
function App() {


  return (
    <div>
      <h1>Hola mundo</h1>
      <button>Hola</button>
      <CustomComponent/>
      <CustomComponent/>
      <CustomComponent/>
      <CustomComponent/>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>  
  )
}

/* CustomComponent */

function CustomComponent (){
  return (
    <h1>Soy un componente</h1>
  )
}

function ProductCard (){
  return (
    <div>
      <h2>Tv samsung</h2>
      <span>Price: $4000 USD</span>
      <button>Comprar</button>
    </div>
  )
}

export default App
