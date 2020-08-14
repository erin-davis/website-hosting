/*this will be a component or maybe two that will basically be
an image, a short 2 sentence description, and a link to repo and the deployed site (heroku probs)*/
import React, {useState} from "react";
import {portProj} from "../data/PortfolioInfo.js";
import {forward, back} from "../data/tabler-icons";

export default function Projects(props) {
  //console.log("from Projects.js", portProj)
  const [activeIndex, setActiveIndex] = useState({
    activeIndex: 0
  })

  let contentInfo = document.getElementById('content-info')

  console.log(contentInfo);

  let showInfo = () =>{
    contentInfo.classList.add('show-info')
  }



  //end slideshow controls
  return (
    <div className="wrapper">
      <div className="carousel-nav">
        <span className="back">{back}</span>
        <div className="inputs">
          <input checked type="radio" name="slider" id="slide1"/>
          <input type="radio" name="slider" id="slide2"/>
          <input type="radio" name="slider" id="slide3"/>
          <input type="radio" name="slider" id="slide4"/>
          <input type="radio" name="slider" id="slide5"/>
          <input type="radio" name="slider" id="slide6"/>
        </div>
        <span className="forward">{forward}</span>
      </div>
      <div className="slider-wrapper">
        <div className="inner">
          {portProj.map((proj, index) =>{
            return(
              <article className="carousel-slide" onClick={showInfo}>
                <img src={proj.screenshot} className="image" />
                <div className="info" id="content-info">
                  <h3>{proj.name}</h3>
                <section className="content">
                <p>{proj.summary}</p>
                <a href={proj.repo}>Repo</a>
                <a href={proj.site}>Site</a>
                </section>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div className="slider-prev-next-control">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
        <label for="slide4"></label>
        <label for="slide5"></label>
        <label for="slide6"></label>
      </div>
      <div className="slider-dot-control">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
        <label for="slide4"></label>
        <label for="slide5"></label>
        <label for="slide6"></label>
      </div>
    </div>
  );
}
