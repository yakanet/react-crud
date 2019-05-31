import * as React from 'react';
import {ListItem, ListItemText} from '@material-ui/core'
import Button from '@material-ui/core/Button';

interface Props<T> {
    value: T;
    primary: keyof T;
    secondary?: keyof T;
    className?: string;
    onSelect: (value: T) => void;
    onDelete: (value: T) => void;
}

export default function SimpleItem<T>(props: Props<T>) {
    function onSelect() {
        props.onSelect(props.value)
    }

    function onDelete() {
        props.onDelete(props.value)
    }

    return (
        <ListItem className={props.className}>
            <ListItemText
                primary={props.value[props.primary]}
                secondary={props.secondary ? props.value[props.secondary] : null}
            />
            <Button title="Edit" onClick={onSelect}>🖊</Button>
            <Button title="Delete" onClick={onDelete}>❌</Button>
        </ListItem>
    );
}
