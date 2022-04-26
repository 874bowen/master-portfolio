import React, { Component } from 'react';
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import Project from './ProjectComponent';
import Testimonials from "./Testimonials";
import { PROJECTS } from "../shared/projects";
import ProjectDetail from './ProjectDetailComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import { Routes, Route} from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: PROJECTS,
      comments: COMMENTS
    };
  }


  render(){
    // const HomePage = () => {
    //   return(
    //     <Home />
    //   );
    // }
    // const ProjectWithId = ({match}) => {
    //   return(
    //     <ProjectDetail project={this.state.projects.filter((project) => project.id === parseInt(match.params.projectId,10))[0]} comments={this.state.comments.filter((comments) => comments.projectId  === parseInt(match.params.projectId,10))}
    //     />
    //   );
    // }
    return (
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home featured={this.state.projects.filter((project) => project.featured)[0]}/>} />
          <Route exact path="/projects" element={<Project projects={this.state.projects}/> }></Route>
          <Route index path="/projects/:projectId" element={<ProjectDetail projects={this.state.projects} comments={this.state.comments}/> } />
          <Route path="*" element={
            <main style={{ padding : "1 rem", backgroundColor: "antiquewhite" }}>
              <h2 className='text-center text-danger'>There is nothing here!</h2>
            </main>
          }/>
          
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