
import React, { useState } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons.js"
import "./Sondagem4AR.css"
import "../../../index.css"
import { Link } from 'react-router-dom';
import { setOrientation } from '../../../utils/utils.js';

function Sondagem4ARMap({ instructions }) {
  setOrientation("landscape");
  const [sondagem4ARAFlag, setSondagem4ARAFlag] = useState(localStorage.getItem('sondagem4ARAFlag'));
  const [sondagem4ARBFlag, setSondagem4ARBFlag] = useState(localStorage.getItem('sondagem4ARBFlag'));
  const [sondagem4ARCFlag, setSondagem4ARCFlag] = useState(localStorage.getItem('sondagem4ARCFlag'));

  return (
    <div className="Sonsagem4ARMap">
      <TopButtons hideFullScreenButton={true} backUrl={"/sondagem4"} />
      <div className="content Sonsagem4ARMapContent">
        <div className='Sonsagem4ARMapElements'>
          <div className="arMapInstructions">
            <div className="arMapInstructionsTitle">
              Instruções
            </div>
            <div dangerouslySetInnerHTML={{ __html: instructions }} />
          </div>
          <div className="arMapContent">
            <img className='mapImage' src={process.env.PUBLIC_URL + "/images/Maps/sondagem4ARMapSmaller.jpg"} />
            <Link to={'/sondagem4/raA'} className="nav-link">
              <button className='mapPoint mapPointAAR4'>
                {(sondagem4ARAFlag == null || sondagem4ARAFlag == 'false') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointA.png"} />}
                {(sondagem4ARAFlag == 'true') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointAdarker.png"} />}
              </button>
            </Link>
            <Link to={'/sondagem4/raB'} className="nav-link">
              <button className='mapPoint mapPointBAR4'>
                {(sondagem4ARBFlag == null || sondagem4ARBFlag == 'false') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointB.png"} />}
                {(sondagem4ARBFlag == 'true') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointBdarker.png"} />}
              </button>
            </Link>
            <Link to={'/sondagem4/raC'} className="nav-link">
              <button className='mapPoint mapPointCAR4'>
                {(sondagem4ARCFlag == null || sondagem4ARCFlag == 'false') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointC.png"} />}
                {(sondagem4ARCFlag == 'true') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointCdarker.png"} />}
              </button>
            </Link>
          </div>
        </div>
      </div >
    </div>
  );
}
export default Sondagem4ARMap;