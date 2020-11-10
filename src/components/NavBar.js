import React from "react";
import { Route, Link} from "react-router-dom";

export default function NavBar(){
  return(
    <nav className="navigation" id="navibar">
      <h1 className="site-header">Erin Davis Front-End Web Developer</h1>
      <div className="nav-links">
        <a href="https://github.com/erin-davis" target="_blank" className="links">Github</a>
        <a href="#" target="_blank" className="links">LinkedIn</a>
        <Link to="/contact" className="links">Contact Me</Link>
      </div>
    </nav>
  )
}
