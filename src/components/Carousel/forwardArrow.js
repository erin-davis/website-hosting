import React, {Component} from "react";
import {forward} from "../../data/tabler-icons";

class ForwardArrow extends Component{
  render(){
    return(
      <span className="forward-arrow arrow" onClick={this.props.goToNextSlide}>
      {forward}
      </span>
    )
  }
}

export default ForwardArrow;
