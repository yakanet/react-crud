import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Contact from './pages/contact/Contact';
import Todo from './pages/todo/Todo';

const App: React.FC = () => (
    <BrowserRouter>
        <Header/>
        <div className="container">
            <Switch>
                <Route path="/todo" component={Todo}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
