import React from 'react';
import logo from '../../resources/logo2.PNG';
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
          <Link to={'/ra'} className="nav-link"><TextButton text="Realidade Aumentada" /></Link>
          <Link to={'/racut'} className="nav-link"><TextButton text="Realidade Aumentada Cut" /></Link>
          <Link to={'/ragps'} className="nav-link"><TextButton text="RA GPS" /></Link>
          <Link to={'/raht'} className="nav-link"><TextButton text="RA Hit Tests" /></Link>
          <Link to={'/rv'} className="nav-link"><TextButton text="Realidade Virtual" /></Link>
        </div>
      </div >
    </div>
  );
}
export default Home;