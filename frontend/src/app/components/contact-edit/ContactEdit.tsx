import * as React from 'react';
import {ChangeEvent, useEffect, useState} from 'react';
import {IContact} from '../../model/contact.model';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {CardActions} from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
        if (!contact.id) {
            props.onCreate(contact);
        } else {
            props.onUpdate(contact);
        }
    }

    return (
        <Card>
            <CardContent>
                <div>
                    <TextField
                        label="Name"
                        name="name"
                        value={contact.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <TextField
                        type="email"
                        label="Email"
                        name="email"
                        value={contact.email}
                        onChange={handleInputChange}
                    />
                </div>

            </CardContent>
            <CardActions>
                <Button onClick={handleCreateOrUpdate}>
                    {contact.id ? 'Update' : 'Create'}
                </Button>
            </CardActions>
        </Card>
    );
}
