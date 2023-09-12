import React from 'react';
import "../../../index.css"
import "./../Sondagem.css"
import "./../Tabs.css"
import { setOrientation } from '../../../utils/utils.js';
import Sondagem4VRMap from '../../VirtualReality/Sondagem4VRMap';
import Accordion from '../../../components/Accordion/Accordion'

function VRTab({ sondagemID, info }) {
    setOrientation("portrait");
    return (
        <div className="VRTab">
            {info !== null && info.size != 0 && sondagemID == 4 &&
                <div className="VRSondagem4">
                    <div className='vrTitle'>
                        Realidade Virtual
                    </div>
                    <div className='description'>
                        <a dangerouslySetInnerHTML={{ __html: info.firstDescription }} />
                    </div>
                    <Sondagem4VRMap/>
                    <div className='instructions'>
                        <Accordion
                            accordionOpen={false}
                            title="Instruções"
                            content={<a dangerouslySetInnerHTML={{ __html: info.instructions }} />} />
                    </div>
                </div>
            }
        </div >
    );
}
export default VRTab;