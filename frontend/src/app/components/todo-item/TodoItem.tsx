import * as React from 'react';
import {ITodo} from '../../model/todo.model';

interface Props {
    todo: ITodo,
    onDelete: (todo: ITodo) => void
    onSelect: (todo: ITodo) => void
}

export default function TodoItem(props: Props) {
    return (
        <div onClick={() => props.onSelect(props.todo)}>
            {JSON.stringify(props.todo)}
            <button onClick={() => props.onDelete(props.todo)}>X</button>
        </div>
    );
}
