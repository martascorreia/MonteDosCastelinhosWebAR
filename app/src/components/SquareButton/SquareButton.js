import React from 'react';
import "./SquareButton.css";
import { Link } from 'react-router-dom';

const SquareButton = ({ text, icon, link, id }) => {
  return (
    <div className="squareButton">
      <div id="squareBtn" href={link} onClick={() => document.getElementById("hiddenBtn" + id).click()}>
        {icon}
      </div>
      <div id="squareDescription">
        {text}
      </div>
      <Link hidden to={link}><button id={"hiddenBtn" + id} hidden /></Link>
    </div>
  );
}

export default SquareButton;
