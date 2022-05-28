import { message } from 'antd';
import { CREATE_POST, GET_CAR } from '../types';

const initialState = {
  data: [],
  isLoading: true,
  error: null,
  message: null,
};

const postReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_CAR}_LOADING`:
      return {
        ...state,
      };
    case `${GET_CAR}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_CAR}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    case `${CREATE_POST}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${CREATE_POST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        message: message.success('Data Berhasil Disimpan.'),
      };
    case `${CREATE_POST}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
        message: message.error('Data Gagal Disimpan.'),
      };
    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
