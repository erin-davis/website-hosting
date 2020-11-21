import React, {Component} from "react";
import {Route, Link} from "react-router-dom";
import {portProj} from "../../data/PortfolioInfo.js";
import "./carousel.css";

export default class Slide extends Component{
  constructor(props){
    super(props);
    this.state = {
      portData : portProj
    };
  }

  render(){
    return(
      <div className="inner">
        {this.state.portData.map((proj, index) =>
          <article className={
            index === this.props.activeIndex ? "active-slide" : "inactive-slide"}
            key={index}>
              <img src={proj.screenshot} className="image" />
              <h3 className={index === 0 ? "main-slide heading" : "slider-item heading"}>{proj.name}</h3>
              <p>{proj.summary}</p>
              <a href={proj.repo}>Repo</a>
              <a href={proj.site}>Site</a>
          </article>
        )

        }
      </div>
    )
  }
}
