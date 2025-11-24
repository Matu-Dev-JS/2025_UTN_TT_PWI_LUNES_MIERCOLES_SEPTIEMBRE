import './ProductCard.css'

/* 
TODOS los componentes reciben props
props SIEMPRE es un objeto ( Si no props entonces sera un objeto vacio )
Cuando instanciamos el componente podemos pasarle props como atributos del componente EJ: <MiComponente title='test'/>
En este caso la prop es title, y props cuando sea instanciado sera un objeto: {title: "test"}
*/

/* 
false, null y undefined no se renderizan
*/
function ProductCard(propiedades) {


    console.log(propiedades)

    /* Opcion 1 */
    let oferta = null
    if(propiedades.has_discount){
        oferta = <span>Oferta</span>
    }
    return (
        <div className="product-card ">
            {/* Opcion 2 If simple */}
            {propiedades.has_discount && <span>Oferta</span>}

            {/* Opcion 3Ternario */}
            {
                propiedades.has_discount
                ? <span>Oferta</span>
                : <span>No hay oferta</span>
            }
            {oferta}
            <h2
                style={
                    {
                        color: 'red'
                    }
                }
            >{propiedades.title}</h2>
            <span>Price: ${propiedades.price} USD</span>
            <button>Comprar</button>
        </div>
    )
}


export default ProductCard