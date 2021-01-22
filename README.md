# Book Searching Engine App with React

## Description 

Search engine made with MongoDB, Express, React and Node.js MERN. 
Wonderful App to search books from Google API. Enjoy Read!


## Table of Contents

* [URLs](#urls)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#Contributing)
* [License](#license)
* [Test](#Test)
* [Questions](#questions)
* [Screenshots](#screenshots)


## URLs

* Deployed Application: 
    - [https://keep-reading-search.herokuapp.com/](https://keep-reading-search.herokuapp.com/) (live)

* GitHub Repository:
    - [HTTPS: https://github.com/rogers0404/21-book-search-engine.git](https://github.com/rogers0404/21-book-search-engine.git)
    - [GIT: git@github.com:rogers0404/21-book-search-engine.git](git@github.com:rogers0404/21-book-search-engine.git)


## Installation

You need some packages to run this application, 

- `git clone git@github.com:rogers0404/21-book-search-engine.git        //clone the repository`

Back-End

- `npm i express                    // or npm install express to get all packages and dependencies of Express`
- `npm i apollo-server-express       // or npm install apollo-server-express to get all packages and dependencies of Apollo`
- `npm i jsonwebtoken               // or npm install JSON WEB TOKEN `
- `npm install jwt-decode               // or npm install JSON WEB TOKEN decoding `

Front-End

- `npx create-react-app book-search-engine       // or npx install to get all packages and dependencies of React`
- `npm i apollo-boost graphql graphql-tag @apollo/react-hooks       // or install libraries to get all packages and dependencies of Apollo Client, GraphQL and Apollo Hooks`

Back-end and Front-End Integration 

- `npm install if-env               //checking the environment we're in and execute a select npm script`
- `npm install -D concurrently      //package for running multiple processes concurrently`

## Usage 

Developing Component Funtions in React:

`import React from 'react';`

`// add these two library import statements`
`import { ApolloProvider } from '@apollo/react-hooks';`
`import ApolloClient from 'apollo-boost';`
`import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';`
`import SearchBooks from './pages/SearchBooks';`
`import SavedBooks from './pages/SavedBooks';`
`import Navbar from './components/Navbar';`

`const client = new ApolloClient({`
`  request: operation => {`
`    const token = localStorage.getItem('id_token');`

`    operation.setContext({`
`      headers: {`
`        authorization: token ? ``Bearer ${token}` `: ''`
`      }`
`    });`
`  },`
`  uri: '/graphql'`
`});`
`function App() {`
`  return (`
`  <ApolloProvider client={client}>`
`    <Router>`
`      <>`
`        <Navbar />`
`        <Switch>`
`          <Route exact path='/' component={SearchBooks} />`
`          <Route exact path='/saved' component={SavedBooks} />`
`          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />`
`        </Switch>`
`      </>`
`    </Router>`
`    </ApolloProvider>`
`  );`
`}`

`export default App;`


The starting command-line is:

`npm run start                                 // to run the app and run server and client`

## Contributing

* Rogers Ramirez, Github User: [rogers0404](http://github.com/rogers0404)


## License

Book Searching Engine App with MERN is licensed under the

![v1](https://img.shields.io/static/v1?label=License&message=None&color=inactive&&style=plastic)

None

## Test

None

## Questions

If you have any questions about the application, you can check the documentation on my GitHub profile [https://github.com/rogers0404](https://github.com/rogers0404).

for more information you can have a question via email [rogers.ramirez2008@gmail.com](rogers.ramirez2008@gmail.com)  .


## Screenshots

### Screenshot 1

![](./src/assets/readme/image1.PNG)


### Video 1

[Video 1: YouTube](https://youtu.be/rJUqgRAPIac)

### Video 2

[Video 2: Google Drive](https://drive.google.com/file/d/1jPh6ioIH33oQQdOVNy_d3oNT7tdcM0u1/view)

