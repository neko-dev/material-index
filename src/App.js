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
              <li className="nav-item"><a href="/docs" target="_black">Docs</a></li>
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
          <img src={require('./img/render_phone.png')} alt="material-render-phone"/>
        </div>

        <div className="main">
          <div className="advantage clearfix">
            <div className="item-wrap">
              <div className="item">
                <img src={require('./img/advantage/4.jpg')} />
                <h4>优异的加载性能</h4>
                <p>Pagespeed 得分 A (100%)，Yslow 得分 A (90±5%)</p>
              </div>
            </div>
            <div className="item-wrap">
              <div className="item">
                <img src={require('./img/advantage/3.jpg')} />
                <h4>SEO</h4>
                <p>专门设计的 Meta tag，结构化数据，OpenGraph，满足搜索引擎优化需要</p>
              </div>
            </div>
            <div className="item-wrap">
              <div className="item">
                <img src={require('./img/advantage/1.jpg')} />
                <h4>多种语言支持</h4>
                <p>感谢国际友人的贡献，Material 现已支持 10 种语言</p>
              </div>
            </div>
            <div className="item-wrap">
              <div className="item">
                <img src={require('./img/advantage/2.jpg')} />
                <h4>众多功能</h4>
                <p>两种代码高亮插件，四种独立页面，主题自带 CDN，自定义背景与颜色风格</p>
              </div>
            </div>
            <div className="item-wrap">
              <div className="item">
                <img src={require('./img/advantage/5.jpg')} />
                <h4>第三方服务</h4>
                <p>三款网站统计服务，六款评论系统</p>
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
            <div className="copyright">© 2017 <a className="viosey" href="https://viosey.com" target="_blank">viosey</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
