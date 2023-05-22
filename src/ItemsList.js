import React from 'react';
import './styles.css';

function ItemsList({ items }) {
  if(!items){
    return null;
  }

  return (
    <div className="items-list">
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
