import React, { useState } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons"
import "../../index.css"
import "./Sondagem.css"
import "./Tabs.css"
import InfoTab from './Tabs/InfoTab'
import ARTab from './Tabs/ARTab'
import VRTab from './Tabs/VRTab'
import { setOrientation } from '../../utils/utils.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AugmentedReality } from 'tabler-icons-react';
import { faVrCardboard, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function Sondagem({ sondagemID, title, headerImage, tabs, info, ra, vr }) {
    setOrientation("portrait");
    const [tabSelected, setTabSelected] = useState(3);

    return (
        <div className="Sondagem" id="sondagem">
            <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
            <div className="content sondagemContent">
                <div className='infoTitle'>
                    <img className='sondagemImage' src={process.env.PUBLIC_URL + headerImage} />
                    <div className='sondagemTitle'>{title}</div>
                </div>
                {tabs &&
                    <div className='tabs'>
                        {tabs.map((item, index) => (
                            <div className={`tabType ${tabSelected == index + 1 ? "tabSelected" : ""}`} onClick={() => setTabSelected(index + 1)}>
                                <div className="tabBtn">
                                    <div className="tabIcon">
                                        {item.id == "info" &&
                                            <FontAwesomeIcon icon={faCircleInfo} />
                                        }
                                        {item.id == "ar" &&
                                            <AugmentedReality size={50} strokeWidth={1.5} />
                                        }
                                        {item.id == "vr" &&
                                            <FontAwesomeIcon icon={faVrCardboard} />
                                        }
                                    </div>
                                    <div className="tabTitle">
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>}
                {!tabs &&
                    <div className='noTabsContent'>
                        <InfoTab accordions={info} />
                    </div>
                }
                {tabs && tabSelected == 1 &&
                    <div className='tabContent'>
                        <InfoTab accordions={info} />
                    </div>
                }
                {tabs && tabSelected == 2 &&
                    <div className='tabContent'>
                        <ARTab sondagemID={sondagemID} info={ra[0]} />
                    </div>
                }
                {tabs && tabSelected == 3 &&
                    <div className='tabContent'>
                        <VRTab sondagemID={sondagemID} info={vr[0]} />
                    </div>
                }
            </div >
        </div >
    );
}
export default Sondagem;