import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RenderFeatures(){
    return(
      <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom text-center">Full Stack Web developer</h2>
  
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="dev pt-2 mt-3 display-8 lh-1 fw-bold">Front-end development</h3>
              <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src={`/${'./images/bowen.jpeg'}`} alt="ivan" width="32" height="32" className="rounded-circle border border-white"/>
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"/></svg>
                  <small className="text-warning">#creativity</small>
                </li>
                <li className="d-flex align-items-center">
                  <small className="text-success">react.js</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="dev pt-2 mt-3 display-8 lh-1 fw-bold">API<br/> development</h3>
              <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src={`/${'./images/bowen.jpeg'}`} alt="ivan" width="32" height="32" className="rounded-circle border border-white"/>
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"/></svg>
                  <small className="text-warning">#communication</small>
                </li>
                <li className="d-flex align-items-center">
                  <small className="text-success">FastAPI</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="dev pt-2 mt-3 display-8 lh-1 fw-bold">Back-end development</h3>
              <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src={`/${'./images/bowen.jpeg'}`} alt="ivan" width="32" height="32" className="rounded-circle border border-white"/>
                </li>
                <li className="d-flex align-items-center me-3">
                  <small className="text-warning">#authentic</small>
                </li>
                <li className="d-flex align-items-center">
                  <small className="text-success">Django</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

function Home(props){
    return(
        <section id="home">
            <div className="container">
            <RenderFeatures />
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