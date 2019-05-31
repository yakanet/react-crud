import * as React from 'react';
import {useState} from 'react';
import {useFetch} from '../../utils/hooks';
import {emptyTodo, ITodo} from '../../model/todo.model';
import TodoItem from '../../components/todo-item/TodoItem';
import {CrudRepository} from '../../utils/repository';
import TodoEdit from '../../components/todo-edit/TodoEdit';
import {CSSTransition, TransitionGroup} from 'react-transition-group'; // ES6


export default function Todo() {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [editableTodo, setEditableTodo] = useState(emptyTodo());
    const todoRepository = new CrudRepository<ITodo>('todo');

    useFetch<ITodo[]>(todoRepository.baseUrl, data => setTodos(data));

    function resetEditableTodo(){
        setEditableTodo(emptyTodo());
    }

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
            <button onClick={resetEditableTodo}>New Todo</button>
            <TodoEdit todo={editableTodo} onCreate={createTodo} onUpdate={updateTodo}/>

            <TransitionGroup>
                {todos.map(todo =>
                    <CSSTransition
                        timeout={500}
                        key={todo.id}
                        classNames="item"
                    >
                        <TodoItem
                            onSelect={setEditableTodo}
                            onDelete={deleteTodo}
                            todo={todo}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}
