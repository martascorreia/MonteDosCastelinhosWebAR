import React from 'react';
import logo from '../../resources/images/logo.png';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import TextButton from "../../components/TextButton/TextButton.js"
import { Link } from 'react-router-dom';
import "./Home.css"
import "../../index.css"
import "@fontsource/lexend-deca";

function Home() {
  return (
    <div className="Home" id="home">
      <TopButtons isHome={true} />
      <div className="content">
        <img src={logo} className="logo" alt="logo" />
        <div className="menu">
          <Link to={'/MonteDosCastelinhosWebAR/sondagem4'} className="nav-link"><TextButton text="Sondagem 4" /></Link>
          <Link to={'/MonteDosCastelinhosWebAR/ra41'} className="nav-link"><TextButton text="RA - Sondagem 4.1" /></Link>
          <Link to={'/MonteDosCastelinhosWebAR/ra43'} className="nav-link"><TextButton text="RA - Sondagem 4.3" /></Link>
          <Link to={'/MonteDosCastelinhosWebAR/rv'} className="nav-link"><TextButton text="Realidade Virtual" /></Link>
          <Link to={'/MonteDosCastelinhosWebAR/mapa'} className="nav-link"><TextButton text="Mapa" /></Link>
        </div>
      </div >
    </div>
  );
}
export default Home;