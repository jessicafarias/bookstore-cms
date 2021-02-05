import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const deleteBook = (state, action) => {
  const index = state.map(e => e.id).indexOf(action.id);
  const newState = state.slice(0, index).concat(state.slice(index + 1));
  return newState;
};

const bookReducer = (state, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, {
        id: action.id,
        title: action.title,
        category: action.category,
      }];
    case REMOVE_BOOK:
      return deleteBook(state, action);
    default:
      return state;
  }
};

export default bookReducer;
