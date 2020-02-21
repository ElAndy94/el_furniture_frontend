import React from 'react';

const FurnitureItem = props => {
  const onClick = () => {};

  return (
    <li onClick={() => onClick(props.itemId)}>
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
