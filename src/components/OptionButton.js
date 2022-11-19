import React from 'react';
import '../styles/OptionButton.css';

const OptionButton = ({ optionName, optionImg}) => {
  return (
    <div className='option-container'>
      <li className="option">
          <img src={optionImg} alt="icon" className="option-icon" />
          <p className="option-title">{ optionName }</p>
      </li>
    </div>
  );
}

export default OptionButton;