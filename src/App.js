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
<<<<<<< HEAD
=======

  let navbar = document.getElementById('navbar');
  console.log(navbar);

>>>>>>> parent of a4afff35... finished sticky nav bar and am working on basic styling for mobile and smaller screens
  return (
    <Router>
      <main>
        <div className="App">
<<<<<<< HEAD
          <nav className="navigation">
            <h1 className="site-header">Erin Davis Front-End Web Developer</h1>
            <div className="nav-links">
            <Link to="/about" className="links">About Me</Link>
            <Link to="/home" className="links">Home</Link>
=======
          <nav className="navigation" id="navbar">
            <h1 className="site-header">Erin Davis Front-End Web Developer</h1>
            <div className="nav-links">
            <Link to="/" className="links">Home</Link>
            <Link to="/about" className="links">About Me</Link>
>>>>>>> parent of a4afff35... finished sticky nav bar and am working on basic styling for mobile and smaller screens
            <Link to="/github" className="links" >Github</Link>
            <Link to="/linkedin" className="links">LinkedIn</Link>
            <Link to="/skills" className="links">Skills</Link>
            <Link to="/projects" className="links">Projects</Link>
            <Link to="/contactme" className="links">Contact Me</Link>
            </div>
          </nav>
<<<<<<< HEAD
          <LandingPage />
          {/* Commenting out for the time being <SkillsPage />*/}
          <Projects />
          <About />
          <ContactForm />

        {/*  <Route exact path="/">
            <LandingPage />
          </Route>
=======
          <div className="app-body">
          <LandingPage />
          <Projects />
          <SkillsPage />
          <About />
          <ContactForm />
        {/*  <Route exact path="/">
            <LandingPage />
          </Route>
          //commented out <SkillsPage />
          <Route path="projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contactme">
            <ContactForm />
          </Route>

          <Route exact path="/">
            <LandingPage />
          </Route>
>>>>>>> parent of a4afff35... finished sticky nav bar and am working on basic styling for mobile and smaller screens
          <Route path="/skills">
            <SkillsPage />
          </Route>
          <Route path="">
          </Route>
          <Route path="">
          </Route>
          <Route path="">
          </Route>
          <Route path="">
          </Route>*/}
<<<<<<< HEAD
=======
          </div>
>>>>>>> parent of a4afff35... finished sticky nav bar and am working on basic styling for mobile and smaller screens
        </div>
      </main>
    </Router>
  );
}

export default App;
