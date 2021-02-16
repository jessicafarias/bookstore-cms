import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = [
  { id: Math.floor(Math.random() * 100) + 1, title: 'The Hunger Games', category: 'Action' },
  { id: Math.floor(Math.random() * 100) + 1, title: 'Dune', category: 'Sci-Fi' },
  { id: Math.floor(Math.random() * 100) + 1, title: 'Capitan in Twenty-First Century', category: 'Action' },
];

const deleteBook = (state, action) => {
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
      }];
    case REMOVE_BOOK:
      return deleteBook(state, action);
    default:
      return state;
  }
};

export default bookReducer;
