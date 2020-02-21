import React from 'react';

import { createItems } from '../../utils/utility';
import FurnitureItem from '../../components/FurnitureItem/FurnitureItem';
import './Furniture.scss';

function Furniture() {
  let furnitureItems = createItems().map(item => {
    return (
      <FurnitureItem
        key={item._id}
        itemId={item._id}
        name={item.name}
        location={item.location}
        openingTimes={item.openingTimes}
      />
    );
  });

  return (
    <section>
      <div className='wrapper'>
        <h1>Furniture</h1>
        <ul className='furniture__container'>{furnitureItems}</ul>
      </div>
    </section>
  );
}

export default Furniture;
