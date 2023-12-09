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
              para o Mestrado de Engenharia Informática na Faculdade de Ciências da Universidade de Lisboa.</a>
          </div>
          <Accordion
            id={1}
            accordionOpen={true}
            title={"Objetivo"}
            content={`<a>&nbsp;O objetivo principal do projeto foi explorar as tecnologias atualmente disponíveis para o desenvolvimento de Realidade Aumentada
              diretamente na Web, com foco em experiências para locais de Herança Cultural, como as ruínas do Monte dos Castelinhos.</a>`} />
          <Accordion
            id={2}
            accordionOpen={true}
            title={"Fontes"}
            content={`<a>&nbsp;Toda a informação relativa ao Monte dos Castelinhos foi baseada na publicação 
            <a href="https://repositorio.ul.pt/bitstream/10451/31329/1/MontedosCastelinhos.pdf"> "Monte dos Castelinhos, Vila Franca de Xira e a Conquista Romana do Vale to Tejo"
            </a> e da Tese de Doutoramento do Doutor João Pimenta <a href="https://repositorio.ul.pt/handle/10451/54143">
            "Monte dos Castelinhos e as dinâmicas da conquista romana da Península de Lisboa e baixo Tejo"</a>.</a>`} />
          <Accordion
            id={3}
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