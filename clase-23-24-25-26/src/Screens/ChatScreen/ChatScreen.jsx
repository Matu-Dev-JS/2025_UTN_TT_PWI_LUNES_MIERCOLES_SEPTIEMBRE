import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactListContext } from '../../Context/ContactListContext'

export default function ChatScreen() {
  const {contacts} = useContext(ContactListContext)
  console.log('Los contactos de mi contexto son: ', contacts)
  return (
    <div>
        <h1>Pantalla de contactos</h1>
        <ContactSidebar/>
    </div>
  )
}
