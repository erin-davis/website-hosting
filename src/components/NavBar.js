import React from "react";
import { Route, Link, Switch, NavLink} from "react-router-dom";

export default function NavBar(){

  return(
    <header className="navigation">
      <nav>
        <NavLink to="/about">About Me</NavLink>
        <Link to="/home">Home</Link>
        <Link to="/github">Github</Link>
        <Link to="linkedin">LinkedIn</Link>
        <Link to="skills">Skills</Link>
        <Link to="projects">Projects</Link>
        <Link to="contactme">Contact Me</Link>
      </nav>
    </header>
  )
}
