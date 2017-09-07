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
              <li className="nav-item"><a href="https://blog.viosey.com" target="_black">Demo</a></li>
              <li className="nav-item"><a href="#" target="_black">Docs</a></li>
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
            <a href="#" className="download-link">Get Material Free</a>
          </div>
        </div>

        <div className="presentation">
          <img src={require('./img/render_phone.png')} />
        </div>

        <div className="main">
          <div className="advantage">
            <div className="item">
              <h4>优异的加载性能</h4>
              <p>Pagespeed 得分 A (100%)，Yslow 得分 A (90±5%)</p>
            </div>
            <div className="item">
              <h4>众多功能</h4>
              <p>两款代码高亮，四款独立页面，主题自带 CDN，自定义背景与颜色风格</p>
            </div>
            <div className="item">
              <h4>第三方服务</h4>
              <p>三款网站统计服务 (Google Analytics, CNZZ, 百度统计)，六款评论系统 (Disqus, Gitment, Valine, 来必力, 友言, 畅言)</p>
            </div>
            <div className="item">
              <h4>SEO</h4>
              <p>专门设计的 Meta tag，结构化数据，OpenGraph，满足搜索引擎优化需要</p>
            </div>
            <div className="item">
              <h4>多种语言支持</h4>
              <p>感谢国际友人的贡献，Material 现已支持 10 种语言</p>
            </div>
          </div>
        </div>

        <div className="footer clearfix">
          <div className="footer-left">
            <div className="logo">Material</div>
            <ul className="nav">
              <li>Feedback</li>
              <li>Changelog</li>
              <li>Team</li>
            </ul>
            <div className="copyright">© 2017 viosey</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
