import * as React from 'react';
import {useState} from 'react';
import {useFetch} from '../../utils/hooks';
import {ITodo} from '../../model/todo.model';
import TodoItem from '../../components/todo-item/ContactItem';

interface Props {

}

export default function Todo(props: Props) {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useFetch<ITodo[]>('http://localhost:3001/todo', data => setTodos(data));

    return (
        <div>
            <h2>Todos</h2>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </div>
    );
}
