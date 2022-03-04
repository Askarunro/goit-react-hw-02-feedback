// import React, { Component } from "react";
// import s from './Statistics.module.css';
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p>
        Good:<span>{good}</span>
      </p>
      <p>
        Neutral:<span>{neutral}</span>
      </p>
      <p>
        Bad:<span>{bad}</span>
      </p>
      <p>
        Total:<span>{total}</span>
      </p>
      <p>
        PositiveFeedback:<span>{positivePercentage}</span>%
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
