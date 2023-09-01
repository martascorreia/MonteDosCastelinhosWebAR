import React, { useState } from 'react';
import "../../../index.css"
import "./../Sondagem.css"
import SquareButton from '../../../components/SquareButton/SquareButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import { AugmentedReality } from 'tabler-icons-react';
import { setOrientation } from '../../../utils/utils.js';

function ExperiencesTab({ VRurl, ARurl }) {
    setOrientation("portrait");

    return (
        <div className="ExperiencesTab">
            <div className='experiences'>
                <div className='description'>
                    Esta sondagem tem experiências de Realidade Aumentada e Realidade Virtual que visam auxiliar
                    a visualização do que teriam sido estas ruínas.
                </div>
                <div className='experiencesMenu'>
                    {ARurl &&
                        <SquareButton text="Realidade Aumentada" link="/MonteDosCastelinhosWebAR/sondagem4/ra41" icon={<AugmentedReality size={60} strokeWidth={1.5} />} id="1" />}
                    {VRurl &&
                        <SquareButton text="Realidade Virtual" link="/MonteDosCastelinhosWebAR/sondagem4/rv" icon={<FontAwesomeIcon icon={faVrCardboard} />} id="2" />}
                </div>
            </div>
        </div>
    );
}
export default ExperiencesTab;