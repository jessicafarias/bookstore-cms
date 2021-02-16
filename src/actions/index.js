export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const createBookAction = book => ({
  type: CREATE_BOOK,
  id: book.id,
  title: book.title,
  category: book.category,
  percentage: book.percentage,
});

export const removeBookAction = book => ({
  type: REMOVE_BOOK,
  id: book.id,
});

export const changeFilterAction = category => ({
  type: CHANGE_FILTER,
  filter: category,
});
