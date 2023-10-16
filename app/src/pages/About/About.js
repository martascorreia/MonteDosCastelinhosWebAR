import TopButtons from "../../components/TopButtons/TopButtons.js"
import "./About.css"
import "../../index.css"
import { useEffect } from "react";
import { cleanSondagemFlags } from '../../utils/utils.js';
import Accordion from '../../components/Accordion/Accordion'

function About() {

  useEffect(() => {
    cleanSondagemFlags();
  });

  return (
    <div className="About">
      <TopButtons backUrl={"/"} />
      <div className="content mapContent">
        <div className='mainHeader'>
          <div className='sondagemTitle'>Sobre</div>
        </div>
        <div className='mainContent'>
          <div className='textContent'>
            <a>&nbsp; Esta aplicação web foi desenvolvida no âmbito do Projeto de Engenharia Informática <b>"Realidade Aumentada na Web aplicada à Herança Cultural"</b>,
              para o Mestrado de Engenharia Informática na Faculdade de Ciências da Universidade de Lisboa, em colaboração com o Museu Arqueológico de Vila Franca de Xira.</a>
          </div>
          <Accordion
            id={1}
            accordionOpen={true}
            title={"Objetivo"}
            content={`
            <a>&nbsp;O objetivo principal do projeto foi explorar as tecnologias atualmente disponíveis para o desenvolvimento de Realidade Aumentada
              diretamente na Web, com foco em experiências para locais de Herança Cultural, como as ruínas do Monte dos Castelinhos.</a>`} />
          <Accordion
            id={1}
            accordionOpen={true}
            title={"Autores"}
            content={`<a>&nbsp;Esta aplicação foi realizada por <b>Marta Correia</b>, aluna da Faculdade de Ciências da Universidade de Lisboa, com a co-orientação da 
            <b>Professora            Doutora Maria Beatriz Duarte Pereira do Carmo</b> e da <b>Professora Doutora Ana Paula Boler Cláudio</b>.</a>`} />
        </div>
      </div >
    </div>
  );
}
export default About;