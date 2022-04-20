import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Project from './components/ProjectComponent';
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Project />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
