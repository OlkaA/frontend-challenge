import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <h1>
            <Link
                to='/expenses'
            >Go to all expenses</Link>
            </h1>
        )
    }
}
export default HomePage;
