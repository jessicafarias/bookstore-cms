import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBookAction, changeFilterAction } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import fetchBooks from '../apiRequests/requests';

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

  const filteredBooks = books.filter(book => (
    !!((filtered === null || filtered === book.category))));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  });

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
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
