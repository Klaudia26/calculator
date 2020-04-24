import React from 'react';
import './ClearButton.scss';
const ClearButton = (props) => {
  return (
    <div className="clear-button" onClick={props.handleClear}>
      {props.children}
    </div>
  );
};

export default ClearButton;
