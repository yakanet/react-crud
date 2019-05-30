import * as React from 'react';
import {ITodo} from '../../model/todo.model';

interface Props {
    todo: ITodo
}

export default function TodoItem(props: Props) {
    return (
        <div>
            {JSON.stringify(props.todo)}
        </div>
    );
}
