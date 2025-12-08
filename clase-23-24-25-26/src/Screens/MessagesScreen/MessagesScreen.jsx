import React, { use, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { getContactById } from '../../services/contactService'
import { ContactDetailContext } from '../../Context/ContactDetailContext'


export default function MessagesScreen() {
   
    const {
        contactSelected,
        loadingContact,
        loadContactById
    } = useContext(ContactDetailContext)
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
