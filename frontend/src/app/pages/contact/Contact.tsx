import * as React from 'react';
import {useState} from 'react';
import {emptyContact, IContact} from '../../model/contact.model';
import SimpleItem from '../../components/simple-item/SimpleItem';
import {useFetch} from '../../utils/hooks';
import ContactEdit from '../../components/contact-edit/ContactEdit';
import {CrudRepository} from '../../utils/repository';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Typography from '@material-ui/core/Typography';
import {List} from '@material-ui/core';


export default function Contact() {
    const contactRepository = new CrudRepository<IContact>('contact');
    const [contacts, setContacts] = useFetch<IContact>(contactRepository.baseUrl);
    const [editableContact, setEditableContact] = useState(emptyContact());

    function resetEditableContact() {
        setEditableContact(emptyContact());
    }

    async function createContact(contact: IContact) {
        setContacts(await contactRepository.create(contact, contacts))
        resetEditableContact();
    }

    async function updateContact(contact: IContact) {
        setContacts(await contactRepository.update(contact, contacts));
        resetEditableContact();
    }

    async function deleteContact(contact: IContact) {
        setContacts(await contactRepository.remove(contact, contacts));
        resetEditableContact();
    }

    return (
        <div>
            <Typography variant="h4" component="h3">
                Contact
            </Typography>
            <button onClick={resetEditableContact}>New Contact</button>
            <ContactEdit contact={editableContact} onCreate={createContact} onUpdate={updateContact}/>

            <List>
                <TransitionGroup>
                    {contacts.map(contact =>
                        <CSSTransition
                            key={contact.id}
                            timeout={500}
                            classNames="item"
                        >
                            <SimpleItem
                                primary="name"
                                secondary="email"
                                onSelect={setEditableContact}
                                onDelete={deleteContact}
                                value={contact}
                            />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </List>
        </div>
    );
}

