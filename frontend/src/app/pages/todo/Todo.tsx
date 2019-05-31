import * as React from 'react';
import {useState} from 'react';
import {useFetch} from '../../utils/hooks';
import {emptyTodo, ITodo} from '../../model/todo.model';
import {CrudRepository} from '../../utils/repository';
import TodoEdit from '../../components/todo-edit/TodoEdit';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import SimpleItem from '../../components/simple-item/SimpleItem';
import {List} from '@material-ui/core';
import Typography from '@material-ui/core/Typography'; // ES6


export default function Todo() {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [editableTodo, setEditableTodo] = useState(emptyTodo());
    const todoRepository = new CrudRepository<ITodo>('todo');

    useFetch<ITodo[]>(todoRepository.baseUrl, data => setTodos(data));

    function resetEditableTodo() {
        setEditableTodo(emptyTodo());
    }

    async function createTodo(todo: ITodo) {
        setTodos(await todoRepository.create(todo, todos));
        resetEditableTodo();
    }

    async function updateTodo(todo: ITodo) {
        setTodos(await todoRepository.update(todo, todos));
        resetEditableTodo();
    }

    async function deleteTodo(todo: ITodo) {
        setTodos(await todoRepository.remove(todo, todos));
        resetEditableTodo();
    }

    return (
        <div>
            <Typography variant="h4" component="h3">
                Todo
            </Typography>
            <button onClick={resetEditableTodo}>New Todo</button>
            <TodoEdit todo={editableTodo} onCreate={createTodo} onUpdate={updateTodo}/>

            <List>
                <TransitionGroup>
                    {todos.map(todo =>
                        <CSSTransition
                            timeout={500}
                            key={todo.id}
                            classNames="item"
                        >
                            <SimpleItem
                                primary="name"
                                className={todo.archived ? "archived" : ""}
                                onSelect={setEditableTodo}
                                onDelete={deleteTodo}
                                value={todo}
                            />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </List>
        </div>
    );
}
