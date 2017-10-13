import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
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
              <li className="nav-item"><a href="https://blog.viosey.com" target="_black">Demo</a></li>
              <li className="nav-item"><a href="/docs/" target="_black">Docs</a></li>
              <li className="nav-item"><a href="https://github.com/viosey/hexo-theme-material" target="_black">Github</a></li>
            </ul>
          </div>
        </div>

        <div className="jumbotron">
          <h1>
            <span>Nature, Pure</span>
            <span>原质，纯粹</span>
          </h1>
          <div>
            <a href="/docs" className="download-link" target="_black">Get Material Free</a>
          </div>
        </div>

        <div className="presentation">
          <img src="https://alicdn.viosey.com/img/mt/render_phone.png" alt="material-render-phone"/>
        </div>

        <div className="main">
          <div className="advantage clearfix">
              <div className="item-wrap">
                <div className="item">
                  <img src="https://alicdn.viosey.com/img/mt/advantage/seo.jpg" alt="[搜索引擎优化]" />
                  <div className="description">
                    <h4>SEO</h4>
                    <p>
                      <span>Meta tag, Structured data, OpenGraph</span>
                      <span>Meet the needs of SEO</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-wrap">
                <div className="item">
                  <img src="https://alicdn.viosey.com/img/mt/advantage/fast.jpg" alt="[优异的加载性能]" />
                  <div className="description">
                    <h4>Excellent loading performance</h4>
                    <p>
                      <span>Yslow Score A (90±5%)</span>
                      <span>Pagespeed Score A (100%)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-wrap">
                <div className="item">
                  <img src="https://alicdn.viosey.com/img/mt/advantage/function.jpg" alt="[众多功能]" />
                  <div className="description">
                    <h4>Multiple functions</h4>
                    <p>
                      <span>Two code highlight plugins, built-in CDN</span>
                      <span>Four distinctive pages</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-wrap">
                <div className="item">
                  <img src="https://alicdn.viosey.com/img/mt/advantage/lang.jpg" alt="[多种语言支持]" />
                  <div className="description">
                    <h4>Multilingual support</h4>
                    <p>
                      <span>Material is now available in 10 languages</span>
                      <span>More languages are waiting for you</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-wrap">
                <div className="item">
                  <img src="https://alicdn.viosey.com/img/mt/advantage/third-party.jpg" alt="[第三方服务]" />
                  <div className="description">
                    <h4>Third party service</h4>
                    <p>
                      <span>Three website analytics services</span>
                      <span>Six comment systems</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-wrap">
                <div className="item">
                  <img src="https://alicdn.viosey.com/img/mt/advantage/infinite.jpg" alt="[一种风格，无限可能]" />
                  <div className="description">
                    <h4>One design, Infinite possibilities</h4>
                    <p>
                      <span>Based on Material Design</span>
                      <span>Customizable background and color style</span>
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="footer clearfix">
          <div className="footer-left">
            <div className="logo">Material</div>
            <ul className="nav">
              <li><a href="https://github.com/viosey/hexo-theme-material/issues" target="_black">Feedback</a></li>
              <li><a href="https://github.com/viosey/hexo-theme-material/releases" target="_black">Changelog</a></li>
              <li><a href="https://github.com/neko-dev" target="_black">Team</a></li>
            </ul>
            <div className="copyright">© 2017 <a className="viosey" href="https://viosey.com" target="_blank" rel="noopener noreferrer" >viosey</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
