import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Portfolio from './Portfolio.js';
import React, { Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      title: 'Julian Malina',
      headerLinks: [
        {title: 'Home', path: '/' },
        {title: 'About', path: '/about' }
      ],
      home: {
        title: 'Welcome to Julians Portfolio',
        subTitle: 'Projects from github below:'
      },
      about: {
        title: 'Julian Malina',
        subTitle: 'Graduated from Buffalo'
      }
    }
  }
  
  render() {
    return (
      <BrowserRouter>
        <Container className="p-0"fluid = {true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Julian Malina</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} />} /> 
          {/* <Route path="/" exact render={() => <AboutPage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />  */}

          <Footer />

        </Container>
      </BrowserRouter>
    );
  }
}


export default App;
