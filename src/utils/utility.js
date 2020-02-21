import * as data from './data/stores.json';

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const createItems = () => {
  // return data.default.stores.map(item => item);
  return data.default.stores;
};
