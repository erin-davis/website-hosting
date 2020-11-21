import React, {Component} from "react";
import {back} from "../../data/tabler-icons";

class BackArrow extends Component{
  render(){
    return(
      <span className="back-arrow arrow" onClick={this.props.goToPrevSlide}>
      {back}
      </span>
    )
  }
}

export default BackArrow;
