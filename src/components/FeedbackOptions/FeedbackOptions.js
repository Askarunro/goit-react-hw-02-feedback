// import React, {Component} from 'react';
import React from "react";

const feedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => {
  return (
    <>
      <button type="button" onClick={onClickGood} data="good">
        Good
      </button>
      <button type="button" onClick={onClickNeutral} data="neutral">
        Neutral
      </button>
      <button type="button" onClick={onClickBad} data="bad">
        Bad
      </button>
    </>
  );
};
export default feedbackOptions;
