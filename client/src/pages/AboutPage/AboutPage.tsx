import React, { Component } from 'react';
// import './errorpage.scss';

class AboutPage extends Component {
    render() {
        return (
            <div className='page'>
                <div className='about-page'>
                    <h2>Front-end challenge for Pleo</h2>
                    <h3><strong><i>Implemented a short version of Pleo App.</i></strong></h3>
                    <h3><strong>Getting started</strong></h3>
                    <ul>
                        <li>First clone the repo on your local machine using a terminal or a git client.</li>
                        <li>In the folder `api` run `npm install`(it sets packages for backend).</li>
                        <li>In the folder `client` run `npm install`(it sets packages for frontend).</li>
                        <li>In the folder `client` run `npm start` to run project (api will run automatically) to run app in the browser.</li>
                    </ul>
                    <h3><strong>How to use app, functionality</strong></h3>
                    <h4>
                        App has several pages:</h4>
                    <div>
                        - HomePage has navigation in the top right corner.
                        <ul>
                            <li>By clicking on Expenses user will be redirectered to Expenses page with list of all expenses.</li>
                            <li>By clicking on About user will be redirectered to About page with short description of the project.</li>
                        </ul>
                    </div>
                    <div>
                        - ExpensesPage
                        <ul>
                            <li>User can see list of expenses.</li>
                            <li>User can navigate to next/previous page to see next part of list of expenses.</li>
                            <li>User can filter on expenses (client side filters) by name of the user or/and by merchant.</li>
                            <li>User can sort expenses by first name of user or by Merchant.</li>
                            <li>User can click on the button `See more` to see detailed information about specific expense.</li>
                        </ul>
                    </div>        
                    <div>
                        - ExpensePage
                        <ul>
                            <li>User can see detailed information about specific exspense.</li>
                            <li>User can add a comment on an expense.</li>
                            <li>User can add a receipt image on an expense.</li>
                        </ul>
                    </div>
                    <div>- AboutPage
                     User can see a short description of the project.</div>
                    <div> - ErrorPage
                     If user enters non-existing url, Error page will appear.</div>
                    <h3><strong>Used technologies</strong></h3>
                    <ul>
                        <li>A single page application using React.</li>
                        <li>CSS has written SASS language.</li>
                        <li>Responsive design.</li>
                        <li>Implemented with a state management library Redux.</li>
                        <li>Implemented in TypeScript.</li>
                    </ul>
                    <h3><strong><i>Author: Olha Afanasieva</i></strong></h3>
                </div>
            </div>
        )
    }
}
export default AboutPage;
