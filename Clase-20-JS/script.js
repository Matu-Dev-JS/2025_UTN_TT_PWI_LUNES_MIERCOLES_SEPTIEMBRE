/* 
EVENTOS
Son acciones que suceden en el navegador, cuando estas acciones suceden nosotros podemos ejecutar otra accion en consecuencia
*/

const btn_click = document.getElementById('btn')

//Accion
function decirHolaMundo(){
    alert('Hola mundo')
}

//Es el metodo para asociar un evento a una funcion
//1er parametro el event_key (osea el evento)
btn_click.addEventListener(
    'click',
    decirHolaMundo //Referencia de la funcion
)



/* 
Parte 1:
- Crear una variable interna llamada contador que empieze en 0
- Mostrar el valor de contador en el span con id contador
- Crear una funcion que se llame incrementarContador()
    Esta funcion incrementara el contador en 1 y mostrara el valor de contador en el span con id contador
- Si le doy 'click' al boton con id 'btn-incrementar' debera ejecutarse la funcion incrementarContador()

Parte 2:
- Crear una funcion llamada decrementarContador()
- Cuando de click sobre el boton con id 'btn-decrementar' debera ejecutarse la funcion decrementarContador()
- Crear una funcion llamada resetContador() (llevara el contador a 0)
- Cuando de click sobre el boton con id btn-reiniciar se debera activar la funcion btn-reiniciar
*/

let contador = 0;
const spanContador = document.getElementById("contador");
const btnIncrementar = document.getElementById("btn-incrementar");
const btn_decrementar = document.getElementById("btn-decrementar")
const btn_reiniciar = document.getElementById("btn-reiniciar")


/* Responsabilidad: mostrar el valor actual de la variable contador */
function renderContador (){
    spanContador.textContent = contador;
}

/* Responsabilidad: Cambiar el valor del estado y re-renderizar */
function setContador(nuevo_contador){
    contador = nuevo_contador 
    renderContador()
}

renderContador()

function incrementarContador() {
    setContador(contador + 1)
}

function decrementarContador(){
    setContador(contador - 1)
}

function resetContador(){
    setContador(0)
}



btnIncrementar.addEventListener(
    "click", 
    incrementarContador
);

btn_reiniciar.addEventListener(
    "click",
    resetContador
)
btn_decrementar.addEventListener(
    "click",
    decrementarContador
)


/* 
- Renderizar la lista, cada elemento debe estar como li de una ol
- Abajo deberas tener un formulario para crear una tarea, debera tener un campo con textarea
*/

const lista_tareas = [
    'Limpiar cocicna',
    'Lavar ropa',
    'Estudiar'
]



const orderList = document.getElementById('tareas')
function renderizarLista(){
    html = ''
    for(let tarea of lista_tareas){
        html = html + `
        <li>${tarea}</li>
        `
    }
    orderList.innerHTML= html
}
renderizarLista()


const formulario_tarea = document.getElementById('formulario-tarea')



function crearTarea (event){
    console.log('hola')
    event.preventDefault()
    const description_textarea = formulario_tarea.description
    const description_value = description_textarea.value

    //agregamos la tarea
    lista_tareas.push(description_value)

    //Limpiamos el formulario
    description_textarea.value = ''
    renderizarLista()
}

formulario_tarea.addEventListener(
    'submit',
    crearTarea
)