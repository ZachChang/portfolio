import React from 'react';
import '../App.css';
import { Sidebar, Button, Menu, Visibility, Responsive, Icon} from 'semantic-ui-react';
import { Link, Element , Events, animateScroll as scroll, scroller } from 'react-scroll'

import Define from './Define';

import ProductImg from '../dist/images/product.png';
import YellgarLogo from '../dist/images/blacklogo.png';


class Yellgar extends React.Component{
  state = {
    ShowNav: undefined,
    visible: false
  }

  constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

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
      <div>

        {/* Following Menu  fixed的話必須放在 Sidebar.Pushable外 */}
          <div className={`ui top fixed hidden menu ${this.state.ShowNav}`} >
        {/* Menu for Desktop size */}
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              <Menu>
                <div><Link activeClass="active" className="item" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></div>
                <div><Link activeClass="active" className="item" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></div>
                <div><Link activeClass="active" className="item" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></div>
                <div><Link activeClass="active" className="item" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></div>
              </Menu>
            </Responsive>
        {/* Menu for mobile size */}
            <Responsive {...Responsive.onlyMobile}>
                <Button onClick={this.toggleVisibility}><Icon name="sidebar" /></Button>
            </Responsive>
          </div>

          {/* Sidebar Menu */}
          <Sidebar  as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='sidebar-nav1'>
              <div><Link activeClass="active" className="item" to="test1" spy={true} smooth={true} duration={500} >sidemenu1</Link></div>
            </Menu.Item>
            <Menu.Item name='sidebar-nav2'>
              <div><Link activeClass="active" className="item" to="test2" spy={true} smooth={true} duration={500} >sidemenu2</Link></div>
            </Menu.Item>
            <Menu.Item name='sidebar-nav3'>
              <div><Link activeClass="active" className="item" to="test3" spy={true} smooth={true} duration={500} >sidemenu3</Link></div>
            </Menu.Item>
            <Menu.Item name='sidebar-nav4'>
              <div><Link activeClass="active" className="item" to="test4" spy={true} smooth={true} duration={500} >sidemenu4</Link></div>
            </Menu.Item>
          </Sidebar>


        {/* Page 0 */}
        <Sidebar.Pushable >
          <Sidebar.Pusher dimmed={visible} onClick={this.handlePusher}>
            {/* navbar */}
            <div class="ui large secondary pointing menu" id="page-zero-menu">
              <div class="right item">
                <a class="item" id="page-zero-menu-content">ABOUT</a>
              </div>
            </div>
            <div className="ui vertical stripe segment page-zero">
              <div className="ui middle aligned stackable grid">
                <div className="row" id="intro-yellgar">
                  <div className="ten wide column">
                    <img className="ui large image" id="product-img" alt="product images" src={ProductImg} />
                  </div>
                  <div className="six wide right floated column ui grid container">
                    <img className="ui small image" id="yellgar-logo" src={YellgarLogo} alt="yellgar-logo"/>
                    <span>Platform: Desktop, tablet and mobile</span>
                    <h3 className="ui header">Challenge</h3>
                    <p>Build a dating website that efficiently connect each users. I supported this startup team testing and developing the idea with few time and resource.</p>
                    <h3 className="ui header">My Role</h3>
                    <p>I worked with the founders and a full-stack engineer to develop Yellgar from 0 to 1. <br/>I was responsible for the user experience, user interface, visual design, HTML & CSS, and setting development objectives.</p>
                  </div>
                </div>
              </div>

              {/* design process */}
              <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <div className="ui inverted divider container">
                  <h3 className="ui header">Design Process</h3>
                  <div className="ui large breadcrumb design-process">
                    <Link activeClass="active" className="section" to="test1" spy={true} smooth={true} duration={500} >DEFINE</Link>
                    <i className="right chevron icon divider"></i>
                    <Link activeClass="active" className="section" to="test2" spy={true} smooth={true} duration={500} >BUILD MVP</Link>
                    <i className="right chevron icon divider"></i>
                    <Link activeClass="active" className="section" to="test3" spy={true} smooth={true} duration={500} >Testtest3</Link>
                    <i className="right chevron icon divider"></i>
                    <Link activeClass="active" className="section" to="test4" spy={true} smooth={true} duration={500} >Testrest4</Link>
                    <i className="right chevron icon divider"></i>
                    <Link activeClass="active" className="section" to="test2" spy={true} smooth={true} duration={500} >Testtest2</Link>
                    <i className="right chevron icon divider"></i>
                    <Link activeClass="active" className="section" to="test3" spy={true} smooth={true} duration={500} >Testtest3</Link>
                    <i className="right chevron icon divider"></i>
                    <Link activeClass="active" className="section" to="test4" spy={true} smooth={true} duration={500} >Testrest4</Link>
                  </div>
                  {/* After scroll Visibility component, show the nav */}
                  <Visibility once={false} onBottomPassed={() => this.setState({ ShowNav:"show_nav"})} onBottomPassedReverse={() => this.setState({ ShowNav:"hide_nav"})}>
                  </Visibility>
                </div>
              </Responsive>
            </div>


            {/* 開始內文 */}
            <div name="test1">
              <Define/>
            </div>

            <div name="test2">
              test 2
            </div>

            <Element name="test3" className="element">
              test 3
            </Element>

            <Element name="test4" className="element">
              test 4
            </Element>
            <a onClick={this.scrollToTop}>To the top!</a>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
};


export default Yellgar;