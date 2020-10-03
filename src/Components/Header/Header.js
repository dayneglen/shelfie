import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = props => {
    return (
        <header>
            <section className='header-container'>
                <Link to='/'>
                    <h1>Shelfie</h1>
                </Link>
                <nav className='links-container'>
                    <Link to='/'>Dashboard</Link>
                    <Link to='/add'>Add Inventory</Link>
                </nav>
            </section>
           
            
        </header>
    )
}

export default Header;

