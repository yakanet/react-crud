import * as React from 'react';
import {ITodo} from '../../model/todo.model';

interface Props {
    todo: ITodo,
    onSelect: (todo: ITodo) => void
}

export default function TodoItem(props: Props) {
    return (
        <div onClick={() => props.onSelect(props.todo)}>
            {JSON.stringify(props.todo)}
        </div>
    );
}
