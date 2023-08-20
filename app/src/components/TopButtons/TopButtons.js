import React from 'react';
import BackButton from './BackButton';
import FullScreenButton from './FullScreenButton'
import "./TopButtons.css"

function TopButtons({isHome, backUrl, cleanUp}) {
  return (
    <div className="topButtons">
      {!isHome &&
      <BackButton backUrl={backUrl} cleanUp={cleanUp}/>}
      <FullScreenButton isFullScreen={document.fullscreenElement != null} />
    </div>
  );
}

export default TopButtons;