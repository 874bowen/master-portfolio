import React, { Component } from 'react';
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import Project from './ProjectComponent';
import ProjectDetail from './ProjectDetailComponent';
import Blogs from './BlogsComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';


const mapStateToProps = state => {
  return{
    projects: state.projects,
    comments: state.comments,
    features: state.features,
    skills: state.skills,
    blogs: state.blogs
  }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (projectId, rating, author, comment) => dispatch(addComment(projectId, rating, author, comment)),
});

class Main extends Component {
  render(){

    return (
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home featuredProject={this.props.projects.filter((project) => project.featured)[0]} featuredBlog={this.props.blogs.filter((blog) => blog.featured)[0]} features={this.props.features} skills={this.props.skills}/>} />
          <Route exact path="/projects" element={<Project projects={this.props.projects}/> }></Route>
          <Route index path="/projects/:projectId" element={<ProjectDetail projects={this.props.projects} comments={this.props.comments} addComment={this.props.addComment}/> }  />
          <Route exact path="/blogs" element={<Blogs blogs={this.props.blogs}/> }></Route>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={
            <main style={{ padding : "1 rem", backgroundColor: "antiquewhite" }}>
              <h2 className='text-center text-danger'>There is nothing here!</h2>
            </main>
          }/>
          
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        {/* <Project projects= {this.props.projects} onClick={(projectId) => this.onProjectSelect(projectId)}/>
        <ProjectDetail project={this.props.projects.filter((project) => project.id === this.props.selectedProject)[0]}/> */}
        

        <Footer />
      </main>
    );
  }
  
}

// for this connect to work  you need to connect this to withRouter
// now the state will be available as Props
export default connect(mapStateToProps, mapDispatchToProps)(Main);