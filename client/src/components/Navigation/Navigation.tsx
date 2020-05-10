import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

function Navigation() {
    return (
        <nav>
            <Link
                to='/expenses'
            >Expenses</Link>
            <Link
                to='/about'
            >About</Link>
        </nav>
    );
}

export default Navigation;
