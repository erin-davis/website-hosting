/*this will be a component or maybe two that will basically be
an image, a short 2 sentence description, and a link to repo and the deployed site (heroku probs)*/
import React from "react";
import {portProj} from "../data/PortfolioInfo.js";

export default function Projects(props) {
  //console.log("from Projects.js", portProj)
  return(
    <div className="projects-page comp">
    <h1>Portfolio Projects</h1>
    {portProj.map(proj =>{
      return (
        <div className="project">
        <h3>{proj.name}</h3>
        </div>
      )
    })}
    </div>
  )
}
