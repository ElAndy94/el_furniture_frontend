import React from 'react';

import './FurnitureItem.scss';

const FurnitureItem = props => {
  const onClick = id => {
    console.log(id);
  };

  return (
    <li className='furniture__item' onClick={() => onClick(props.itemId)}>
      <div>
        <div>
          <h3>{props.name}</h3>
          <p>{props.location}</p>
        </div>
      </div>
    </li>
  );
};

export default FurnitureItem;
