import React from 'react';
import './Button.scss';

const isOperator = (val) => {
  return !isNaN(val) || val === '.' || val === '=';
};
const Button = (props) => {
  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : 'operators'
      }`}
      onClick={() => props.addToInput(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
