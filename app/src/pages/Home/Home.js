import React from 'react';
import logo from '../../resources/logo.PNG';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import TextButton from "../../components/TextButton.js"
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
          <Link to={'/ra41'} className="nav-link"><TextButton text="RA - Sondagem 4.1" /></Link>
          <Link to={'/ra43'} className="nav-link"><TextButton text="RA - Sondagem 4.3" /></Link>
          <Link to={'/ragps'} className="nav-link"><TextButton text="RA GPS" /></Link>
          <Link to={'/rv'} className="nav-link"><TextButton text="Realidade Virtual" /></Link>
        </div>
      </div >
    </div>
  );
}
export default Home;