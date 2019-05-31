import * as React from 'react';
import {useState} from 'react';
import {useFetch} from '../../utils/hooks';
import {emptyTodo, ITodo} from '../../model/todo.model';
import TodoItem from '../../components/todo-item/TodoItem';
import {CrudRepository} from '../../utils/repository';
import TodoEdit from '../../components/todo-edit/TodoEdit';


export default function Todo() {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [editableTodo, setEditableTodo] = useState(emptyTodo());
    const todoRepository = new CrudRepository<ITodo>('todo');

    useFetch<ITodo[]>(todoRepository.baseUrl, data => setTodos(data));

    async function createTodo(todo: ITodo) {
        setTodos(await todoRepository.create(todo, todos))
    }

    async function updateTodo(todo: ITodo) {
        setTodos(await todoRepository.update(todo, todos));
    }

    async function deleteTodo(todo: ITodo) {
        setTodos(await todoRepository.remove(todo, todos));
    }

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => setEditableTodo(emptyTodo())}>New Todo</button>
            <TodoEdit todo={editableTodo} onCreate={createTodo} onUpdate={updateTodo}/>

            <hr/>
            {todos.map(todo =>
                <div key={todo.id}>
                    <TodoItem
                        onSelect={setEditableTodo}
                        todo={todo}
                    />
                    <button onClick={() => deleteTodo(todo)}>X</button>
                </div>
            )}
        </div>
    );
}
