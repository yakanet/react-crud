import * as React from 'react';
import {useState} from 'react';
import {emptyContact, IContact} from '../../model/contact.model';
import ContactItem from '../../components/contact-item/ContactItem';
import {useFetch} from '../../utils/hooks';
import ContactEdit from '../../components/contact-edit/ContactEdit';
import {CrudRepository} from '../../utils/repository';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


export default function Contact() {
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [editableContact, setEditableContact] = useState(emptyContact());
    const contactRepository = new CrudRepository<IContact>('contact');

    useFetch<IContact[]>(contactRepository.baseUrl, data => setContacts(data));

    function resetEditableContact() {
        setEditableContact(emptyContact());
    }

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
            <button onClick={resetEditableContact}>New Contact</button>
            <ContactEdit contact={editableContact} onCreate={createContact} onUpdate={updateContact}/>

            <TransitionGroup>
                {contacts.map(contact =>
                    <CSSTransition
                        timeout={500}
                        key={contact.id}
                        classNames="item"
                    >
                        <ContactItem
                            onSelect={setEditableContact}
                            onDelete={deleteContact}
                            contact={contact}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

