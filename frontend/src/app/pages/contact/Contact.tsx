import * as React from 'react';
import {useState} from 'react';
import {emptyContact, IContact} from '../../model/contact.model';
import ContactItem from '../../components/contact-item/ContactItem';
import {useFetch} from '../../utils/hooks';
import ContactEdit from '../../components/contact-edit/ContactEdit';
import {CrudRepository} from '../../utils/repository';

interface Props {

}


export default function Contact(props: Props) {
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [editableContact, setEditableContact] = useState(emptyContact());
    const contactRepository = new CrudRepository<IContact>('contact');

    useFetch<IContact[]>(contactRepository.baseUrl, data => setContacts(data));

    async function createContact(contact: IContact) {
        setContacts(await contactRepository.create(contact, contacts))
    }

    async function updateContact(contact: IContact) {
        setContacts(await contactRepository.update(contact, contacts));
    }

    async function deleteContact(contact: IContact) {
        setContacts(await contactRepository.remove(contact, contacts));
    }

    return (
        <div>
            <h2>Contacts</h2>
            <button onClick={() => setEditableContact(emptyContact())}>New Contact</button>
            <ContactEdit contact={editableContact} onCreate={createContact} onUpdate={updateContact}/>

            <hr/>
            {contacts.map(contact =>
                <div key={contact.id}>
                    <ContactItem
                        onSelect={setEditableContact}
                        contact={contact}
                    />
                    <button onClick={() => deleteContact(contact)}>X</button>
                </div>)}

        </div>
    );
}

