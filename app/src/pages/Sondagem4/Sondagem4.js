import React, { useState } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons"
import "../../index.css"
import "./Sondagem4.css"
import sondagem4Img from '../../resources/images/alignmentImages/sondagem4.1.png';
import Accordion from '../../components/Accordion/Accordion'
import SquareButton from '../../components/SquareButton/SquareButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import { AugmentedReality } from 'tabler-icons-react';
import { setOrientation } from '../../utils.js';

function Sondagem4() {
    setOrientation("portrait");
    const [tabSelected, setTabSelected] = useState(2);

    return (
        <div className="Sondagem4" id="sondagem4">
            <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
            <div className="content sondagemContent">
                <div className='infoTitle'>
                    <img className='sondagemImage' src={sondagem4Img} />
                    <div className='sondagemTitle'>Sondagem 4</div>
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
                            <div className='experiencesMenu'>
                                <SquareButton text="Realidade Aumentada" link="/MonteDosCastelinhosWebAR/ra41" icon={<AugmentedReality size={60} strokeWidth={1.5} />} id="1" />
                                <SquareButton text="Realidade Virtual" link="/MonteDosCastelinhosWebAR/rv" icon={<FontAwesomeIcon icon={faVrCardboard} />} id="2" />
                            </div>
                            <div className='description'>
                                Esta sondagem tem experiências de Realidade Aumentada e Realidade Virtual que visam auxiliar 
                                a visualização do que teriam sido estas ruínas.
                            </div>
                        </div>
                    </div>
                }
            </div >
        </div >
    );
}
export default Sondagem4;