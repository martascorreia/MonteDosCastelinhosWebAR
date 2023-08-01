import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faArrowUp, faArrowDown, faUpDown } from "@fortawesome/free-solid-svg-icons";
import "../../index.css"
import "./WASPButtons.css"

function WASPButtons({ }) {

  function activateKey(key){
    const event = new KeyboardEvent('keypress', {
      key: key,
    });
    console.log(event)
  }

  return (
    <div className='waspButtons'>
      <div className='upBtns'>
        <button className="roundBtn" onClick={() => activateKey('w')}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div >
      <div className='middleBtns'>
        <button className="roundBtn" onClick={() => activateKey('a')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="roundBtn" onClick={() => activateKey('')}>
          <FontAwesomeIcon icon={faUpDown} />
        </button>
        <button className="roundBtn" onClick={() => activateKey('d')}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className='downBtns'>
        <button className="roundBtn" onClick={() => activateKey('s')}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
    </div>
  );
}

export default WASPButtons;
