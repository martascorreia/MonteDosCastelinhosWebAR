import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faAngleUp, faAngleDown, faAngleDoubleUp, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import "../../index.css"
import "./WASPButtons.css"

function WASPButtons({ cameraPosition, onCameraMovement }) {

  const activateKey = (direction) => {
    // Define movement amounts based on the button clicked
    const movementAmount = 5.0; // Adjust as needed

    // Calculate the new camera position based on the direction
    let newPosition = { x: 0, y: 0, z: 0, ...cameraPosition };
    switch (direction) {
      case 'w':
        newPosition.z -= movementAmount;
        break;
      case 'a':
        newPosition.x -= movementAmount;
        break;
      case 's':
        newPosition.z += movementAmount;
        break;
      case 'd':
        newPosition.x += movementAmount;
        break;
      case 'e':
        newPosition.y += movementAmount;
        break;
      case 'r':
        newPosition.y -= movementAmount;
        break;
      default:
        break;
    }

    // Apply the new camera position
    onCameraMovement(newPosition);
  }

  return (
    <div className='waspButtons'>
      <div className='directionButtons'>
        <div className='upBtns'>
          <button className="roundBtn" onClick={() => activateKey('w')}>
            <FontAwesomeIcon icon={faAngleUp} />
          </button>
        </div >
        <div className='middleBtns'>
          <button className="roundBtn" onClick={() => activateKey('a')}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="roundBtn" onClick={() => activateKey('d')}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <div className='downBtns'>
          <button className="roundBtn" onClick={() => activateKey('s')}>
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
