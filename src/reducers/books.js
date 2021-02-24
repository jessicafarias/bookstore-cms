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
  const index = state.map(e => e.id).indexOf(action.id);
  const newState = state.slice(0, index).concat(state.slice(index + 1));
  const objectUpdate = state[index];
  const chapters = action.complete_chapters < action.chapters ? action.complete_chapters + 1 : 0;
  objectUpdate.complete_chapters = chapters;
  objectUpdate.percentage = ((chapters) * 100) / action.chapters;
  return [...newState, objectUpdate].sort((a, b) => (a.id - b.id));
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, {
        id: action.id,
        title: action.title,
        category: action.category,
        percentage: action.percentage,
        complete_chapters: action.complete_chapters,
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
