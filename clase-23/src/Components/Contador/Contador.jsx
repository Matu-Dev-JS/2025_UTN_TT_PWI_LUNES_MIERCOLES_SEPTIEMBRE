/* 
Crear el componente contador
El contador debera empezar en 0 e imprimirse en la pantalla
Deberemos tener las acciones:
    - incrementarContador(): Incrementara el contador en 1 
    - decrementarContador(): Decrementara el contador en 1
No se puede incrementar mas de 10 
No se puede decrementar menos de 1
Llamar el componente en App
*/

import { useState } from 'react'
function Contador(){
    const contadorState = useState(1)
    const contador_value = contadorState[0]
    const setContador = contadorState[1]
    function incrementarContador(){
        if(contador_value < 10){
            setContador(contador_value+1)
        }
    }
    function decrementarContador(){
        if(contador_value > 1){
            setContador(contador_value-1)
        }
    }

    return(
        <div>
            <button onClick={decrementarContador} disabled={contador_value === 1}>decrementar</button>
            <span>{contador_value}</span>
            <button onClick={incrementarContador} disabled={contador_value === 10}>Incrementar</button>
        </div>
    )
}
export default Contador