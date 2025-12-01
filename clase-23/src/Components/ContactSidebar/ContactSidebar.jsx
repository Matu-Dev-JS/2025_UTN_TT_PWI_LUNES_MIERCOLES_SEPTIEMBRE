/* 
Snippet para crear un componente de react
RFC = React Functional Component
*/

import React, { useEffect, useState } from 'react'
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactList from '../ContactList/ContactList'
import { getContactList } from '../../services/contactService'

export default function ContactSidebar() {
    const [contactState, setContactState] = useState([])
    const [loadingContactsState, setLoadingContactState] = useState(true)

    /* loadContactList tiene la responsabilidad de cargar del servicio la lista de contactos */
    function loadContactList (){
        setLoadingContactState(true)
        /* Esta funcion nos permite atrasar la ejecucion de otra funcion
        Recibe 2 parametros: 
        1. La accion a retrasar
        2. La cantidad de retraso en milisegundos (ms) (1000ms = 1s)
        */
        /* Cargar la lista de contactos dentro de 2s */
        setTimeout(
            function () {
                console.log('Cargando la lista de contactos')
                //Cargo la respuesta del servidor
                const contact_list = getContactList()
                //Guardo la respuesta en mi estado
                setContactState(contact_list)
                setLoadingContactState(false)
            },
            2000
        )
        
    }

        /* 
        La funcion useEffect nos permite controlar cuantas veces una funcion sera invocada
        useEffect espera recibir 2 parametros:
        1. El efecto: La funcion que queremos controlar
        2. Las dependencias: La lista de estados de las que depende el efecto, si alguno de esos estados cambia de valor debera volver a cargarse el efecto (Si la lista de dependencias esta vacia, entonces la funcion solo se ejecutara 1 vez)
        */
    /* Por que usar use effect? Porque queremos que loadContactList solo se ejecute 1 vez*/
    useEffect (
        loadContactList,
        []
    )
    console.log({loadingContactsState, contactState})
    
   
    return (
        <aside>
            <div>
                <ContactSearchForm/>
                <a>Crear contacto</a>
            </div>
            <ContactList contactState={contactState} loadingContactsState={loadingContactsState}/>
        </aside>
    )
}

/* const [nombre, edad] = [ 'pepe', 32 ] */
/* 
const persona_nombre = persona[0]
const persona_edad = persona[1] 
*/

/* const [nombre, edad] = persona */