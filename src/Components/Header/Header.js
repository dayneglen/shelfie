import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = props => {
    return (
        <header>
            <h1>Shelfie</h1>
            <section className='links-container'>
                <Link to='/'>Dashboard</Link>
                <Link to='/add'>Add Inventory</Link>
            </section>
            
        </header>
    )
}

export default Header;

