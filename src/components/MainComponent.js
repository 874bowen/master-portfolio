import React, { Component } from 'react';
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import Project from './ProjectComponent';
import Testimonials from "./Testimonials";
import { PROJECTS } from "../shared/projects";
import ProjectDetail from './ProjectDetailComponent';
import Blogs from './BlogsComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Routes, Route} from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { BLOGS } from '../shared/blogs';
import { FEATURES } from '../shared/features';
import { SKILLS } from '../shared/skills';
class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: PROJECTS,
      comments: COMMENTS,
      features: FEATURES,
      skills: SKILLS,
      blogs: BLOGS
    };
  }


  render(){
    console.log(this.state.skills);
    return (
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home featuredProject={this.state.projects.filter((project) => project.featured)[0]} featuredBlog={this.state.blogs.filter((blog) => blog.featured)[0]} features={this.state.features} skills={this.state.skills}/>} />
          <Route exact path="/projects" element={<Project projects={this.state.projects}/> }></Route>
          <Route index path="/projects/:projectId" element={<ProjectDetail projects={this.state.projects} comments={this.state.comments}/> } />
          <Route exact path="/blogs" element={<Blogs blogs={this.state.blogs}/> }></Route>
          <Route path="/about" element={<About />}/>
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