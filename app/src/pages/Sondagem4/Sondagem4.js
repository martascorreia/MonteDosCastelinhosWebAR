import React, { useState } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons"
import "../../index.css"
import "./Sondagem4.css"
import sondagem4Img from '../../resources/images/sondagem4.1.png';
import Accordion from '../../components/Accordion/Accordion'
import TextButton from "../../components/TextButton/TextButton.js"
import { Link } from 'react-router-dom';

function Sondagem4() {
    const [tabSelected, setTabSelected] = useState(1);

    return (
        <div className="Sondagem4" id="sondagem4">
            <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
            <div className="content sondagemContent">
                <div className='infoTitle'>
                    <div className='title'>Sondagem 4</div>
                </div>
                <div className='tabs'>
                    <div className={`tabType ${tabSelected == 1 ? "tabSelected" : ""}`} onClick={() => setTabSelected(1)}>
                        Informação
                    </div>
                    <div className={`tabType ${tabSelected == 2 ? "tabSelected" : ""}`} onClick={() => setTabSelected(2)}>
                        Experiências
                    </div>
                </div>
                {tabSelected == 1 &&
                    <div className='tabContent'>
                        <div className='accordions'>
                            <Accordion
                                accordionOpen={true}
                                title="História"
                                content="Em 2008 durante os trabalhos de prospeção desenvolvidos numa plataforma bastante
                                inclinada a Norte da estrada que conduz ao topo do monte, deparámo-nos com algumas
                                concentrações pouco usuais de materiais arqueológicos. Entre estes, sobressaía um
                                conjunto de fragmentos cerâmicos em conexão pertencentes a um contentor de
                                armazenamento de época romana republicana, colocado a descoberto pelos agentes
                                atmosféricos. Com o objetivo, de tentar perceber o que se passava nesta zona do
                                povoado e se porventura a presença desta peça indicava algum contexto preservado,
                                decidimos abrir uma sondagem de dois metros de lado. O desenvolver da escavação e a
                                qualidade da sequência estratigráfica identificada, conduziu que esta primeira sondagem
                                fosse progressivamente alargada ao longo das campanhas subsequentes, para uma"/>
                            <Accordion
                                accordionOpen={false}
                                title="Escavações"
                                content="Em 2008 durante os trabalhos de prospeção desenvolvidos numa plataforma bastante
                                inclinada a Norte da estrada que conduz ao topo do monte, deparámo-nos com algumas
                                concentrações pouco usuais de materiais arqueológicos. Entre estes, sobressaía um
                                conjunto de fragmentos cerâmicos em conexão pertencentes a um contentor de
                                armazenamento de época romana republicana, colocado a descoberto pelos agentes
                                atmosféricos. Com o objetivo, de tentar perceber o que se passava nesta zona do
                                povoado e se porventura a presença desta peça indicava algum contexto preservado,
                                decidimos abrir uma sondagem de dois metros de lado. O desenvolver da escavação e a
                                qualidade da sequência estratigráfica identificada, conduziu que esta primeira sondagem
                                fosse progressivamente alargada ao longo das campanhas subsequentes, para uma"/>
                            <Accordion
                                accordionOpen={false}
                                title="Objectos encontrados"
                                content="Elargada ao longo das campanhas subsequentes, para uma" />
                            <img className='infoImage' src={sondagem4Img} />
                        </div>
                    </div>
                }
                {tabSelected == 2 &&
                    <div className='tabContent'>
                        <div className='experiences'>
                            <div className='description'>
                                Peuqena edescr9ufeiwf sobre RA oeifpwoeijfpwoeijfpwoiejfpoiwnada a Norte da estrada que conduz ao topo do monte, deparámo-nos com algumas
                                concentrações:
                            </div>
                            <div className='experiencesMenu'>
                                <Link to={'/MonteDosCastelinhosWebAR/ra41'} className="nav-link"><TextButton text="RA - Sondagem 4.1" /></Link>
                                <Link to={'/MonteDosCastelinhosWebAR/ra43'} className="nav-link"><TextButton text="RA - Sondagem 4.3" /></Link>
                                <Link to={'/MonteDosCastelinhosWebAR/rv'} className="nav-link"><TextButton text="Realidade Virtual" /></Link>
                            </div>
                        </div>
                    </div>
                }
        </div >
        </div >
    );
}
export default Sondagem4;