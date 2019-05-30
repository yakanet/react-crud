import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

interface Props {

}

export default function Header(props: Props) {
    return (
        <div>
            <header className="header">
                <span>
                    <Link to="/">LOGO</Link>
                </span>
                <ul>
                    <li><Link to="/todo">CRUD TODO</Link></li>
                    <li><Link to="/contact">CRUD CONTACT</Link></li>
                </ul>
            </header>
        </div>
    );
}
