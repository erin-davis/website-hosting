import React from "react";
import {hardSkills} from "../data/skills.js";
/*import ReactLogo from "../images/React-Logo.png";
import JSLogo from "../images/Javascript-Logo.png";
import HTMLLogo from "../images/HTML-Logo.png";
import ReduxLogo from "../images/Redux-Logo.png";
import CSSLogo from "../images/CSS-Logo.png";
import LessLogo from "../images/Less-Logo.png";
import VueLogo from "../images/Vue-Logo.png";*/

export const SkillsPage = () =>{

  return (
    <div className="skill-page">
      <h1>Skills</h1>
      <div className="skill-items">
        {hardSkills.map(item =>{
          return (
            <div className="single-skill">
            <img src={item.img} alt={`${item.lang} icon`} className="lang-logos"/>
            <h3>{item.lang}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}
