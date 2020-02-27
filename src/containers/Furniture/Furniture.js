import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import FurnitureItem from '../../components/FurnitureItem/FurnitureItem';
import './Furniture.scss';
import config from '../../config/config';
const contentful = require('contentful');

function Furniture() {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    let client = contentful.createClient({
      space: config.SPACE_ID,
      accessToken: config.ACCESS_TOKEN
    });
    client.getEntries({ content_type: 'furniture' }).then(res => {
      setFurniture(res.items);
    });

    client.getEntry('58lxxeTop1mFMcBjiEhlWq').then(res => {
      console.log(res);
    });
  }, []);

  let furnitureItems = furniture.map((item, i) => {
    // console.log(item);
    return (
      <FurnitureItem
        key={i}
        itemId={item.sys.id}
        name={item.fields.name}
        type={item.fields.type}
        price={item.fields.price}
        dimensions={item.fields.dimensions}
        location={item.fields.location}
        quantity={item.fields.quantity}
      />
    );
  });

  return (
    <section>
      <div className='wrapper'>
        <h1 className='furniture__header center-mb-left-lg'>Furniture</h1>
        <ul className='furniture__container'>{furnitureItems}</ul>
      </div>
    </section>
  );
}

export default Furniture;
