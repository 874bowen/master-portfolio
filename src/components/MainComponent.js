import React, { Component } from 'react';
import Footer from "./FooterComponent";
import Project from './ProjectComponent';
import Testimonials from "./Testimonials";
import { PROJECTS } from "../shared/projects";
import ProjectDetail from './ProjectDetailComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import { Routes, Route} from 'react-router-dom';
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
        <Header />
        <Routes>
          <Route path="/home" element={<Project projects={this.state.projects} onClick={(projectId) => this.onProjectSelect(projectId)}/> } />
          <Route path="/project" element={<ProjectDetail project={this.state.projects.filter((project) => project.id === this.state.selectedProject)[0]}/>} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        {/* <Project projects= {this.state.projects} onClick={(projectId) => this.onProjectSelect(projectId)}/>
        <ProjectDetail project={this.state.projects.filter((project) => project.id === this.state.selectedProject)[0]}/> */}
        
        <Testimonials />
        <Footer />
      </main>
    );
  }
  
}

export default Main;