import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Yellgar from './component/Yellgar';
import Footer from './component/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects/yellgar" component={Yellgar} />
        <Footer/>
      </div>
    );
  }
}

export default App;