import React from "react";
import { Card, CardImg, CardBody, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Home HomeComponent.js
function RenderFeatures({features}){
  const feates = features.map((feature) => {
    return(
      <div key={feature.id} className="col">
      <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 className="dev pt-2 mt-3 display-8 lh-1 fw-bold">{feature.sector}<br/> development</h3>
          <p className="pt-3">{feature.description}</p>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img src={`/${feature.image}`} alt="ivan" width="32" height="32" className="rounded-circle border border-white"/>
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"/></svg>
              <small className="text-warning">{feature.motivation}</small>
            </li>
            <li className="d-flex align-items-center">
              <small className="text-success">{feature.framework}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
  });
  return (
    <div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom text-center">Full Stack Web developer</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      {feates}
    </div></div>
    );
}

function RenderSkills({skills}){
  const skils = skills.map((skill) => {
    return(
      <div key={skill.id} className="col-md-6 text-center mb-4">
        <div className="progress mb-3">
          <div className="progress-bar progress-bar-animated bg-secondary" role="progressbar" style={{ width:`${skill.width}`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{skill.placeholder}</div>
        </div>
      </div>
    );
  });
  return(
    <div className="row mb-4">
      {skils}
    </div>
  );
}

function Home(props){
    const features= props.features;
    const skills= props.skills;
    console.log(skills);
    return(
        <section id="home">
            <div className="container">
            <RenderFeatures features={features}/>
                <div className="row">
                    <div className="col-md-6">
                        <Card>
                            <CardImg width="100%" src={props.featuredProject.image} alt={props.featuredProject.subtitle}/>
                            <CardImgOverlay><Link
                              to="/projects"
                              className="rounded text-lg float-right">
                              <Button className="btn btn-info">More Projects</Button>
                            </Link></CardImgOverlay>
                            <CardBody>
                                <CardTitle>{props.featuredProject.title}</CardTitle>
                                <CardText>{props.featuredProject.shortdesc}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card>
                            <CardImg width="100%" src={`/${'./images/docstings.jpg'}`} alt={props.featuredBlog.subtitle}/>
                            <CardImgOverlay><Link
                              to="/blogs"
                              className="rounded text-lg float-right">
                              <Button className="btn btn-info">More Blogs</Button>
                            </Link></CardImgOverlay>
                            <CardBody>
                                <CardTitle>{props.featuredBlog.title}</CardTitle>
                                <CardText>{props.featuredBlog.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="py-5 my-5 bg-dark text-white text-center">
               {process.env.REACT_APP_MY_API_KEY}
                  <h1 className="fw-bold">Skills</h1>
                  <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">I have been able to acquire skills in crucial sectors of programming Web development being on the highest tier. Team leadership and good communication skills are some of my soft skills. Still ready to learn more. Currently interested in Cloud Computing.<br/> Call me the <i>Cloud Chaser</i> :)</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                      <Link to="/about">
                      <button type="button" className="btn btn-outline-secondary btn-lg px-4">More about me &raquo;</button></Link>
                    </div>
                  </div>
                  
                </div>
                <RenderSkills skills={skills}/>
                <div className="container marketing">
                <h1 className="mb-5 fw-boldn text-center">Testimonials</h1>
                <div className="row">
                  <div className="col-lg-4 text-center">
                  <img src={`/${'./images/woman.jpg'}`} alt="Becky" width="75" height="100" className="rounded-circle border border-white"/>

                    <h3>Becky</h3>
                    <p><i>"It’s obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again."</i></p>

                  </div>
                  <div className="col-lg-4 text-center">
                  <img src={`/${'./images/man.jpg'}`} alt="francis" width="75" height="100" className="rounded-circle border border-white"/>

                    <h3>Francis</h3>
                    <p><i>"Ivan is an authority on web development and is clearly in the upper percentile in terms of developer qualifications."</i></p>

                  </div>
                  <div className="col-lg-4 text-center">
                  <img src={`/${'./images/woman.png'}`} alt="miriam" width="75" height="100" className="rounded-circle border border-white"/>

                    <h3>Miriam</h3>
                    <p><i>"The work we received from him was top-notch, thoroughly documented, and full of touches that show his commitment to quality."</i></p>
                  </div>
                </div>

                <hr className="featurette-divider"/>
                </div>

                </div>
</section>

    );
}
export default Home;