import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="navbar-container clearfix">
            <div className="navbar-brand">
              <div className="logo">Material</div>
              <div className="slogan">Theme for everyone</div>
            </div>
            <ul className="navbar-right clearfix">
              <li className="nav-item">Demo</li>
              <li className="nav-item">Docs</li>
              <li className="nav-item">Github</li>
            </ul>
          </div>
        </div>

        <div className="jumbotron"></div>

        <div className="presentation">
          <img src={require('./img/render_phone.png')} />
        </div>

        <div className="main">

        </div>
      </div>
    );
  }
}

export default App;
