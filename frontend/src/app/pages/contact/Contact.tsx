import * as React from 'react';
import {useState} from 'react';
import {IContact} from '../../model/contact.model';
import ContactItem from '../../components/contact-item/ContactItem';
import {useFetch} from '../../utils/hooks';

interface Props {

}


export default function Contact(props: Props) {
    const [contacts, setContacts] = useState<IContact[]>([]);
    useFetch<IContact[]>('http://localhost:3001/contact', data => setContacts(data));

    return (
        <div>
            <h2>Contacts</h2>
            {contacts.map(contact =>
                (<ContactItem key={contact.id} contact={contact}/>))
            }
        </div>
    );
}
