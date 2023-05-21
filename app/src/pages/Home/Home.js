import React from 'react';
import logo from '../../resources/logo2.PNG';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import TextButton from "../../components/TextButton.js"
import { Link } from 'react-router-dom';
import "./Home.css"
import "../../index.css"
import "@fontsource/lexend-deca";

function Home() {
  screen.orientation.unlock();

  return (
    <div className="Home" id="home">
      <TopButtons isHome={true} />
      <div className="content">
        <img src={logo} className="logo" alt="logo" />
        <div className="menu">
          <Link to={'/ra'} className="nav-link"><TextButton text="Realidade Aumentada" /></Link>
          <Link to={'/rv'} className="nav-link"><TextButton text="Realidade Virtual" /></Link>
        </div>
      </div >
    </div>
  );
}
export default Home;