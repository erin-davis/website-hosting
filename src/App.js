import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage.js";
import SkillsPage from "./components/SkillsPage.js"
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import ContactForm from "./components/ContactForm.js";
//import NavBar from "./components/NavBar.js";

function App() {
  return (
    <Router>
      <main>
        <div className="App">
          <nav className="navigation" id="navbar">
            <h1 className="site-header">Erin Davis Front-End Web Developer</h1>
            <div className="nav-links">
            <Link to="/" className="links">Home</Link>
            <Link to="/about" className="links">About Me</Link>
            <Link to="/github" className="links" >Github</Link>
            <Link to="/linkedin" className="links">LinkedIn</Link>
            <Link to="/skills" className="links">Skills</Link>
            <Link to="/projects" className="links">Projects</Link>
            <Link to="/contactme" className="links">Contact Me</Link>
            </div>
          </nav>
          <div className="app-body">
          <LandingPage />
          <Projects />
          <SkillsPage />
          <About />
          <ContactForm />
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
