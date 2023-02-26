import React from 'react';
import BackButton from './BackButton';
import FullScreenButton from './FullScreenButton'
import "./TopButtons.css"

function TopButtons({isHome, backUrl}) {
  return (
    <div className="topButtons">
      {!isHome &&
      <BackButton backUrl={backUrl}/>}
      <FullScreenButton/>
    </div>
  );
}

export default TopButtons;