import "./App.css";
import React, { Component } from "react";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";

let total = 0;
let positive = 0;

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    total += 1;
  };

  countPositiveFeedbackPercentage = () => {
    return (positive = Math.floor((this.state.good / total) * 100));
  };

  test=()=>{
    this.countPositiveFeedbackPercentage()
  }

  onClickBtn = (data) => {
    
    this.setState((prevState) => {
      this.test();
      return { [data]: prevState[data] + 1 };
    });
    this.countTotalFeedback();
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions ClickBtn={this.onClickBtn} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positive}
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
