
import React, { useState } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons.js"
import "./Sondagem4AR.css"
import "../../../index.css"
import { Link } from 'react-router-dom';
import { setOrientation, setFullScreen} from '../../../utils/utils.js';

import sondagem4ARMap from '../../../resources/images/maps/sondagem4ARMap.jpg';
import pointA from '../../../resources/images/mapPoints/pointA.png';
import pointAdarker from '../../../resources/images/mapPoints/pointAdarker.png';
import pointB from '../../../resources/images/mapPoints/pointB.png';
import pointBdarker from '../../../resources/images/mapPoints/pointBdarker.png';
import pointC from '../../../resources/images/mapPoints/pointC.png';
import pointCdarker from '../../../resources/images/mapPoints/pointCdarker.png';

function Sondagem4ARMap({ instructions }) {
  setOrientation("landscape");
  const [sondagem4ARAFlag, setSondagem4ARAFlag] = useState(localStorage.getItem('sondagem4ARAFlag') == 'true' ? true : false);
  const [sondagem4ARBFlag, setSondagem4ARBFlag] = useState(localStorage.getItem('sondagem4ARBFlag') == 'true' ? true : false);
  const [sondagem4ARCFlag, setSondagem4ARCFlag] = useState(localStorage.getItem('sondagem4ARCFlag') == 'true' ? true : false);

  const cleanUp = () => {
    setFullScreen(false);
  };

  return (
    <div className="Sonsagem4ARMap">
      <TopButtons hideFullScreenButton={true} cleanUp={() => cleanUp()} backUrl={"/sondagem4"} />
      <div className="content Sondagem4ARMapContent">
        <div className='Sonsagem4ARMapElements'>
          <div className="arMapInstructions">
            <div className="arMapInstructionsTitle">
              Instruções
            </div>
            <div dangerouslySetInnerHTML={{ __html: instructions }} />
          </div>
          <div className="arMapContent">
            <img className='mapImage' src={sondagem4ARMap} />
            <Link to={'/sondagem4/raA'} className="nav-link">
              <button className='mapPoint mapPointAAR4'>
                {sondagem4ARAFlag
                  ? <img className='mapPoints' src={pointAdarker} />
                  : <img className='mapPoints' src={pointA} />}
              </button>
            </Link>
            <Link to={'/sondagem4/raB'} className="nav-link">
              <button className='mapPoint mapPointBAR4'>
                {sondagem4ARBFlag
                  ? <img className='mapPoints' src={pointBdarker} />
                  : <img className='mapPoints' src={pointB} />}
              </button>
            </Link>
            <Link to={'/sondagem4/raC'} className="nav-link">
              <button className='mapPoint mapPointCAR4'>
                {sondagem4ARCFlag
                  ? <img className='mapPoints' src={pointCdarker} />
                  : <img className='mapPoints' src={pointC} />}
              </button>
            </Link>
          </div>
        </div>
      </div >
    </div>
  );
}
export default Sondagem4ARMap;