import React, { useState, useEffect } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons"
import "../../index.css"
import "./Sondagem.css"
import { setOrientation } from '../../utils/utils.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AugmentedReality } from 'tabler-icons-react';
import { faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import Accordion from '../../components/Accordion/Accordion'
import SquareButton from '../../components/SquareButton/SquareButton.js';

function Sondagem({ id, sondagemID, title, headerImage, info, ra, rv }) {
    setOrientation("portrait");
    const [hasRefreshed, setHasRefreshed] = useState(localStorage.getItem('hasRefreshed') == 'false' ? false : true);

    useEffect(() => {
        if (!hasRefreshed) {
            localStorage.setItem('hasRefreshed', 'true');
            window.location.reload();
        }
    }, []);

    return (
        <div className="Sondagem" id="sondagem">
            <TopButtons backUrl={"/mapa"} />
            <div className="content sondagemPageContent">
                <div className='sondagemHeader'>
                    <img className='sondagemImage' src={process.env.PUBLIC_URL + headerImage} />
                    <div className='sondagemTitle'>{title}</div>
                </div>
                <div className="sondagemContent">
                    {(ra || rv) &&
                        <div className="sondagemExperiences">
                            {ra && <SquareButton text={"Realidade Aumentada"} icon={<AugmentedReality width={50} height={45} strokeWidth={1.7} />} link="raMapa"/>}
                            {rv && <SquareButton text={"Realidade Virtual"} icon={<FontAwesomeIcon icon={faVrCardboard} />} link="rvMapa"/>}
                        </div >}
                    <div className="sondagemInfo">
                        <div className='accordions'>
                            {info &&
                                info.map((item, index) => (
                                    <Accordion
                                        id={item.id}
                                        accordionOpen={item.isOpen}
                                        title={item.title}
                                        content={item.content} />
                                ))}
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
}
export default Sondagem;