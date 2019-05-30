import * as React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <header className='header'>
                    <span>
                        <Link to='/'>LOGO</Link>
                    </span>
                    <ul>
                        <li><Link to='/todo'>CRUD TODO</Link></li>
                        <li><Link to='/comment'>CRUD COMMENTS</Link></li>
                    </ul>
                </header>

            </div>
        );
    }
}
