import React, { Component } from 'react';
import './style.css';

import About from './About';
import Profile from './Profile';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Portfolio from './Portfolio';
 
class Home extends Component {
  render() { 
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col s12 m4 l3">
            <Profile/>
            </div>
            <div className="col s12 m9 l9">
              <About/>
              <Skills/>
              <Experience/>
              <Portfolio/>
              <Education/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
 
export default Home;