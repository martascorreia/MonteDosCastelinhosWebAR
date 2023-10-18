import React, { useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom';

function Sondagem({ id, sondagemID, title, headerImage, tab, tabs, info, ra, vr }) {
    setOrientation("portrait");
    const [tabSelected, setTabSelected] = useState(tab ? tab : 1);
    const [hasRefreshed, setHasRefreshed] = useState(localStorage.getItem('hasRefreshed') == 'false' ? false : true);

    useEffect(() => {
        if (!hasRefreshed) {
            console.log(hasRefreshed)
            localStorage.setItem('hasRefreshed', 'true');
            console.log("reloading page");
            window.location.reload();
        }

    }, []);

    return (
        <div className="Sondagem" id="sondagem">
            <TopButtons backUrl={"/mapa"} />
            <div className="content">
                <div className='infoTitle'>
                    <img className='sondagemImage' src={process.env.PUBLIC_URL + headerImage} />
                    <div className='sondagemTitle'>{title}</div>
                </div>
                {tabs &&
                    <div className='tabs'>
                        {tabs.map((item, index) => (
                            <div className={`tabType ${tabSelected == index + 1 ? "tabSelected" : ""}`} onClick={() => setTabSelected(index + 1)}>
                                <div className="tabBtn">
                                    {item.id == "info" &&
                                        <Link to={'/sondagem' + sondagemID + '/'} className="nav-link" id={index}>
                                            <div className="tabIcon">
                                                <FontAwesomeIcon icon={faCircleInfo} />
                                            </div>
                                        </Link>
                                    }
                                    {item.id == "ar" &&
                                        <Link to={'/sondagem' + sondagemID + '/raTab'} className="nav-link" id={index}>
                                            <div className="tabIcon">
                                                <AugmentedReality width={50} height={40} strokeWidth={1.5} />
                                            </div>
                                        </Link>
                                    }
                                    {item.id == "vr" &&
                                        <Link to={'/sondagem' + sondagemID + '/rvTab'} className="nav-link" id={index}>
                                            <div className="tabIcon">
                                                <FontAwesomeIcon icon={faVrCardboard} />
                                            </div>
                                        </Link>
                                    }
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