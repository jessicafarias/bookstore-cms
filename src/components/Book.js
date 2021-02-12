import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = props => {
  const { book, removeBtn } = props;
  return (
    <tbody>
      <tr>
        <div className="flex-row">
          <div className="align-start book">
            <p className="School-of">{book.category}</p>
            <p className="title">{book.title}</p>
            <p className="blue-text">Author</p>
            <div className="options blue-text">
              <p className="border-right ">Comments</p>
              <button className="border-right " type="button" onClick={() => { removeBtn(book); }}> Remove </button>
              <p>Edit</p>
            </div>
          </div>
          <div className="percent-completed">
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart blue">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray="60, 100"
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
            <div>
              <p>65%</p>
              <p>Completed</p>
            </div>
          </div>
          <div>
            <p className="Current-Chapter">CURRENT CHAPTER</p>
            <p className="Current-Lesson">Chapter 17</p>
            <div className="Rectangle-2">
              <p className="Update-progress">UPDATE PROGRESS</p>
            </div>
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
