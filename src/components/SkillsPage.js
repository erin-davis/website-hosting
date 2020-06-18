import React from "react";
import ReactLogo from "../images/React-Logo.png";
import JSLogo from "../images/Javascript-Logo.png";
import HTMLLogo from "../images/HTML-Logo.png";
import ReduxLogo from "../images/Redux-Logo.png";
import CSSLogo from "../images/CSS-Logo.png";
import LessLogo from "../images/Less-Logo.png";
import VueLogo from "../images/Vue-Logo.png";

export default function SkillsPage(){

  return (
    <div className="skill-page">
      <h1>Skills</h1>
      <div className="skill-items">
        <div className="single-skill">
        <img src={ReactLogo} alt="React.js Logo" className="lang-logos"/>
        <p>React</p>
        </div>
        <div className="single-skill">
        <img src={JSLogo} alt="JavaScript Logo" className="lang-logos"/>
        <p>JavaScript</p>
        </div>
        <div className="single-skill">
        <img src={ReduxLogo} alt="Redux Logo" className="lang-logos"/>
        <p>Redux</p>
        </div>
        <div className="single-skill">
        <img src={HTMLLogo} alt="HTML Logo" className="lang-logos"/>
        <p>HTML</p>
        </div>
        <div className="single-skill">
        <img src={CSSLogo} alt="CSS Logo" className="lang-logos"/>
        <p>CSS</p>
        </div>
        <div className="single-skill">
        <img src={LessLogo} alt="Less Logo" className="lang-logos"/>
        <p>Less/SASS</p>
        </div>
        <div className="single-skill">
        <img src={VueLogo} alt="Vue Logo" className="lang-logos"/>
        <p>Vue</p>
        </div>
      </div>
      {/*<ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>*/}
    </div>
  );
}
