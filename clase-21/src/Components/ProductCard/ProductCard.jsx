import './ProductCard.css'

/* 
TODOS los componentes reciben props
props SIEMPRE es un objeto ( Si no props entonces sera un objeto vacio )
Cuando instanciamos el componente podemos pasarle props como atributos del componente EJ: <MiComponente title='test'/>
En este caso la prop es title, y props cuando sea instanciado sera un objeto: {title: "test"}
*/
function ProductCard(propiedades) {
    console.log(propiedades)
    return (
        <div className="product-card">
            <h2>{propiedades.title}</h2>
            <span>Price: ${propiedades.price} USD</span>
            <button>Comprar</button>
        </div>
    )
}


export default ProductCard