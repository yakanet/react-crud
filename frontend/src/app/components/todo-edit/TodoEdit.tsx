import * as React from 'react';
import {ChangeEvent, useEffect, useState} from 'react';
import {ITodo} from '../../model/todo.model';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import {CardActions} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

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
        if (!todo.id) {
            props.onCreate(todo);
        } else {
            props.onUpdate(todo);
        }
    }

    return (
        <Card>
            <CardContent>
                <div>
                    <TextField
                        label="Name"
                        name="name"
                        value={todo.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={
                            <Switch
                                name="archived"
                                checked={!!todo.archived}
                                onChange={handleCheckboxChange}
                                value="1"
                            />
                        }
                        label="Archived"
                    />
                </div>
            </CardContent>
            <CardActions>
                <Button onClick={handleCreateOrUpdate}>
                    {todo.id ? 'Update' : 'Create'}
                </Button>
            </CardActions>
        </Card>
    );
}
