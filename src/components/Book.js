import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, removeBtn } = props;
  return (
    <tbody>
      <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
        <td>
          <button type="button" onClick={() => { removeBtn(book); }}> DELETE </button>
        </td>
      </tr>
    </tbody>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  removeBtn: PropTypes.func.isRequired,
};

export default Book;
