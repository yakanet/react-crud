import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Todo} from './todo/Todo';
import {Comment} from './comment/Comment'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/todo' component={Todo}/>
                <Route path='/comment' component={Comment}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
