import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = [
  {
    id: Math.floor(Math.random() * 100) + 1, title: 'The Hunger Games', category: 'Action', percentage: 60,
  },
  {
    id: Math.floor(Math.random() * 100) + 1, title: 'Dune', category: 'Sci-Fi', percentage: 40,
  },
  {
    id: Math.floor(Math.random() * 100) + 1, title: 'Capitan in Twenty-First Century', category: 'Action', percentage: 30,
  },
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
        percentage: action.percentage,
      }];
    case REMOVE_BOOK:
      return deleteBook(state, action);
    default:
      return state;
  }
};

export default bookReducer;
