import React, { Component } from 'react';
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

import Project from './ProjectComponent';
import Testimonials from "./Testimonials";
import { PROJECTS } from "../shared/projects";
import ProjectDetail from './ProjectDetailComponent';
class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: PROJECTS,
      selectedProject: null
    };
  }

  onProjectSelect(projectId){
    this.setState({selectedProject: projectId});
  }

  render(){
    return (
      <main>
        <Navbar />
        <About />
        <Project projects= {this.state.projects} onClick={(projectId) => this.onProjectSelect(projectId)}/>
        <ProjectDetail project={this.state.projects.filter((project) => project.id === this.state.selectedProject)[0]}/>
        <Testimonials />
        <Contact />
      </main>
    );
  }
  
}

export default Main;