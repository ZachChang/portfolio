import React from 'react';
import '../App.css';
import { Sidebar, Menu, Visibility, Responsive, Icon} from 'semantic-ui-react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';
import { Link as Rlink} from 'react-router-dom';

import YellgarDefine from './YellgarDefine';
import YellgarMvp from './YellgarMvp';
import YellgarResearch from './YellgarResearch';
import YellgarDesign from './YellgarDesign';

import ProductImg from '../dist/images/product.png';
import YellgarLogo from '../dist/images/blacklogo.png';


class YellgarIndex extends React.Component{
  state = {
    ShowNav: undefined,
    visible: false
  }

  constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>  
        scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  // 控制sidebar show or hide
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  // click outside of the component to close sidebar
  handlePusher = () => {
    const { visible } = this.state;
    if (visible) this.setState({ visible: false });
  };

  render () {
    const { visible } = this.state
    return (
      <div className="yellgar-page">

        {/* Following Menu  fixed的話必須放在 Sidebar.Pushable外 */}
          <div className={`ui top fixed hidden menu ${this.state.ShowNav}`} >
        {/* Menu for Desktop size */}
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              <Menu size='huge'>
                <Rlink to="/">
                  <div className="item margin-right-none" id="page-zero-menu-content">
                    <i className="fas fa-arrow-left"></i>back to portfolio
                  </div>
                </Rlink>
                <div className="desktop-menu-title"><Link activeClass="active" className="item" to="define" spy={true} smooth={true} duration={500}><h3>1. Define & Analysis</h3></Link></div>
                <div className="desktop-menu-title"><Link activeClass="active" className="item" to="mvp" spy={true} smooth={true} duration={500}><h3>2. MVP Validation</h3></Link></div>
                <div className="desktop-menu-title"><Link activeClass="active" className="item" to="research" spy={true} smooth={true} duration={500}><h3>3. Research</h3></Link></div>
                <div className="desktop-menu-title"><Link activeClass="active" className="item" to="design" spy={true} smooth={true} duration={500}><h3>4. Design</h3></Link></div>
              </Menu>
            </Responsive>
        {/* Menu for mobile size */}
            <Responsive {...Responsive.onlyMobile}>
                <div className="mobile-menu" onClick={this.toggleVisibility}><Icon name="sidebar" /></div>
            </Responsive>
          </div>

          {/* Sidebar Menu */}
          <Sidebar  as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='sidebar-nav1'>
              <div className="mobile-sidebar"><Link activeClass="active" className="item" to="define" spy={true} smooth={true} duration={500}>1. Define</Link></div>
            </Menu.Item>
            <Menu.Item name='sidebar-nav2'>
              <div className="mobile-sidebar"><Link activeClass="active" className="item" to="mvp" spy={true} smooth={true} duration={500}>2. MVP Validation</Link></div>
            </Menu.Item>
            <Menu.Item name='sidebar-nav3'>
              <div className="mobile-sidebar"><Link activeClass="active" className="item" to="research" spy={true} smooth={true} duration={500}>3. Research</Link></div>
            </Menu.Item>
            <Menu.Item name='sidebar-nav4'>
              <div className="mobile-sidebar"><Link activeClass="active" className="item" to="design" spy={true} smooth={true} duration={500}>4. Design</Link></div>
            </Menu.Item>
            <Menu.Item name='sidebar-nav5'>
              <div className="mobile-sidebar"><div onClick={this.scrollToTop}>回至最頂</div></div>
            </Menu.Item>
            <Menu.Item name='sidebar-nav6'>
                <Rlink to="/"><div className="mobile-sidebar">back to portfolio</div></Rlink>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pushable >
            <Sidebar.Pusher dimmed={visible} onClick={this.handlePusher}>
              {/* navbar */}
              <div className="ui large secondary pointing menu" id="page-zero-menu">
                <div className="left item">
                  <Rlink to="/">
                    <div className="item" id="page-zero-menu-content">Zach</div>
                  </Rlink>
                </div>
                <div className="right item">
                  <Rlink to="/about">
                    <div className="item" id="page-zero-menu-content">about</div>
                  </Rlink>
                </div>
              </div>
              <div className="ui vertical stripe segment page-zero">
              <div className="color-block hidden-ml"></div>
                <div className="ui middle aligned stackable grid">
                  <div className="row" id="intro-yellgar">
                    <div className="ten wide column" id="padding-none">
                      <img className="ui small image" id="product-img" alt="product images" src={ProductImg} />
                    </div>
                    <div className="six wide right floated column ui grid container yellgar-intro" id="padding-none">
                      <img className="ui small image" id="yellgar-logo" src={YellgarLogo} alt="yellgar-logo"/>
                      <span>Platform: Desktop, tablet and mobile</span>
                      <h2>Challenge</h2>
                      <h3 className="margin-top-none">Build a dating platform that connects each user and help them start to date others. The interaction and experience of this site would not only be able to allow people to feel private and secure, but also help them feel free to expose themselves. In addition, this site has to find a original way to distinguish from the other dating sites.</h3>
                      <h2>My Role</h2>
                      <h3 className="margin-top-none">I worked with the founders and a full-stack engineer to develop Yellgar from 0 to 1. <br/>I was responsible for the user experience design, user interface development, visual design, and setting development objectives.</h3>
                    </div>
                  </div>
                </div>

                {/* design process */}
                  
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                  <div className="ui inverted divider container desktop-process">
                    <h2>Process</h2>
                    <div className="ui large breadcrumb design-process">
                      <Link activeClass="active" className="section" to="define" spy={true} smooth={true} duration={500}><h3>1. Define & Analysis</h3></Link>
                      <i className="right chevron icon divider"></i>
                      <Link activeClass="active" className="section" to="mvp" spy={true} smooth={true} duration={500}><h3>2. MVP Validation</h3></Link>
                      <i className="right chevron icon divider"></i>
                      <Link activeClass="active" className="section" to="research" spy={true} smooth={true} duration={500}><h3>3. Research</h3></Link>
                      <i className="right chevron icon divider"></i>
                      <Link activeClass="active" className="section" to="design" spy={true} smooth={true} duration={500}><h3>4. Design</h3></Link>
                    </div>
                  </div>
                </Responsive>
                {/* After scroll Visibility component, show the nav */}
                <Visibility once={false} onBottomPassed={() => this.setState({ ShowNav:"show_nav"})} onBottomPassedReverse={() => this.setState({ ShowNav:"hide_nav"})}>
                </Visibility>
              </div>


              {/* 開始內文 */}
              <div className="yellgar-content">
                <div name="define">
                  <YellgarDefine/>
                </div>

                <div name="mvp">
                  <YellgarMvp/>
                </div>

                <div name="research">
                  <YellgarResearch/>
                </div>

                <div name="design">
                  <YellgarDesign/>
                </div>
              </div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
      </div>
    );
  }
};


export default YellgarIndex;