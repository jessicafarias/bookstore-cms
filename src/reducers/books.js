import {
  CREATE_BOOK, REMOVE_BOOK, FETCH_BOOKS, UPDATE_BOOK,
} from '../actions/index';

const initialState = [];

const deleteBook = (state, action) => {
  const index = state.map(e => e.id).indexOf(action.id);
  const newState = state.slice(0, index).concat(state.slice(index + 1));
  return newState;
};

const updateProgress = (state, action) => {
  // const index = state.map(idx => idx.id).indexOf(action.id);
  // const newState = state;
  // newState[index].percentage = (action.complete_chapters * 100) / action.chapters;
  // newState[index].percentage = 10;

  const index = state.map(e => e.id).indexOf(action.id);
  const newState = state.slice(0, index).concat(state.slice(index + 1));

  return newState;
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, {
        id: action.id,
        title: action.title,
        category: action.category,
        percentage: action.percentage,
      }];
    case REMOVE_BOOK:
      return deleteBook(state, action);
    case FETCH_BOOKS:
      return [...action.payload];
    case UPDATE_BOOK:
      return updateProgress(state, action);
    default:
      return state;
  }
};

export default bookReducer;
