import React, { useState } from 'react';
import './styles.css';
import ItemsList from './ItemsList';


function MoveDetails() {
  const [ items, isExpanded ,setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="move-details">
      <button onClick={handleButtonClick}>
        View Move Details
      </button>
      {isExpanded && < ItemsList  items={items}/>} {/* Pass items as prop */}
    </div>
  );
}

export default MoveDetails;
