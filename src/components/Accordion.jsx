import Char from './Character'
import React, { useState } from 'react';

const Accordion = ({ min, max, page }) => {
  const [isActive, setIsActive] = useState(false);

  let temp = []

  for (let i = min; i < max; i++) {
    temp.push(<Char num={i} page={page} />)
  }

  return (
    <div>
      <div
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="header">{isActive ? `` : `${min} - ${max}+`}</div>
        {isActive && <div className="accordion-content">{temp}</div>}
      </div>
    </div>
  )
}

export default Accordion