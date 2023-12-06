import React, { useState, useEffect } from 'react';
import BackButton from './BackButton';
import TopLabel from './TopLabel';
import FullScreenButton from './FullScreenButton'
import FullScreenPopUp from "./FullScreenPopUp"
import "./TopButtons.css"

function TopButtons({ isHome, clickFullScreen, hideFullScreenButton, backUrl, cleanUp, label }) {
  const [fullScreen, setFullScreen] = useState(document.fullscreenElement != null);
  const [permissionsAccepted, setPermissionsAccepted] = useState(localStorage.getItem('permissionsAccepted') == 'true');

  return (
    <div className="top">
      {!fullScreen && permissionsAccepted && !hideFullScreenButton &&
        <FullScreenPopUp />}
      <div className="topButtons">
        {!isHome &&
          <BackButton backUrl={backUrl} cleanUp={cleanUp} />}
        {!hideFullScreenButton &&
          <FullScreenButton isFullScreen={fullScreen} setIsFullScreen={setFullScreen} clickFullScreen={clickFullScreen}/>}
      </div>
      {label && <TopLabel label={label} />}
    </div>
  );
}

export default TopButtons;