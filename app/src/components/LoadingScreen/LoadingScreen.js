
import React from 'react';
import ReactLoading from "react-loading";
import "./LoadingScreen.css"

function LoadingScreen() {

  return (
    <div className="loadingScreen">
      <ReactLoading type="spin" color="#86b38a"
        height={100} width={100} />
        A carregar...
    </div>
  );
}

export default LoadingScreen;