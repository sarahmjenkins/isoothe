import React from "react";
import "../styles/Senses.css";

const Senses = () => {

  return (
    <div className="senses-main">
        <div className="senses-contain">
            <h1 className="senses-h1">Connect with as many of your senses as you can</h1>
            <h2 className="senses-h2">Try to do the following - check off boxes if you like</h2>
      <div>
        <h3>List 5 things you can see</h3>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <h3>List 4 things you can feel</h3>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <h3>List 3 things you can hear</h3>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <h3>List 2 things you can smell</h3>
        <input type="checkbox" />
        <input type="checkbox" />
        <h3>List 1 thing you can taste</h3>
        <input type="checkbox" />
      </div>
        </div>
    </div>
  );
};
export default Senses;