import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book } = props;
  return (
    <tbody>
      <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
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
};

export default Book;
