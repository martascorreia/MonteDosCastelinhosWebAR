import React, { useState, useEffect } from 'react';
import "./TopButtons.css"
import "../../index.css"
import arrow from '../../resources/images/arrow.png';

function FullScreenPopUp() {
  return (
    <div className="FullScreenPopUp">
      <div className="arrow">
      <img src={arrow} id="arrow" alt="arrow" />
      </div>
      <div className="popUp">
        Por favor, utilize a aplicação em modo de ecrã inteiro para garantir todas as funcionalidades.
      </div>
    </div>
  );
}
export default FullScreenPopUp;