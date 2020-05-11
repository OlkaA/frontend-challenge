# Front-end challenge for Pleo

## 📝 Table of Content

- [About](#about)
- [Getting started](#getting-started)
- [How to use app](#how-to-use-app)
- [Used technologies](#used-technologies)

## About  <a name = "about"></a>
Implemented a short version of Pleo App.

## Getting started <a name = "getting-started"></a>

- First clone the repo on your local machine using a terminal or a git client.
- In the folder `api` run `npm install`(it sets packages for backend).
- In the folder `client` run `npm install`(it sets packages for frontend).
- In the folder `client` run `npm start` to run project (api will run automatically) to run app in the browser.

## How to use app, functionality <a name = "how-to-use-app"></a>
App has several pages:
- HomePage has navigation in the top right corner. \
 By clicking on Expenses user will be redirectered to Expenses page with list of all expenses.\
 By clicking on About user will be redirectered to About page with short description of the project.
 
- ExpensesPage\
 User can see list of expenses.\
 User can navigate to next/previous page to see next part of list of expenses.\
 User can filter on expenses (client side filters) by name of the user or/and by merchant.\
 User can sort expenses by first name of user or by Merchant.\
 User can click on the button `See more` to see detailed information about specific expense.
 
 - ExpensePage\
 User can see detailed information about specific exspense.\
 User can add a comment on an expense. \
 User can add a receipt image on an expense. 
 
 - AboutPage\
 User can see a short description of the project.
 
  - ErrorPage\
 If user enters non-existing url, Error page will appear.

## Used technologies <a name = "used-technologies"></a>
- A single page application using React.
- CSS has written SASS language.
- Responsive design.
- Implemented with a state management library Redux.
- Implemented in TypeScript.
