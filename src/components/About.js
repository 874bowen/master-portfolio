// src/components/About.js
import React from "react";
import { Button } from "react-bootstrap"
export default function About() {
    return (
        
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="align-self-center col-12 col-md-6">
              <h1 className="text-white">
                Hi, I'm <span className="text-success">Ivan Bowen</span>.
              </h1>
              <h2>I love <span className="brick">building</span> amazing
                web apps.</h2>
              <p className="">
              Enthusiastic Web developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of web development and designing and training in Responsive Web Design. Motivated to learn, grow and excel in Technology.
              </p>
              <div className="d-flex justify-content-between">
                <a
                  href="#contact"
                  className="rounded text-lg">
                  <Button variant="outline-success">Work with me</Button>
                </a>
                <a
                  href="#projects"
                  className="rounded text-lg float-right">
                  <Button variant="outline-warning">See my work</Button>
                </a>
              </div>
              
          </div>
          <div className="col-12 col-md-6">
              <img
                className="rounded mx-auto d-block"
                alt="hero"
                src="./images/bowen.jpeg" width="70%"
              />
            </div>
            
            </div>

          </div>
          <section className="mt-40 col-12 custom-shape-divider-bottom-1650314778">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </section>
        </section>
        
      );
}

