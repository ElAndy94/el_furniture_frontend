import * as data from './data/stores.json';

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const createItems = () => {
  let newData;
  newData = data.default.stores.map(item => {
    return item;
  });
  console.log(newData);
  return newData;
};
