/*this will be a component or maybe two that will basically be
an image, a short 2 sentence description, and a link to repo and the deployed site (heroku probs)*/
import React from "react";
import {portProj} from "../data/PortfolioInfo.js";
import {forward, back} from "../data/tabler-icons";

export default function Projects(props) {
  //console.log("from Projects.js", portProj)

  //slideshow controls
  // let slideIndex = 1;
  //
  //
  // const plusSlides = n =>{
  //   showSlides(slideIndex += n);
  // }
  //
  // const currentSlide = n =>{
  //   showSlides(slideIndex = n);
  // }
  //
  // const showSlides = n =>{
  //   let i;
  //   let slide = document.getElementsByClassName('slide');
  //   let dot = document.getElementsByClassName('dot');
  //   n > slide.length ? slideIndex = 1 : console.log("n is not larger than slide.length");
  //   n < 1 ? slideIndex = slide.length : console.log("n is not smaller than 1");
  //   for (let i = 0; i < slide.length; i++) {
  //     slide[i].classList.add('disNone');
  //   }
  //   for (let i = 0; i < dot.length; i++) {
  //     dot[i].className = dot[i].classList.toggle('active');
  //   }
  //   slide[slideIndex - 1].classList.add = 'block';
  //   dot[slideIndex - 1].classList.add = ' active';
  // }

  //end slideshow controls
  return(
    <div className="projects-page comp slideshow-cont">
    <h1>Portfolio Projects</h1>
    {portProj.map((proj, index) =>{
      return (
        <div className="project slide fade">
        <h3>{proj.name}</h3>
        <img src={proj.screenshot} alt={`${proj.name} site screenshot`} className="project-screenshot"/>
        <p className="proj-sum">{proj.summary}</p>
        <a href={proj.repo} target="_blank">Repo</a>
        <a href={proj.site} target="_blank">Site</a>
        <span className="dot" onClick={`currentSlide(${index})`}></span>
        </div>
      )
    })}
    <span className="back">{back}</span>
    <span className="next">{forward}</span>
    </div>
  )
}
