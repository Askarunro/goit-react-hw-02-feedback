// import React, {Component} from 'react';
// import React from "react";
import React,  {Component} from "react";

class FeedbackOptions extends Component {


  handleBtnClick =(e) =>{
    const name = e.currentTarget.getAttribute('data-name')
    this.props.ClickBtn(name)
  }

 render(){
  return (
    <>
      <button type="button" onClick={this.handleBtnClick} data-name="good">
        Good
      </button>
      <button type="button" onClick={this.handleBtnClick} data-name="neutral">
        Neutral
      </button>
      <button type="button" onClick={this.handleBtnClick} data-name="bad">
        Bad
      </button>
    </>
  );
 }
};

export default FeedbackOptions;
