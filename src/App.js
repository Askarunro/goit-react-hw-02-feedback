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
    return (total += 1);
  };

  test = () => {
    positive = Math.floor(100 / total);
  };

  onClickBtn = (data) => {
    total += 1;
    this.setState((prevState) => ({ [data]: prevState[data] + 1 }));
    this.setState(() => this.test());
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
              positivePercentage={positive * this.state.good}
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
