
import React from 'react';
import ReactLoading from "react-loading";
import "./LoadingScreen.css"

function LoadingScreen() {

  return (
    <div className="loadingScreen">
      <ReactLoading type="spin" color="#6FAFC9" height={100} width={100} />
      <div className='loadingScreenText'>
        <a className='loadingText'> A carregar...</a>
        <a className='supportingText'>(pode demorar alguns segundos)</a>
      </div>
    </div>
  );
}

export default LoadingScreen;