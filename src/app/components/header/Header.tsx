import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import {Link} from 'react-router-dom';

interface Props {

}

export default function Header(props: Props) {
    const [name, setName] = useState('Hello');

    function handleNameChanged(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    return (
        <div>
            <header className='header'>
                <span>
                    <Link to='/'>{name}</Link>
                </span>
                <ul>
                    <li><Link to='/todo'>CRUD TODO</Link></li>
                    <li><Link to='/comment'>CRUD COMMENTS</Link></li>
                </ul>
                <input value={name} onChange={handleNameChanged}/>
            </header>
        </div>
    );
}
