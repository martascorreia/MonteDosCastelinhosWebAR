import React, { useEffect, useState } from 'react';
import "../../../index.css"
import "./../Sondagem.css"
import "./RATab.css"
import "./../Tabs.css"
import { setOrientation } from '../../../utils/utils.js';
import { getSondagem4Info } from '../../../utils/sondagensInfo.js';

function RATab({ sondagemID }) {
    const [info, setInfo] = useState(null);

    setOrientation("portrait");

    useEffect(() => {
        if (info != null) return;
        if (sondagemID == 4) {
            setInfo(getSondagem4Info("ra"));
        }
    }, [info]);

    return (
        <div className="RATab">
            {info && sondagemID == 4 &&
                <div className="RASondagem4">
                    <div className='description'>
                        <a dangerouslySetInnerHTML={{ __html: info.ra.firstDescription }} />
                    </div>
                    <img className='mapImage' src={process.env.PUBLIC_URL + "/images/sondagem4Header.png"} />
                    <div className='description'>
                    <a dangerouslySetInnerHTML={{ __html: info.ra.secondDescription }} />
                    </div>
                </div>
            }
        </div >
    );
}
export default RATab;