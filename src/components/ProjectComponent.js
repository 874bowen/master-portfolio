import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderProjectItem({proj, onClick}){  // this is one way of having functional components  
    return(
        <Card onClick={() => onClick(proj.id)}>
            <CardImg width="100%" src={proj.image} alt={proj.subtitle}/>
            <CardImgOverlay>
                <CardTitle >{proj.title} --<span className="text-warning"> {proj.subtitle} </span></CardTitle>
                {/* <p>{proj.description}</p> */}
            </CardImgOverlay>
        </Card>
    );
}


const Project = (props) => {  // this is another way of having functional components
    console.log("Project Component render() is invoked");
    const project = props.projects.map((proj) =>{
        return(
            <div key={proj.id} className="col-12 col-md-6 mt-2 mb-2">
                <RenderProjectItem proj={proj} onClick={props.onClick}/>
            </div>
        );
    });
    // console.log("Project Component render is invoked");
    return(
        <section id="projects">
            <div className="container">
                <div className="row">
                    <h1 className="text-center">
                    Apps I've Built
                    </h1>
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