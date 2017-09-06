import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';


class App extends Component {
  componentDidMount() {
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if (scroll > 40) {
        $('.App-header').addClass('header-docked');
      } else {
        $('.App-header').removeClass('header-docked');
      }
    });
  }
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
              <li className="nav-item"><a href="#">Demo</a></li>
              <li className="nav-item"><a href="#">Docs</a></li>
              <li className="nav-item"><a href="#">Github</a></li>
            </ul>
          </div>
        </div>

        <div className="jumbotron">
          <h1>
            <span>Nature, Pure</span>
            <span>原质，纯粹</span>
          </h1>
          <div>
            <a href="#" className="download-link">Get Material Free</a>
          </div>
        </div>

        <div className="presentation">
          <img src={require('./img/render_phone.png')} />
        </div>

        <div className="main">
        </div>

        <div className="footer">

        </div>
      </div>
    );
  }
}

export default App;
