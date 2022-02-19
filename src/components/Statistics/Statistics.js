import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import s from './Statistics.module.css';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  clickBtnGood = () => {
    this.setState((btnGoodState) => {
      return {
        good: btnGoodState.good + 1,
        total: btnGoodState.total + 1,
      };
    });
  };

  clickBtnNeutral = () => {
    this.setState((btnGoodNeutral) => {
      return {
        neutral: btnGoodNeutral.neutral + 1,
        total: btnGoodNeutral.total + 1,
      };
    });
  };

  clickBtnBad = () => {
    this.setState((btnGoodBad) => {
      return {
        bad: btnGoodBad.bad + 1,
        total: btnGoodBad.total + 1,
      };
    });
  };

  positiveFeedback = () => {
        this.setState((positiveFeedback)=>{
            return{
                positive: positiveFeedback.total / positiveFeedback.good
            }
        })
  };

  render() {
    return (
      <div>
        <div>
          <button type="button" onClick={this.clickBtnGood} data="good">
            Good
          </button>
          <button type="button" onClick={this.clickBtnNeutral} data="neutral">
            Neutral
          </button>
          <button type="button" onClick={this.clickBtnBad} data="bad">
            Bad
          </button>
        </div>

        <h2>Statistics</h2>
        <p>
          Good:<span>{this.state.good}</span>
        </p>
        <p>
          Neutral:<span> {this.state.neutral}</span>
        </p>
        <p>
          Bad:<span> {this.state.bad}</span>
        </p>
        <p>
          Total:<span> {this.state.total}</span>
        </p>
        <p>
          PositiveFeedback:<span>{this.state.positive}</span>
        %</p>
      </div>
    );
  }
}

export default Statistics;
