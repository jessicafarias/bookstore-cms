import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = props => {
  const { book, removeBtn } = props;
  return (
    <tbody>
      <tr>
        <div className="flex-row">
          <div className="align-start">
            <p>{book.category}</p>
            <p>{book.title}</p>
            <p>Author</p>
            <div className="flex-row blue-text">
              <p>Comments</p>
              <button type="button" onClick={() => { removeBtn(book); }}> Remove </button>
              <p>Edit</p>
            </div>
          </div>
          <div>
            <p>65%</p>
            <p>Completed</p>
          </div>
          <div>
            <p>CURRENT CHAPTER</p>
            <p>Chapter 17</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
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
