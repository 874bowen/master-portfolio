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
                <div className="py-5 my-5 bg-dark text-white text-center">
                  <h1 className="fw-bold">Skills</h1>
                  <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Ivan, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                      <button type="button" className="btn btn-outline-secondary btn-lg px-4">More about me &raquo;</button>
                    </div>
                  </div>
                  
                </div>
                <div className="row mb-4">
                  <div className="col-md-6 text-center mb-4">
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-animated bg-secondary" role="progressbar" style={{width:"80%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">HTML 80%</div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-animated bg-secondary" role="progressbar" style={{width:"50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">CSS 50%</div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-animated bg-secondary" role="progressbar" style={{width:"60%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">JS 8
                      60%</div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-animated bg-secondary" role="progressbar" style={{width:"70%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">SQL 70%</div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-animated bg-secondary" role="progressbar" style={{width:"67%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">REACT 67%</div>
                    </div>
                  </div>
                  <div className="col-md-6 text-center mb-4">
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-animated bg-secondary" role="progressbar" style={{width:"70%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">PHP 70%</div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-animated bg-secondary" role="progressbar" style={{width:"60%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">POSTGRE 60%</div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-animated bg-secondary" role="progressbar" style={{width:"75%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">PYTHON 75%</div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-animated bg-secondary" role="progressbar" style={{width:"75%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">DJANGO 75%</div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-animated bg-secondary" role="progressbar" style={{width:"85%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">BOOTSTRAP 85%</div>
                    </div>
                  </div>
                </div>
                <div className="container marketing">
                <h1 className="fw-boldn text-center">Testimonials</h1>
                <div className="row">
                  <div className="col-lg-4 text-center">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                    <h2>Heading</h2>
                    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>

                  </div>
                  <div className="col-lg-4 text-center">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                    <h2>Heading</h2>
                    <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>

                  </div>
                  <div className="col-lg-4 text-center">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                    <h2>Heading</h2>
                    <p>And lastly this, the third column of representative placeholder content.</p>
                  </div>
                </div>

                <hr className="featurette-divider"/>
                </div>

                </div>
</section>

    );
}
export default Home;