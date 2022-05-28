import axios from 'axios';
import { CREATE_POST, GET_CAR } from '../types';

export const getPost = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_CAR}_LOADING` });

    axios({
      method: 'GET',
      url: 'https://rent-car-appx.herokuapp.com/admin/order',
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

export const getPostCustomer = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_CAR}_LOADING` });

    axios({
      method: 'GET',
      url: 'https://rent-car-appx.herokuapp.com/admin/car',
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

export const createPost = (data) => {
  return (dispatch) => {
    dispatch({ type: `${CREATE_POST}_LOADING` });

    axios({
      method: 'POST',
      url: 'https://rent-car-appx.herokuapp.com/admin/car',
      data,
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
      .then(() => {
        dispatch({
          type: `${CREATE_POST}_FULFILLED`,
        });
        dispatch(getPost());
      })
      .catch((error) => {
        dispatch({
          type: `${CREATE_POST}_ERROR`,
          error: error.message,
        });
      });
  };
};
