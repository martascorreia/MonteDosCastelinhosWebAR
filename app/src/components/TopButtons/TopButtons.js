import React, { useState, useEffect } from 'react';
import BackButton from './BackButton';
import TopLabel from './TopLabel';
import FullScreenButton from './FullScreenButton'
import FullScreenPopUp from "./FullScreenPopUp"
import "./TopButtons.css"

function TopButtons({ isHome, isARExperience, backUrl, cleanUp, label }) {
  const [fullScreen, setFullScreen] = useState(document.fullscreenElement != null);

  return (
    <div className="top">
      <div className="topButtons">
        {!isHome &&
          <BackButton backUrl={backUrl} cleanUp={cleanUp} />}
        {!isARExperience &&
          <FullScreenButton isFullScreen={fullScreen} setIsFullScreen={setFullScreen} />}
      </div>
      {label && <TopLabel label={label} />}
    </div>
  );
}

export default TopButtons;