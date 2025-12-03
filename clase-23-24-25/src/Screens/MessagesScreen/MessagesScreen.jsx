import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { getContactById } from '../../services/contactService'


export default function MessagesScreen() {
    const parametros_url = useParams()
    const contact_id = parametros_url.contact_id
    const [contactSelected, setContactSelected] = useState(null)
    const [loadingContact, setLoadingContact] = useState(true)
    function loadContactById (){
        setLoadingContact(true)
        setTimeout(
            function () {
                const contact = getContactById(contact_id)
                setContactSelected(contact)
                setLoadingContact(false)
            },
            2000
        )
    }

    useEffect(
        loadContactById,
        [parametros_url.contact_id]
    )

    console.log(contactSelected, loadingContact)

    return (
        <div>
            <h1>Pantalla de mensajes</h1>
            <ContactSidebar/>
            {
                loadingContact 
                ? <div>Cargando..</div>
                : <h2>Contacto seleccionado: {contactSelected.contact_name}</h2>
            }
            
        </div>
    )
}
