import React, { useState, useEffect } from 'react';
import FurnitureItem from '../../components/FurnitureItem/FurnitureItem';
import './Furniture.scss';
import config from '../../config/config';
import { createClient } from 'contentful-management';

function Furniture() {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    const client = createClient({
      accessToken: config.ACCESS_TOKEN
    });

    client.getSpace(config.SPACE_ID).then(space => {
      // space.getEntry('58lxxeTop1mFMcBjiEhlWq').then(item => {
      // item.fields.name['en-US'] = 'Saragosa';
      // return item.update();
      // });
      space
        .getEntries()
        .then(res => {
          setFurniture(res.items);
        })
        .catch(console.error);
    });
    // client.getEntries({ content_type: 'furniture' }).then(res => {
    //   setFurniture(res.items);
    // });
  }, []);

  let furnitureItems = furniture.map((item, i) => {
    return (
      <FurnitureItem
        key={i}
        itemId={item.sys.id}
        name={item.fields.name['en-US']}
        type={item.fields.type['en-US']}
        price={item.fields.price['en-US']}
        dimensions={item.fields.dimensions['en-US']}
        location={item.fields.location['en-US']}
        quantity={item.fields.quantity['en-US']}
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
