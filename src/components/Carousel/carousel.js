import React, { Component } from 'react';
import Slide from './slide';
import ForwardArrow from "./forwardArrow.js";
import BackArrow from "./backArrow.js";
import {portProj} from "../../data/PortfolioInfo.js";
import "./carousel.css";


export default class ProjectCarousel extends Component{
  constructor(props){
    super(props);

    this.state={
      activeIndex: 0,
      lengthState: portProj.length
    };
  }

  goToNextSlide(){
   let index = this.state.activeIndex;
   let length = this.state.lengthState;

   if(index === length - 1){
     index = 0;
   } else {
     index++;
   }
   console.log("next arrow clicked");
   this.setState({
     activeIndex: index
   }, [])
 }

 //console.log('this is activeIndex outside the map()', activeIndex);
 goToPrevSlide(){
   let index = this.state.activeIndex;
   let length = this.state.lengthState;

   if(this.index < 1){
     index = length - 1;
   } else {
     index--;
   }
   console.log("back arrow clicked", this.lengthState);
   this.setState({
     activeIndex: index
   }, [])
 }

 render(){
   console.log("active index", this.state.activeIndex + 1);
   return(
     <div className="slider-wrapper">
        <div className="carousel-items">
          <BackArrow goToPrevSlide={()=> this.goToPrevSlide()}/>
            <div className="carousel-info">
              <Slide
                activeIndex={this.state.activeIndex}
                goToNextSlide={()=> this.goToNextSlide()}
              />
            </div>
          <ForwardArrow goToNextSlide={()=> this.goToNextSlide} />
        </div>
     </div>
   );
 }

}
