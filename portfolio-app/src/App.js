import React, { Component } from 'react';
import './App.css';
import Banner from './components/banner/banner';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Disciplines from './components/disciplines/disciplines';
import Contact from './components/contact/contact';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Banner />
        <span className='flexContainer'>
          <About className='flexSub'/>
          <Disciplines  className='flexSub'/>
        </span>
        <Experience />
        <Contact />
      </div>
    );
  }
}

export default App;
