import React, { useEffect, useState } from 'react';
import "../../../index.css"
import "./../Sondagem.css"
import "./RATab.css"
import "./../Tabs.css"
import { setOrientation } from '../../../utils/utils.js';
import Sondagem4ARMap from '../../AugmentedReality/Sondagagem4ARMap';

function RATab({ sondagemID, info }) {
    setOrientation("portrait");
    return (
        <div className="RATab">
            {info !== null && info.size != 0 && sondagemID == 4 &&
                <div className="RASondagem4">
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
export default RATab;