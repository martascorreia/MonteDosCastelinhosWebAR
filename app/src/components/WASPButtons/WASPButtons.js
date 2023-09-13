import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faAngleUp, faAngleDown, faAngleDoubleUp, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import "../../index.css"
import "./WASPButtons.css"

function WASPButtons() {
  // Function to simulate a key press event
  const simulateKeyPress = (key) => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: key }));
    window.dispatchEvent(new KeyboardEvent('keyup', { key: key }));
  };

  // Handle camera movement based on mobile control clicks
  const handleMobileControlClick = (direction) => {
    // ... (calculate movementAmount and movement vector)

    switch (direction) {
      case 'w':
        simulateKeyPress('w');
        break;
      case 's':
        simulateKeyPress('s');
        break;
      case 'a':
        simulateKeyPress('a');
        break;
      case 'd':
        simulateKeyPress('d');
        break;
      // Handle other directions if needed
      default:
        break;
    }
  };

  return (
    <div className='waspButtons'>
      <div className='directionButtons'>
        <div className='upBtns'>
          <button className="roundBtn" onClick={() => handleMobileControlClick('w')}>
            <FontAwesomeIcon icon={faAngleUp} />
          </button>
        </div >
        <div className='middleBtns'>
          <button className="roundBtn" onClick={() => handleMobileControlClick('a')}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="roundBtn" onClick={() => handleMobileControlClick('d')}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <div className='downBtns'>
          <button className="roundBtn" onClick={() => handleMobileControlClick('s')}>
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        </div>
      </div>
      <div className='heightButtons'>
        <div className='upBtns'>
          <button className="roundBtn" onClick={() => activateKey('e')}>
            <FontAwesomeIcon icon={faAngleDoubleUp} />
          </button>
        </div >
        <div className='downBtns'>
          <button className="roundBtn" onClick={() => activateKey('r')}>
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WASPButtons;
