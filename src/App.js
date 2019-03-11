import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import YellgarIndex from './component/YellgarIndex';
import Footer from './component/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
        <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
        <Route path={process.env.PUBLIC_URL + "/projects/yellgar"} component={YellgarIndex} />
        <Footer/>
      </div>
    );
  }
}

export default App;
