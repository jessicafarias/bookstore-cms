import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBookAction, changeFilterAction, fetchBooksAction } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import getData from '../apiRequests/getRequest';

const BooksList = props => {
  const { books, filtered } = props;

  const handleRemoveBook = book => {
    const { removeBook } = props;
    removeBook(book);
  };

  const handleFilterChange = category => {
    const { filter } = props;
    filter(category);
  };

  useEffect(() => {
    getData().then(response => {
      const { fetch } = props;
      fetch(response);
    });
  }, []);

  const filteredBooks = books.filter(book => (
    !!((filtered === null || filtered === book.category))));

  return (
    <div>
      <CategoryFilter handleFilter={handleFilterChange} />

      <table style={{ width: '100%' }}>
        {filteredBooks.map(book => <Book key={book.id} book={book} removeBtn={handleRemoveBook} />)}
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  filtered: PropTypes.string,
  fetch: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  filtered: null,
};

const mapStateToProps = state => ({
  books: state.book,
  filtered: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBookAction(book));
  },
  filter: category => {
    dispatch(changeFilterAction(category));
  },
  fetch: books => {
    dispatch(fetchBooksAction(books));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
