import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderProjectItem({proj, onClick}){  // this is one way of having functional components  
    return(
        <Card>
            <Link to={`/projects/${proj.id}`}>
                <CardImg width="100%" src={proj.image} alt={proj.subtitle}/>
                <CardImgOverlay>
                    <CardTitle >{proj.title} --<span className="text-warning"> {proj.subtitle} </span></CardTitle>
                    {/* <p>{proj.description}</p> */}
                </CardImgOverlay>
            </Link>
        </Card>
    );
}



const Project = (props) => {  // this is another way of having functional components

    console.log("Project Component render() is invoked");
    const project = props.projects.map((proj) =>{
        return(
            <div key={proj.id} className="col-12 col-md-6 mt-2 mb-2">
                <RenderProjectItem proj={proj}/>
            </div>
        );
    });

    // console.log("Project Component render is invoked");
    return(
        <section id="projects">
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Projects</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="toast align-items-center" data-autohide="false" >
                        <div className="flex">
                            <div className="toast-body">
                                Click on a project to view more
                            </div>
                            <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                    </div>
                    <h3 className="text-center">
                    Projects
                    </h3>
                    {project}
                </div>
                <div className="row">
                    {/* <ProjectDetail project={this.state.selectedProject} comments={this.props.projects.comments}/> */}
                    {/* {this.renderProject(this.state.selectedProject)} */}
                </div>
            </div>

        </section>
        
    );
}
        
    

export default Project;