export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const UPDATE_COMPLETE_CHAPTERS = 'UPDATE_COMPLETE_CHAPTERS';

export const createBookAction = book => ({
  type: CREATE_BOOK,
  id: book.id,
  title: book.title,
  percentage: 0,
  category: book.category,
});

export const removeBookAction = book => ({
  type: REMOVE_BOOK,
  id: book.id,
});

export const changeFilterAction = category => ({
  type: CHANGE_FILTER,
  filter: category,
});

export const fetchBooksAction = books => ({
  type: FETCH_BOOKS,
  payload: books,
});
