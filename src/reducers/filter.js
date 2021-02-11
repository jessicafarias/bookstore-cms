import { CHANGE_FILTER } from '../actions';

const filter = null;

const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
