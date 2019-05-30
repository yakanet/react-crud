import * as React from 'react';
import {IContact} from '../../model/contact.model';

interface Props {
    contact: IContact
}

export default function ContactItem(props: Props) {
    return (
        <div>
            {JSON.stringify(props.contact)}
        </div>
    );
}
