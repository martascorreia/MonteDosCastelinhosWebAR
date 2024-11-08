import React, { useState, useEffect } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons"
import "../../index.css"
import "./Sondagem.css"
import { setOrientation, reloadPage, garbageCollect, setFullScreen } from '../../utils/utils.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AugmentedReality } from 'tabler-icons-react';
import { faVrCardboard, faCube } from "@fortawesome/free-solid-svg-icons";
import Accordion from '../../components/Accordion/Accordion'
import SquareButton from '../../components/SquareButton/SquareButton.js';

function Sondagem({ id, sondagemID, title, headerImage, info, ar, vr, mv }) {
    setOrientation("portrait");
    const [hasRefreshed, setHasRefreshed] = useState(localStorage.getItem('hasRefreshed') == 'false' ? false : true);

    useEffect(() => {
        if (!hasRefreshed) {
            localStorage.setItem('hasRefreshed', 'true');
            reloadPage();
            //garbageCollect();
        }
    }, [hasRefreshed]);

    return (
        <div className="Sondagem" id="sondagem">
            <TopButtons backUrl={"/mapa"} />
            <div className="content sondagemPageContent">
                <div className='sondagemHeader'>
                    <img className='sondagemImage' src={headerImage} />
                    <div className='sondagemTitle'>{title}</div>
                </div>
                <div className="sondagemContent">
                    {(ar || vr) &&
                        <div className="sondagemExperiences">
                            {ar && <SquareButton text={"Realidade Aumentada"} icon={<AugmentedReality width={50} height={50} strokeWidth={1.7} />} link="raMapa" onClick={() => setFullScreen(true)} />}
                            {vr && <SquareButton text={"Realidade Virtual"} icon={<FontAwesomeIcon icon={faVrCardboard} />} link="rvMapa" onClick={() => setFullScreen(true)}/>}
                            {mv && <SquareButton text={"Modelo 3D"} icon={<FontAwesomeIcon icon={faCube} />} link="modelo3D" onClick={() => setFullScreen(false)}/>}
                        </div >}
                    <div className="sondagemInfo">
                        <div className='accordions'>
                            {info &&
                                info.map((item, index) => (
                                    <Accordion
                                        key={index}
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