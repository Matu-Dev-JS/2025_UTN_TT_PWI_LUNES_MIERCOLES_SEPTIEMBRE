import contact_data from "../data/contactData";

export function getContactList (){
    /* En un futuro esta funcion haria la llamada al servidor */
    return contact_data
}

export function getContactById (contact_id) {
    for(const contact of contact_data){
        if(Number(contact.contact_id) === Number(contact_id)){
            return contact
        }
    }
}