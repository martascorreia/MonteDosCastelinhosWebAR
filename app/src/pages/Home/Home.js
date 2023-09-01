import React from 'react';
import logo from '../../resources/images/logo.png';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import TextButton from "../../components/TextButton/TextButton.js"
import { Link } from 'react-router-dom';
import "./Home.css"
import "../../index.css"
import "@fontsource/lexend-deca";
import { setOrientation } from '../../utils/utils.js';

function Home() {
  setOrientation("portrait");
  return (
    <div className="Home" id="home">
      <TopButtons isHome={true} />
      <div className="content">
        <img src={logo} className="logo" alt="logo" />
        <div className="menu">
          <Link to={'/MonteDosCastelinhosWebAR/sondagem4'} className="nav-link"><TextButton href="/MonteDosCastelinhosWebAR/sondagem4" text="Sondagem 4" /></Link>
          <Link to={'/MonteDosCastelinhosWebAR/sondagem4/ra41'} className="nav-link"><TextButton text="RA - Sondagem 4.1" /></Link>
          <Link to={'/MonteDosCastelinhosWebAR/sondagem4/ra42'} className="nav-link"><TextButton text="RA - Sondagem 4.2" /></Link>
          <Link to={'/MonteDosCastelinhosWebAR/sondagem4/ra43'} className="nav-link"><TextButton text="RA - Sondagem 4.3" /></Link>
          <Link to={'/MonteDosCastelinhosWebAR/sondagem4/rv'} className="nav-link"><TextButton text="Realidade Virtual" /></Link>
        </div>
      </div >
    </div>
  );
}
export default Home;