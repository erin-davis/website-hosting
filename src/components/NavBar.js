import React from "react";
import { Route, Link} from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar(){
  return(
    <nav className="navigation" id="navibar">
      <Link to="/" className="link">
        <h1>Erin Davis</h1>
      </Link>
      <div className="nav-links">
        <Link to="/" className="link">Home</Link>
        <Link to="/projects" className="link">Projects</Link>
        <Link to="/contact" className="link">Contact</Link>
        <a href="https://github.com/erin-davis" target="_blank" className="link">Github</a>
      </div>
    </nav>
  )
}
