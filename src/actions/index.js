export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const UPDATE_COMPLETE_CHAPTERS = 'UPDATE_COMPLETE_CHAPTERS';
export const UPDATE_BOOK = 'UPDATE_BOOK';

export const createBookAction = book => ({
  type: CREATE_BOOK,
  id: book.id,
  title: book.title,
  percentage: 0,
  category: book.category,
  complete_chapters: book.complete_chapters,
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

export const updateBookAction = book => ({
  type: UPDATE_BOOK,
  id: book.id,
  complete_chapters: book.complete_chapters,
  chapters: book.chapters,
});
