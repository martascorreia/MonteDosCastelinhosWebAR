import React, {useState} from 'react';
import logo from '../../resources/images/logo.png';
import TopButtons from '../../components/TopButtons/TopButtons'
import TextButton from "../../components/TextButton/TextButton"
import { Link } from 'react-router-dom';
import "./Home.css"
import "../../index.css"
import "@fontsource/lexend-deca";
import { setOrientation} from '../../utils/utils.js';
import PermissionsPopUp from '../../components/PermissionsPopUp/PermissionsPopUp.js';

function Home() {
  setOrientation("portrait");
  const [permissionsAccepted, setPermissionsAccepted] = useState(localStorage.getItem('permissionsAccepted') == 'true');
  
  function handleAcceptedPermissions(){
    setPermissionsAccepted(true);
  }

  return (
    <div className="Home" id="home">
      {!permissionsAccepted && <PermissionsPopUp onReturn={handleAcceptedPermissions}/>}
      <TopButtons isHome={true}/>
      <div className="content">
        <img src={logo} className="logo" alt="logo" />
        <div className="menu">
          <Link to={'/mapa'} className="nav-link"><TextButton href="/mapa" text="Visita" /></Link>
          <Link to={'/mais'} className="nav-link"><TextButton href="/mais" text="Sobre" /></Link>
        </div>
      </div >
    </div>
  );
}
export default Home;