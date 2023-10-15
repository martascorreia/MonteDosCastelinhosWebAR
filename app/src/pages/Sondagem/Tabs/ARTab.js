import React, { useEffect, useState } from 'react';
import "../../../index.css"
import "./../Sondagem.css"
import "./../Tabs.css"
import { setOrientation } from '../../../utils/utils.js';
import Sondagem4ARMap from '../../AugmentedReality/Sondagem4ARMap';
import Accordion from '../../../components/Accordion/Accordion'

function ARTab({ sondagemID, info }) {
    setOrientation("portrait");
    return (
        <div className="ARTab">
            {info !== null && info.size != 0 && sondagemID == 4 &&
                <div className="ARSondagem4">
                    <div className='raTitle'>
                        Realidade Aumentada
                    </div>
                    <div className='description'>
                        <a dangerouslySetInnerHTML={{ __html: info.firstDescription }} />
                    </div>
                    <Sondagem4ARMap />
                    <div className='instructions'>
                        <Accordion
                            accordionOpen={true}
                            title="Instruções"
                            content={<a dangerouslySetInnerHTML={{ __html: info.instructions }} />} />
                    </div>
                </div>
            }
        </div >
    );
}
export default ARTab;