import React from 'react'
import { useParams } from 'react-router'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { getContactById } from '../../services/contactService'


export default function MessagesScreen() {
    const parametros_url = useParams()
    const contact_id = parametros_url.contact_id
    const contact = getContactById(contact_id)
    console.log(contact)
    return (
        <div>
            <h1>Pantalla de mensajes</h1>
            <ContactSidebar/>
        </div>
    )
}
