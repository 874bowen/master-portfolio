import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home(props){
    return(
        <section id="home">
            <div className="container">
            <h1>Home</h1>
                <div className="row">
                    <div className="col-md-6">
                        <Card>
                            <CardImg width="100%" src={props.featured.image} alt={props.featured.subtitle}/>
                            <CardBody>
                                <CardTitle>{props.featured.title}</CardTitle>
                                <CardText>{props.featured.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <Link
                  to="/projects"
                  className="rounded text-lg float-right">
                  <Button variant="outline-success">More Projects</Button>
                </Link>
                </div>
            </div>
        </section>

    );
}
export default Home;