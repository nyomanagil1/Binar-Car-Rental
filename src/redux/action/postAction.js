import axios from 'axios';
import { GET_CAR } from '../types';

export const getPost = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_CAR}_LOADING` });

    axios({
      method: 'GET',
      url: 'https://rent-cars-api.herokuapp.com/admin/car',
    })
      .then((response) => {
        dispatch({
          type: `${GET_CAR}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_CAR}_ERROR`,
          error: error.message,
        });
      });
  };
};
