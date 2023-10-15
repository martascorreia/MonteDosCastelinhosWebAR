import React from 'react';
import BackButton from './BackButton';
import TopLabel from './TopLabel';
import FullScreenButton from './FullScreenButton'
import "./TopButtons.css"

function TopButtons({ isHome, backUrl, cleanUp, label }) {
  return (
    <div className="top">
      <div className="topButtons">
        {!isHome &&
          <BackButton backUrl={backUrl} cleanUp={cleanUp} />}
        <FullScreenButton isFullScreen={document.fullscreenElement != null} />
      </div>
      {label && <TopLabel label={label} />}
    </div>
  );
}

export default TopButtons;