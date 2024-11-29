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
      <div className="content aboutContent">
        <div className='mainHeader'>
          <div className='sondagemTitle'>Sobre</div>
        </div>
        <div className='mainContent'>
          <div className='textContent'>
            <p> &nbsp;Esta aplicação aplicação foi desenvolvida no LASIGE, laboratório de investigação do Departamento de Informática,
              da Faculdade de Ciências da Universidade de Lisboa, no âmbito do Trabalho de Projeto <a href="https://repositorio.ulisboa.pt/handle/10400.5/95457">
              "Realidade Aumentada na Web aplicada à Herança Cultural"</a>,
              do Mestrado em Engenharia Informática. 
            </p>
          </div>
          <Accordion
            id={1}
            accordionOpen={true}
            title={"Objetivo"}
            content={`<p>&nbsp;O objetivo principal do projeto foi explorar as tecnologias atualmente disponíveis para o desenvolvimento de Realidade Aumentada
              diretamente na Web, com foco em experiências para locais de Herança Cultural, como as ruínas do Monte dos Castelinhos.</p>`} />
          <Accordion
            id={2}
            accordionOpen={true}
            title={"Monte dos Castelinhos"}
            content={`<p>&nbsp;Toda a informação relativa ao Monte dos Castelinhos foi baseada na publicação 
              <a href="https://repositorio.ul.pt/bitstream/10451/31329/1/MontedosCastelinhos.pdf"> "Monte dos Castelinhos, Vila Franca de Xira e a Conquista Romana do Vale to Tejo"</a>
               e da Tese de Doutoramento do Doutor João Pimenta <a href="https://repositorio.ul.pt/handle/10451/54143">
            "Monte dos Castelinhos e as dinâmicas da conquista romana da Península de Lisboa e baixo Tejo"</a>.</p>`} />
          <Accordion
            id={3}
            accordionOpen={true}
            title={"Autores"}
            content={`<p>&nbsp;Esta aplicação foi realizada por <b>Marta Correia</b>, aluna da Faculdade de Ciências da Universidade de Lisboa, com a orientação da 
            <b>Professora Doutora Maria Beatriz Duarte Pereira do Carmo</b> e da <b>Professora Doutora Ana Paula Boler Cláudio</b>.</p>`} />
        </div>
      </div >
    </div>
  );
}
export default About;