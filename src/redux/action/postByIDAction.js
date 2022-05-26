import axios from 'axios';
import { GET_CAR_BY_ID } from '../types';

export const getPostByID = (id) => {
  return (dispatch) => {
    dispatch({ type: `${GET_CAR_BY_ID}_LOADING` });

    axios({
      method: 'GET',
      url: `https://rent-cars-api.herokuapp.com/admin/car/${id}`,
    })
      .then((response) => {
        dispatch({
          type: `${GET_CAR_BY_ID}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_CAR_BY_ID}_ERROR`,
          error: error.message,
        });
      });
  };
};
