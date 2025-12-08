import React, { useContext } from 'react'
import './ContactList.css'
import { Link } from 'react-router'
import { ContactListContext } from '../../Context/ContactListContext'

export default function ContactList() {
    const {
        contactState,
        loadingContactsState
    } = useContext(ContactListContext)

    if(loadingContactsState){
        return (
            <div>Cargando contactos...</div>
        )
    }

    if(contactState.length === 0){
        return (
            <div>No hay contactos</div>
        )
    }
  return (
    <div>
        {
            contactState.map(
                function (contact){
                    return (
                        <Link className='contact-item' key={contact.contact_id} to={'/chat/' + contact.contact_id}>
                            <div>
                                <img className='contact-avatar' src={contact.contact_avatar} alt={contact.contact_name} />
                                <h2>{contact.contact_name}</h2>
                            </div>
                            <div>
                                <p>{contact.last_message_content}</p>
                                {/* <p>{contact.last_message_created_at}</p> */}
                                {
                                    contact.contact_unseen_messages > 0 &&
                                    <span>{contact.contact_unseen_messages}</span>
                                }
                            </div>
                        </Link>
                    )
                }
            )
        }
    </div>
  )
}
