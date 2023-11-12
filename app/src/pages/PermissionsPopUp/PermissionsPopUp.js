import React, { useState, useEffect } from 'react';
import "./PermissionsPopUp.css"
import "../../index.css"
import TextButton from "../../components/TextButton/TextButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

function PermissionsPopUp({onReturn}) {

  async function acceptPermissions() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    localStorage.setItem('permissionsAccepted', 'true');
    onReturn();
  };

  return (
    <div className="PermissionsPopUp">
      <div className="popUp">
        <div className='permissionsIcon'>
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </div>
        <div>
          Permite a utilização da câmara e o modo de ecrã inteiro?
        </div>
        <TextButton className="permissionsBtn" text="Ok" acceptPermissions={acceptPermissions} />
      </div>
    </div>
  );
}
export default PermissionsPopUp;