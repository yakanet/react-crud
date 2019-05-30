import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Todo from './pages/todo/Todo';
import Comment from './pages/comment/Comment'
import Header from './components/header/Header';

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
