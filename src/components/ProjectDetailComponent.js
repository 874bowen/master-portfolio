import React, { Component, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Row, Label, Button } from 'reactstrap';
import {LocalForm, Control, Errors} from 'react-redux-form';

import  { useParams } from 'react-router-dom';


function RenderProject({project}){
    
    if (project != null){
        return(
            <div className="col-md-6">
                <Card>
                    <CardImg width="100%" src={`/${project.image}`} alt={project.subtitle}/>
                    <CardBody>
                        <CardTitle><strong>{project.title}</strong></CardTitle>
                        <CardText>{project.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}
function RenderComments({comments}){

    const project = comments.map((comment) =>{
        return(
            <li key={comment.id}>
                <span>{comment.comment}</span>
                <p> -- {comment.author}, 
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                    year: "numeric",
                    month: "long",
                    day: "2-digit"
                }).format(new Date(comment.date))}
                </p>

            </li>
        );
    });
    return(
        <div className="col-md-6">
            <h1 className="text-info">Comments</h1>
            {project}
            <CommentForm />
            </div>
    );
        
}
const ProjectDetail = (props) => {
    console.log("ProjectDetail Component render() is invoked");
    const testRef = useRef();
    useEffect(() => {
        testRef.current.scrollIntoView();
    });
    let params = useParams();
    var x = params.projectId;
    console.log(x);
    const projectDetail = props.projects;
    console.log(projectDetail)
    if(projectDetail == null){
        return (<div></div>);
    }
    var project=props.projects.filter((project) => project.id === parseInt(params.projectId,10))[0]
    var comment=props.comments.filter((comment) => comment.projectId === parseInt(params.projectId,10))
    console.log(comment)
    return(
        <section id="projectdetail">
            <div className="container">
            <div ref={testRef} className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/projects">Projects</Link></BreadcrumbItem>
                <BreadcrumbItem active>{project.title}</BreadcrumbItem>
            </Breadcrumb>
            <h3 className="text-center">
            {project.title}
            </h3>
            </div>
            </div>
            <div className="container">
                <div className="row">
                <RenderProject project={project}/>
                <RenderComments comments={comment}/>
                </div>
            </div>
            <section className="proj-bcg">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
        </section>
        </section>
        
        // <renderProject />
    );
}
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
      this.toggleModal();
      console.log('Current State is: ' + JSON.stringify(values));
      alert('Current State is: ' + JSON.stringify(values));
      // event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
      <div className="container">
      <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm className="container" onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating">Rating</Label>
                <Control.select className= "form-control" type="number" id="rating" name="rating" min="0" max="5"
                model=".rating" defaultValue={5}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  </Control.select>
              </Row>
              <Row className="form-group">
              <Label htmlFor="firstname">First Name</Label>

              <Control.text model=".author" id="author" name="author"
                      placeholder="Your Name"
                      className="form-control"
                      validators={{
                              required, minLength: minLength(3), maxLength: maxLength(15)
                          }} />
                      <Errors
                          className="text-danger"
                          model=".name"
                          show="touched"
                          messages={{
                              required: 'Required ',
                              minLength: 'Must be greater than 2 characters',
                              maxLength: 'Must be 15 characters or less'
                          }}
                       />
              </Row>
              <Row className="form-group">
                  <Label htmlFor="message">Comment</Label>

                      <Control.textarea model=".comment" id="comment" name="comment"
                          rows="6"
                          className="form-control" />

              </Row>
              <Row className="form-group">
              <Button type="submit" value="submit" color="primary">Submit</Button>
              </Row>
            </LocalForm>
          </ModalBody>

        </Modal>
        </div>
      </React.Fragment>
    );
  }
}
export default ProjectDetail;