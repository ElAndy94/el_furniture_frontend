import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

const initialState = {
  filteredFurniture: [],
  furniture: [],
  error: null,
  loading: false
};

const fetchFurnitureStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const fetchFurnitureSuccess = (state, action) => {
  return updateObject(state, {
    furniture: action.furniture,
    filteredFurniture: action.filteredFurniture,
    loading: false
  });
};

const fetchFurnitureFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const filterFurniture = (state, action) => {
  return updateObject(state, {
    furniture: action.furniture,
    filteredFurniture: action.filteredFurniture
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FURNITURE_START:
      return fetchFurnitureStart(state, action);
    case actionTypes.FETCH_FURNITURE_SUCCESS:
      return fetchFurnitureSuccess(state, action);
    case actionTypes.FETCH_FURNITURE_FAIL:
      return fetchFurnitureFail(state, action);
    case actionTypes.FILTER_FURNITURE:
      return filterFurniture(state, action);
    default:
      return state;
  }
};

export default reducer;
