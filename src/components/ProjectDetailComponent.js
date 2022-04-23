import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class ProjectDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedDishDetail: this.props.project 
        }

    }
    renderProject(project){
        
        if (project != null){
            return(
                <div className="col-md-6">
                    <Card>
                        <CardImg width="100%" src={project.image} alt={project.subtitle}/>
                        <CardBody>
                            <CardTitle>{project.title}</CardTitle>
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
    renderComments(comments){
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
                <h1 className="text-warning">Comments</h1>
                {project}
                </div>
        );
            
    }
    render() {
        const projectDetail = this.props.project;
        console.log(projectDetail)
        if(projectDetail == null){
            return (<div></div>);
        }
        const renderComment = this.renderComments(projectDetail.comment)
        const renderProj = this.renderProject(projectDetail);
        return(
            <div className="row">
                {renderProj}
                {renderComment}
            </div>
            
            // <renderProject />
        );
    }
}
export default ProjectDetail;