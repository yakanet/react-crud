import * as React from 'react';

export class Header extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <header className='header'>
                    <span>LOGO</span>
                    <ul>
                        <li>CRUD TODO</li>
                        <li>CRUD COMMENTS</li>
                    </ul>
                </header>

            </div>
        );
    }
}
