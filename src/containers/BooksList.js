import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBookAction } from '../actions';

const BooksList = props => {
  const { books } = props;

  const handleRemoveBook = book => {
    const { removeBook } = props;
    removeBook(book);
  };

  return (
    <div>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove Option</th>
          </tr>
        </thead>
        {books.map(book => <Book key={book.id} book={book} removeBtn={handleRemoveBook} />)}
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
};

const mapStateToProps = state => ({ books: state.book });
const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBookAction(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
