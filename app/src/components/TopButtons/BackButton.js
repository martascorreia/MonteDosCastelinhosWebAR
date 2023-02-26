import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "../../index.css"

function BackButton({backUrl}) {
  return (
    <Link to={backUrl} className="nav-link">
      <button className="backBtn" id="roundBtn">
        <FontAwesomeIcon icon={faArrowLeft}/>
      </button>      
    </Link>
  );
}

export default BackButton;
