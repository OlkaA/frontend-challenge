import React, { Component } from 'react';
import './errorpage.scss';

class ErrorPage extends Component {
    render() {
        return (
            <div className='page'>
                <span className="error-text">404</span>
                <h1 className='home-page-title'>
                    Page not found.
                    </h1>
            </div>
        )
    }
}
export default ErrorPage;
