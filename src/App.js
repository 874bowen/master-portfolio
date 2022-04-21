import './App.css';
import React, { Component } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

import Project from './components/ProjectComponent';
import Testimonials from "./components/Testimonials";
import { PROJECTS } from "./shared/projects";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: PROJECTS
    };
  }
  render(){
    return (
      <main>
        <Navbar />
        <About />
        <Project projects= {this.state.projects}/>
        <Testimonials />
        <Contact />
      </main>
    );
  }
  
}

export default App;
