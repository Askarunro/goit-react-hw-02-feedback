import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  countTotalFeedback = () => {
    this.setState((countTotal) => {
      //     const values = Object.values(countTotal);
      //   let total = 0 ;
      //   for (const value of values) {
      //     total += value;
      //   }
      return {
        total: countTotal.total + 1,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((countPositive) => {
      return {
        positive: Math.floor((countPositive.good / countPositive.total) * 100),
      };
    });
  };

  clickBtnGood = () => {
    this.setState((btnGoodState) => {
      return {
        good: btnGoodState.good + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  clickBtnNeutral = () => {
    this.setState((btnNeutral) => {
      return {
        neutral: btnNeutral.neutral + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  clickBtnBad = () => {
    this.setState((btnBad) => {
      return {
        bad: btnBad.bad + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onClickGood={this.clickBtnGood}
            onClickNeutral={this.clickBtnNeutral}
            onClickBad={this.clickBtnBad}
          />
        </Section>
        <Section title="Statistics">
          {this.state.total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
