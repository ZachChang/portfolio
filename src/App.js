import React     from 'react';
import ReactDOM  from 'react-dom';
import './App.css';
import { Sidebar, Segment, Button, Menu, Visibility, Responsive, Icon} from 'semantic-ui-react';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const durationFn = function(deltaTop) {
    return deltaTop;
};


class App extends React.Component{
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

        {/* Following Menu  fixed的話必須放在 Sidebar.Pushable外*/}
          <div className={`ui top fixed hidden menu ${this.state.ShowNav}`} >
        {/* Menu for Desktop size */}
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              <Menu>
                <a><Link activeClass="active" className="item" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></a>
                <a><Link activeClass="active" className="item" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></a>
                <a><Link activeClass="active" className="item" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></a>
                <a><Link activeClass="active" className="item" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></a>
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
              <a><Link activeClass="active" className="item" to="test1" spy={true} smooth={true} duration={500} >sidemenu1</Link></a>
            </Menu.Item>
            <Menu.Item name='sidebar-nav2'>
              <a><Link activeClass="active" className="item" to="test2" spy={true} smooth={true} duration={500} >sidemenu2</Link></a>
            </Menu.Item>
            <Menu.Item name='sidebar-nav3'>
              <a><Link activeClass="active" className="item" to="test3" spy={true} smooth={true} duration={500} >sidemenu3</Link></a>
            </Menu.Item>
            <Menu.Item name='sidebar-nav4'>
              <a><Link activeClass="active" className="item" to="test4" spy={true} smooth={true} duration={500} >sidemenu4</Link></a>
            </Menu.Item>
          </Sidebar>


        {/* Page Content */}
        <Sidebar.Pushable >
          <Sidebar.Pusher dimmed={visible} onClick={this.handlePusher}>
              <div class="ui inverted vertical masthead center aligned segment">
                <div class="ui container">
                <h1>All those moments will be lost in time... like tears in rain</h1>
                  <div class="ui large secondary inverted pointing menu">
                    <a class="active item"><Link activeClass="active" className="item" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></a>
                    <a class="item"><Link activeClass="active" className="item" to="test2" spy={true} smooth={true} duration={500} >Test 2</Link></a>
                    <a class="item"><Link activeClass="active" className="item" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></a>
                    <a class="item"><Link activeClass="active" className="item" to="test4" spy={true} smooth={true} duration={500} >Test 4</Link></a>
                  </div>
                </div>

            {/* After scroll Visibility component, show the nav */}
            <Visibility once={false} onBottomPassed={() => this.setState({ ShowNav:"show_nav"})} onBottomPassedReverse={() => this.setState({ ShowNav:"hide_nav"})}>
            </Visibility>

            <Element name="test1" className="element" >
              test 1
            </Element>

            <Element name="test2" className="element">
              test 2
            </Element>

            <Element name="test3" className="element">
              test 3
            </Element>

            <Element name="test4" className="element">
              test 4
            </Element>
            <a onClick={this.scrollToTop}>To the top!</a>
            </div>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
};


export default App;