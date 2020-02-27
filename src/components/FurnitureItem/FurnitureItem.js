import React from 'react';

import image from '../../assets/images/firstSofa.jpg';
import './FurnitureItem.scss';

const FurnitureItem = props => {
  const onClick = id => {
    console.log(id);
  };

  return (
    <li className='furniture__item' onClick={() => onClick(props.itemId)}>
      <div>
        <img className='furniture__item--image' src={image} alt='sofa' />
        <h3 className='furniture__item--name'>{props.name}</h3>
        <p className='furniture__item--text'>{props.type}</p>
        <p className='furniture__item--text'>£{props.price}</p>
      </div>
    </li>
  );
};

export default FurnitureItem;
