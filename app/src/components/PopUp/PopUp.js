import React, { useState, useEffect } from 'react';
import "./PopUp.css"
import "../../index.css"
import TextButton from "../TextButton/TextButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

function PopUp({ onReturn, clue }) {

  return (
    <div className="PopUp">
      <div className="popUp">
        <div className='popUpTitle'>
          <div className='popUpIcon'>
            <FontAwesomeIcon icon={faTriangleExclamation} />
          </div>
          Instruções de Alinhamento
        </div>
        <div>
          Alinhe a câmara com a imagem no ecrã e clique em "Alinhado".
          <br />
          {clue}
        </div>
        <TextButton className="permissionsBtn" text="Ok" acceptPermissions={onReturn} />
      </div>
    </div>
  );
}
export default PopUp;