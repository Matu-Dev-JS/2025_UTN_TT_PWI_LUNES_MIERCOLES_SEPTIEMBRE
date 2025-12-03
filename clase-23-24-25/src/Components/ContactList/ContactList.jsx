import React from 'react'
import './ContactList.css'

export default function ContactList(props) {
    if(props.loadingContactsState){
        return (
            <div>Cargando contactos...</div>
        )
    }

    if(props.contactState.length === 0){
        return (
            <div>No hay contactos</div>
        )
    }
  return (
    <div>
        {
            props.contactState.map(
                function (contact){
                    return (
                        <a key={contact.contact_id}>
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
                        </a>
                    )
                }
            )
        }
    </div>
  )
}
