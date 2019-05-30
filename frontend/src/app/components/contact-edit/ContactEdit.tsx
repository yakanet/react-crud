import * as React from 'react';
import {ChangeEvent, useEffect, useState} from 'react';
import {IContact} from '../../model/contact.model';

interface Props {
    contact: IContact;
    onCreate: (contact: IContact) => void;
    onUpdate: (contact: IContact) => void;
}

export default function ContactEdit(props: Props) {
    const [contact, setContact] = useState(props.contact);

    useEffect(() => {
        setContact(props.contact);
    }, [props]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setContact({...contact, [name]: value})
    };

    function handleCreateOrUpdate() {
        if(!contact.id) {
            props.onCreate(contact);
        } else {
            props.onUpdate(contact);
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={contact.name} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={contact.email} onChange={handleInputChange}/>
            </div>
            <button onClick={handleCreateOrUpdate}>
                {contact.id ? 'Update' : 'Create'}
            </button>
        </div>
    );
}
