import * as React from 'react';
import {IContact} from '../../model/contact.model';

interface Props {
    contact: IContact,
    onSelect: (contact: IContact) => void
}

export default function ContactItem(props: Props) {
    return (
        <div onClick={() => props.onSelect(props.contact)}>
            {JSON.stringify(props.contact)}
        </div>
    );
}