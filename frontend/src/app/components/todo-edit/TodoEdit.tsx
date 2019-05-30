import * as React from 'react';
import {ChangeEvent, useEffect, useState} from 'react';
import {ITodo} from '../../model/todo.model';

interface Props {
    todo: ITodo;
    onCreate: (todo: ITodo) => void;
    onUpdate: (todo: ITodo) => void;
}

export default function TodoEdit(props: Props) {
    const [todo, setTodo] = useState(props.todo);

    useEffect(() => {
        setTodo(props.todo);
    }, [props]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setTodo({...todo, [name]: value})
    };

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = event.target;
        setTodo({...todo, [name]: checked})
    };


    function handleCreateOrUpdate() {
        if(!todo.id) {
            props.onCreate(todo);
        } else {
            props.onUpdate(todo);
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={todo.name} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="archived">Archived</label>
                <input type="checkbox" name="archived" id="archived" checked={todo.archived} onChange={handleCheckboxChange}/>
            </div>
            <button onClick={handleCreateOrUpdate}>
                {todo.id ? 'Update' : 'Create'}
            </button>
        </div>
    );
}
