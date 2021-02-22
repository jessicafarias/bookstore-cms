import { FETCH_BOOKS } from '../actions';

const apiUrl = 'https://jamezjez-bookstore-api.herokuapp.com/books';
const fetchBooks = () => async dispatch => {
  await fetch(apiUrl, {
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
    .then(response => {
      dispatch({ type: FETCH_BOOKS, payload: response.books });
      console.log(response);
    });
};
export default fetchBooks;
