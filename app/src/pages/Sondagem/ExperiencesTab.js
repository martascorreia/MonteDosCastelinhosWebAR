import React, { useState } from 'react';
import "../../index.css"
import "./Sondagem.css"
import "./Tabs.css"
import SquareButton from '../../components/SquareButton/SquareButton';
import PopUp from '../../components/PopUp/PopUp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import { AugmentedReality } from 'tabler-icons-react';
import { setOrientation } from '../../utils/utils.js';
import { Link } from 'react-router-dom';

function ExperiencesTab({ VRurl, ARurl }) {
    setOrientation("portrait");
    const [popUp, setPopUp] = useState(false);

    return (
        <div className="ExperiencesTab">
            <div className='experiences'>
                <div className='description'>
                    Esta sondagem tem experiências de Realidade Aumentada e Realidade Virtual que visam auxiliar
                    a visualização do que teriam sido estas ruínas.
                </div>
                <div className='experiencesMenu'>
                    {ARurl &&
                        <SquareButton text="Realidade Aumentada"
                            onClick={() => setPopUp(true)}
                            link={ARurl}
                            icon={<AugmentedReality size={60}
                                strokeWidth={1.5} />} />}
                    {VRurl &&
                        <SquareButton text="Realidade Virtual"
                            onClick={() => document.getElementById("vrHiddenBtn").click()}
                            link={VRurl}
                            icon={<FontAwesomeIcon icon={faVrCardboard} />} />}
                    {VRurl &&
                        <Link hidden to={VRurl}><button id={"vrHiddenBtn"} hidden /> </Link>}
                </div>
                {popUp && <PopUp onClose={() => setPopUp(false)}/>}
            </div>
        </div >
    );
}
export default ExperiencesTab;