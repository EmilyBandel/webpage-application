import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Landing';
import Filmography from './Filmography';
import Profile from './Profile';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Landing />
      <Filmography />
      <Profile />
      <Contact />
      <Footer />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
