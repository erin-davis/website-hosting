import React from "react";
import { Route, Link} from "react-router-dom";

export default function NavBar(){
  return(
    <nav className="navigation" id="navibar">
      <h1 className="site-header">Erin Davis Front-End Web Developer</h1>
      <div className="nav-links">
      <Link to="/" className="links">Home</Link>
      <Link to="/about" className="links">About Me</Link>
      <Link to="/skills" className="links">Skills</Link>
      <Link to="/projects" className="links">Projects</Link>
      <Link to="/github" className="links" >Github</Link>
      <Link to="/linkedin" className="links">LinkedIn</Link>
      <Link to="/contactme" className="links">Contact Me</Link>
      </div>
    </nav>
  )
}
