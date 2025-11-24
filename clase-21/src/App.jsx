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
  return (
    <div>
      {titulo}
      <button>Hola</button>
      <ProductCard 
        title={'Tv LG 22\"'} 
        price={4000} 
        has_discount 
      />
      <ProductCard title={"Tv Noblex 34\""} price={3000} />
      <ProductCard title={"Tv samsung 42\""} price={5000}/>
      <ProductCard title={"Tv samsung 62\""} price={6000}/>
    </div>  
  )
}




/* CustomComponent */

function CustomComponent (){
  return (
    <h1>Soy un componente</h1>
  )
}


export default App
