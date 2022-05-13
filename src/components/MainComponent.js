import React, { Component } from 'react';
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import Project from './ProjectComponent';
import Testimonials from "./Testimonials";
import ProjectDetail from './ProjectDetailComponent';
import Blogs from './BlogsComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Try from './Try';
import { Routes, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return{
    projects: state.projects,
    comments: state.comments,
    features: state.features,
    skills: state.skills,
    blogs: state.blogs
  }
}

class Main extends Component {
  constructor(props){
    super(props);

  }


  render(){
    console.log(this.props.skills);

    return (
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home featuredProject={this.props.projects.filter((project) => project.featured)[0]} featuredBlog={this.props.blogs.filter((blog) => blog.featured)[0]} features={this.props.features} skills={this.props.skills}/>} />
          <Route exact path="/projects" element={<Project projects={this.props.projects}/> }></Route>
          <Route index path="/projects/:projectId" element={<ProjectDetail projects={this.props.projects} comments={this.props.comments}/> } />
          <Route exact path="/blogs" element={<Blogs blogs={this.props.blogs}/> }></Route>
          <Route path="/try" element={<Try />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/testi" element={<Testimonials />}/>
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
export default connect(mapStateToProps)(Main);