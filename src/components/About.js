// src/components/About.js
import React from "react";
import { Button } from "reactstrap"
export default function About() {
    return (
        
        <section id="about" mb-10>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Ivan.
                <br className="" />I love to build amazing
                web apps.
              </h1>
              
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                Laborum, voluptas natus?
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  <Button color="success">Work with me</Button>
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  <Button color="light">See my work</Button>
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
          <section class="mt-40 col-12 custom-shape-divider-bottom-1650314778">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </section>
        </section>
        
      );
}

