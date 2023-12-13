
import React, { useState } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons.js"
import "./Sondagem4VRMap.css"
import "../../../index.css"
import { Link } from 'react-router-dom';
import { setOrientation } from '../../../utils/utils.js';
import sondagem4VRMap from '../../../resources/images/maps/sondagem4VRMap.jpg';
import sondagem4VRMapLabels from '../../../resources/images/maps/vrMapLabels.png';

import pointA from '../../../resources/images/mapPoints/pointA.png';
import pointAdarker from '../../../resources/images/mapPoints/pointAdarker.png';
import pointB from '../../../resources/images/mapPoints/pointB.png';
import pointBdarker from '../../../resources/images/mapPoints/pointBdarker.png';
import pointC from '../../../resources/images/mapPoints/pointC.png';
import pointCdarker from '../../../resources/images/mapPoints/pointCdarker.png';
import pointD from '../../../resources/images/mapPoints/pointD.png';
import pointDdarker from '../../../resources/images/mapPoints/pointDdarker.png';
import pointE from '../../../resources/images/mapPoints/pointE.png';
import pointEdarker from '../../../resources/images/mapPoints/pointEdarker.png';

function Sondagem4VRMap({ instructions }) {
  setOrientation("landscape");
  const [sondagem4VRAFlag, setSondagem4VRAFlag] = useState(localStorage.getItem('sondagem4VRAFlag') == 'true' ? true : false);
  const [sondagem4VRBFlag, setSondagem4VRBFlag] = useState(localStorage.getItem('sondagem4VRBFlag') == 'true' ? true : false);
  const [sondagem4VRCFlag, setSondagem4VRCFlag] = useState(localStorage.getItem('sondagem4VRCFlag') == 'true' ? true : false);
  const [sondagem4VRDFlag, setSondagem4VRDFlag] = useState(localStorage.getItem('sondagem4VRDFlag') == 'true' ? true : false);
  const [sondagem4VREFlag, setSondagem4VREFlag] = useState(localStorage.getItem('sondagem4VREFlag') == 'true' ? true : false);

  return (
    <div className="Sonsagem4VRMap">
      <TopButtons hideFullScreenButton={true} backUrl={"/sondagem4"} />
      <div className="content Sonsagem4ARMapContent">
        <div className='Sonsagem4ARMapElements'>
          <div className="arMapInstructions">
            <div className="arMapInstructionsTitle">
              Instruções
      <div className="content Sondagem4VRMapContent">
        <div className='Sondagem4VRMapElements'>
          <div className="vrMapInstructions">
            <div className="vrMapInstructionsText">
              <a className="vrMapInstructionsTitle">Instruções</a>
              <div dangerouslySetInnerHTML={{ __html: instructions }} />
            </div>
            <div className='vrMapLabels'>
              <img className='vrMapLabelsImage' src={sondagem4VRMapLabels} />
            </div>
          </div>
          <div className="vrMapContent">
            <img className='mapImage' src={sondagem4VRMap} />
            <Link to={'/sondagem4/rvA'} className="nav-link">
              <button className='mapPoint mapPointAVR4'>
                {sondagem4VRAFlag == null
                  ? <img className='mapPoints' src={pointAdarker} />
                  : <img className='mapPoints' src={pointA} />}
              </button>
            </Link>
            <Link to={'/sondagem4/rvB'} className="nav-link">
              <button className='mapPoint mapPointBVR4'>
                {sondagem4VRBFlag == null
                  ? <img className='mapPoints' src={pointBdarker} />
                  : <img className='mapPoints' src={pointB} />}
              </button>
            </Link>
            <Link to={'/sondagem4/rvC'} className="nav-link">
              <button className='mapPoint mapPointCVR4'>
                {sondagem4VRCFlag == null
                  ? <img className='mapPoints' src={pointCdarker} />
                  : <img className='mapPoints' src={pointC} />}

              </button>
            </Link>
            <Link to={'/sondagem4/rvD'} className="nav-link">
              <button className='mapPoint mapPointDVR4'>
                {sondagem4VRDFlag == null
                  ? <img className='mapPoints' src={pointDdarker} />
                  : <img className='mapPoints' src={pointD} />}
              </button>
            </Link>
            <Link to={'/sondagem4/rvE'} className="nav-link">
              <button className='mapPoint mapPointEVR4'>
                {sondagem4VREFlag == null
                  ? <img className='mapPoints' src={pointEdarker} />
                  : <img className='mapPoints' src={pointE} />}
              </button>
            </Link>
          </div>
        </div>
      </div >
    </div>
  );
}
export default Sondagem4VRMap;