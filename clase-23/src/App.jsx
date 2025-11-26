import { useState } from "react"
import Contador from "./Components/Contador/Contador"


function App (){
  /* 
  Por que quiero un estado? Necesito una variable que al actualizarla me re-renderize el componente
  Para poder crear estados React nos ofrece la funcion useState
  Esta funcion devuelve un array y espera recibir un valor inicial
  LOS ESTADOS SON INMUTABLES, no debes reasignarlos directamente ni cambiar su valor, para cambiar el valor del estado DEBES USAR la funcion setter
  El array retornado tiene 2 posiciones:
    - Posicion 0: valor del estado
    - Posicion 1: funcion setter para actualizar el estado
        - Esta funcion la usaremos cuando queramos actualizar el valor de mi estado, PERO OJO, AL LLAMAR A ESTA FUNCION ESTARAS RE-RENDERIZANDO EL COMPONENTE (ESTO QUIERE DECIR QUE EL COMPONENTE SE VOLVERA A LEER)
  */
  /* Creo el estado */
  const texto_mostrado_state = useState('hola mundo')

  /* Guardo el valor del estado en otra variable (Opcional) */
  const texto_mostrado_value = texto_mostrado_state[0]

  /* Guardo el set del estado en otra variable (Opcional) */
  const setTextoMostrado = texto_mostrado_state[1]

  console.log(texto_mostrado_value)

  function cambiarTexto (){
    setTextoMostrado('TEXTO actualizado')
  }

  console.log('Me renderize')

  /* 
  Crear un parrafo con 10 palabras
  Crear un estado que diga elParrafoEstaExtendido, que sera un estado booleano
  Inicialmente el estado sera false
  Si el estado es true mostrara el parrafo con 10 palabras y un ...<button>Ver menos</button>
  El boton 'ver menos' llamara a una funcion llamada axhicarParrafo() la cual cambiara el valor del estado a false
  Si el estado es false mostrara un parrafo mas chiquito (5 palabras) y un ...<button>Ver mas</button>
  El boton 'ver mas' llamara a una funcion llamada extenderParrafo() la cual cambiara el valor del estado a true
  */
  /* Ejemplo  */
  /* 
  const isOpenState = useState(false)
  const isOpenValue = isOpenState[0]
  const setIsOpen = isOpenState[1] 
  */
  function limitarParrafoPorPalabras (texto, cantidad_de_palabras){
    return texto.split(' ').splice(0, cantidad_de_palabras).join(' ') + '...' 
  }

  /* let palabras = 'hola mundo que tal'.split(' ') // ['hola', 'mundo', 'que', 'tal']
  let palabrasLimitadas = palabras.splice(0, 2) // ['hola', 'mundo']
  let mensaje = palabrasLimitadas.join(' ') // 'hola mundo' */
  /* let parrafo = 'hola que tal'
  let mensaje_final = isOpen ? parrafo : limitarParrafoPorPalabras(parrafo, 2) */

  let parrafo_original = 'hola que tal todo bien que tal, todo bien que tal'

  const parrafoEstaExtendidoState = useState(false)
  const parrafoEstaExtendidoValue = parrafoEstaExtendidoState[0]
  const setParrafoEstaExtendido = parrafoEstaExtendidoState[1]

  function extenderParrafo(){
    setParrafoEstaExtendido(true)
  }

  function achicarParrafo(){
    setParrafoEstaExtendido(false)
  }

  function alternarParrafoEstaExtendido(){
    setParrafoEstaExtendido(!parrafoEstaExtendidoValue)
  }
  return (
    <div>
      <span>El texto mostrado es: {texto_mostrado_value}</span>
      <button onClick={cambiarTexto}>Cambiar texto</button>

      <p>
        {
          parrafoEstaExtendidoValue 
          ? parrafo_original
          : limitarParrafoPorPalabras(parrafo_original, 5) + '...'
        }
      </p>
      {
        parrafoEstaExtendidoValue
        ? <button onClick={achicarParrafo}>Ver menos</button>
        : <button onClick={extenderParrafo}>Ver mas</button>
      }
      <Contador/>
    </div>
  )
}

export default App

