import React, { useEffect, useState } from 'react';
import "../../../index.css"
import "./../Sondagem.css"
import "./../Tabs.css"
import { setOrientation } from '../../../utils/utils.js';
import Sondagem4ARMap from '../../AugmentedReality/Sondagagem4ARMap';

function ARTab({ sondagemID, info }) {
    setOrientation("portrait");
    return (
        <div className="ARTab">
            {info !== null && info.size != 0 && sondagemID == 4 &&
                <div className="ARSondagem4">
                    <div className='description'>
                        <a dangerouslySetInnerHTML={{ __html: info.firstDescription }} />
                    </div>
                    <Sondagem4ARMap/>
                    <div className='description'>
                        <a dangerouslySetInnerHTML={{ __html: info.secondDescription }} />
                    </div>
                </div>
            }
        </div >
    );
}
export default ARTab;