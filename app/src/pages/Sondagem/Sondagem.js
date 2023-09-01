import React, { useState } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons"
import "../../index.css"
import "./Sondagem.css"
import sondagem4Img from '../../resources/images/alignmentImages/sondagem4.1.png';
import InfoTab from './Tabs/InfoTab'
import ExperiencesTab from './Tabs/ExperiencesTab';
import { setOrientation } from '../../utils/utils.js';

function Sondagem({ title, tabs, VRurl, ARurl, accordions}) {
    setOrientation("portrait");
    const [tabSelected, setTabSelected] = useState(2);

    return (
        <div className="Sondagem" id="sondagem">
            <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
            <div className="content sondagemContent">
                <div className='infoTitle'>
                    <img className='sondagemImage' src={sondagem4Img} />
                    <div className='sondagemTitle'>{title}</div>
                </div>
                {tabs &&
                    <div className='tabs'>
                        {tabs.map((item, index) => (
                            <div className={`tabType ${tabSelected == index + 1 ? "tabSelected" : ""}`} onClick={() => setTabSelected(index + 1)}>
                                {item}
                            </div>
                        ))}
                    </div>}
                {tabs && tabSelected == 1 &&
                    <div className='tabContent'>
                        <InfoTab accordions={accordions}/>
                    </div>
                }
                {tabs && tabSelected == 2 &&
                    <div className='tabContent'>
                        <ExperiencesTab VRurl={VRurl} ARurl={ARurl}/>
                    </div>
                }
                {!tabs &&
                    <div className='noTabsContent'>
                        <InfoTab accordions={accordions}/>
                    </div>
                }
            </div >
        </div >
    );
}
export default Sondagem;