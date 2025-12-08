import { createContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { getContactById } from "../services/contactService";

export const ContactDetailContext = createContext()

const ContactDetailContextProvider = () => {
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

    const providerValues = {
        contactSelected,
        loadingContact,
        loadContactById
    }

    
    return (
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet/>
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider
