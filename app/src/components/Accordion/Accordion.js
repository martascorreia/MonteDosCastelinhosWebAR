
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import "./Accordion.css";

function Accordion({id, accordionOpen, title, content}) {
  const [isOpen, setIsOpen] = useState(accordionOpen);

  return (
    <div className="Accordion" id={id}>
      <div className="accordionHeader" onClick={() => setIsOpen(!isOpen)}>
        <div className='accordionTitle'>
          {title}
        </div>
        <div className='accordionIcon'>
          <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
        </div>
      </div>
      {isOpen &&
        <div className="accordionContent" dangerouslySetInnerHTML={{__html: content}}>
        </div>
      }
    </div>
  );
}

export default Accordion;