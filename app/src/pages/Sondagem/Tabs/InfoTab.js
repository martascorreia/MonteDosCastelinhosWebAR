import React from 'react';
import "../../../index.css"
import "./../Sondagem.css"
import "./../Tabs.css"
import "./InfoTab.css"
import Accordion from '../../../components/Accordion/Accordion'
import { setOrientation } from '../../../utils/utils.js';

function InfoTab({ accordions }) {
    setOrientation("portrait");
    return (
        <div className="InfoTab">
            <div className="InfoSondagem">
                <div className='vrTitle'>
                    Informação
                </div>
                <div className='accordions'>
                    {accordions &&
                        accordions.map((item, index) => (
                            <Accordion
                                id={item.id}
                                accordionOpen={item.isOpen}
                                title={item.title}
                                content={item.content} />
                        ))}
                </div>
            </div>
        </div >
    );
}
export default InfoTab;