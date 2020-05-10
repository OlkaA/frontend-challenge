import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation'
import './homepage.scss';

class HomePage extends Component {
    render() {
        return (
            <div className='column home-page-wrapper'>
                <div className='home-page'>
                    <Navigation />
                    <h1 className='home-page-title'>
                        Best way to deal with your expenses.
                    </h1>
                </div>
            </div>
        )
    }
}
export default HomePage;
