import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';

export const fetchFurnitureStart = () => {
  return {
    type: actionTypes.FETCH_FURNITURE_START
  };
};

export const fetchFurnitureSuccess = updatedFurniture => {
  return {
    type: actionTypes.FETCH_FURNITURE_SUCCESS,
    furniture: updatedFurniture,
    filteredFurniture: updatedFurniture
  };
};

export const fetchFurnitureFail = error => {
  return {
    type: actionTypes.FETCH_FURNITURE_FAIL,
    error: error
  };
};

export const fetchClasses = () => {
  return dispatch => {
    dispatch(fetchFurnitureStart());
    axios
      .get('/api/furniture')
      .then(res => {
        const furniture = res.data;
        const updatedFurniture = furniture.map(furnitureItem => {
          return {
            ...furnitureItem
          };
        });
        dispatch(fetchFurnitureSuccess(updatedFurniture));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const filterFurniture = newFilteredFurniture => ({
  type: actionTypes.FILTER_FURNITURE,
  furniture: newFilteredFurniture,
  filteredFurniture: newFilteredFurniture
});
