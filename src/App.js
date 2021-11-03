import React, { Component } from 'react';

import { LogoNodejs } from 'react-ionicons'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <LogoNodejs
          color={'#00000'}
          rotate
          height="250px"
          width="250px"
          onClick={() => alert('Hi!')}
        />
        </header>
      </div>
    );
  }
}

export default App;
