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
        <img
          className='furniture__item--image'
          src={image}
          //   style={{ height: '200px', width: '200px' }}
          alt='sofa'
        />
        <h3 className='furniture__item--name'>{props.name}</h3>
        <p className='furniture__item--text'>{props.location}</p>
      </div>
    </li>
  );
};

export default FurnitureItem;
