import React, { Component } from 'react';

import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
       {/* Wrapping the div container to allow switching through pages in navigation bar*/}
      <Router>
        <div className="App">
          {/* Imported bootstrap navbar */}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">MyApp</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          <Switch>
             {/* Different routes to defined components */}
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Header} exact />
            <Route path='/read' component={Footer} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
