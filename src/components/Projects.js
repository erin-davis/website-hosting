import React, {useState} from "react";
import {portProj} from "../data/PortfolioInfo.js";
import "../styles/Projects.css";

function Projects(){

  return(
    <div className="projects">
      <h1>Projects</h1>
      <div className="total-projects">
        {portProj.map((proj, index) =>{
          return(
            <div className="project">
              <img src={proj.screenshot} alt={`${proj.name} site screenshot`} className="project-image"/>
              <h2>{proj.name}</h2>
              <p>{proj.summary}</p>
              <section className="project-links">
                <a href={proj.site} target="_blank">View</a>
                <a href={proj.repo} target="_blank">Repo</a>
              </section>
            </div>
          )
          })}
        </div>
    </div>
  );

}

export default Projects;