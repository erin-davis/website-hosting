import React, {useState} from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import {portProj} from "../data/PortfolioInfo.js";
import {forward, back} from "../data/tabler-icons";
import "../styles/Projects.css";

function Projects(){

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) =>{
    setIndex(selectedIndex);
  }

  return(
      <div className="react-carousel">
        <h2>Projects!! Go here!!</h2>
        <Carousel activeIndex={index} onSelect={handleSelect} bsPrefix="carousel">
        {portProj.map(item =>(
            <Carousel.Item bsPrefix="carousel-item">
              <img
                className="project-screen"
                src={item.screenshot}
                alt={`${item.name} screenshot`}
              />
              <Carousel.Caption bsPrefix="carousel-caption">
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
  );

}

export default Projects;