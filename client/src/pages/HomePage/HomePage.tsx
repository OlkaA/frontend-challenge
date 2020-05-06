import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div className="column align-center">
            <h1>
            <Link
                to='/expenses'
            >Go to all expenses</Link>
            </h1>
            </div>
        )
    }
}
export default HomePage;
