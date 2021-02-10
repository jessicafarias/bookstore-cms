import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({
  book: bookReducer,
  filter: filterReducer,
});

export default rootReducer;
