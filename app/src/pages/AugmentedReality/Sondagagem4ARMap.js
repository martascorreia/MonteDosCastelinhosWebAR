import React from 'react';
import "../../index.css"
import "./AugmentedReality.css"

function Sondagem4ARMap() {
  console.log(process.env.PUBLIC_URL + "/images/sondagem4ARMap")
  return (
    <div className="Sondagem4ARMap">
      <img className='mapImage' src={process.env.PUBLIC_URL + "/images/sondagem4ARMap.jpg"} />
      <button className='mapPoint1'>
        <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point1.png"} />
      </button>
    </div>
  );
}
export default Sondagem4ARMap;