import { combineReducers } from 'redux';
import bookReducer from './books';

const rootReducer = combineReducers({
  book: bookReducer,
});

export default rootReducer;
