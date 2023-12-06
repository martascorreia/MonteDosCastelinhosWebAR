import React from 'react';
import "./SquareButton.css";
import "../../index.css"
import { Link } from 'react-router-dom';

const SquareButton = ({ text, link, icon }) => {

  return (
    <Link to={link} className="topBtns-nav-link">
      <button className="squareButton">
        <div className='squareBtnIcon'>
          {icon}
        </div>
        <div className='squareBtnText'>
          {text}
        </div>
      </button>
    </Link>
  );
}

export default SquareButton;
