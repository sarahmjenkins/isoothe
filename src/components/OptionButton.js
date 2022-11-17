import React from 'react';
import '../styles/OptionButton.css';

const OptionButton = ({ optionName }) => {
  return (
    <li className="option">
        <img src="https://via.placeholder.com/50" alt="icon" className="option-icon" />
        <p className="option-title">{ optionName }</p>
    </li>
  );
}

export default OptionButton;