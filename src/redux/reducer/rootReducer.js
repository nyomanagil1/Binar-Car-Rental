import { combineReducers } from 'redux';
import postByIDReducer from './postByIDReducer';
import postReducer from './postReducer';

export default combineReducers({
  post: postReducer,
  postByID: postByIDReducer,
});
