import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = props => {
  const { book, removeBtn, updateBook } = props;
  return (
    <tbody>
      <tr>
        <td>
          <div className="flex-row">
            <div className="align-start col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <p className="School-of text-xs-center">{book.category}</p>
              <p className="title text-xs-center">{book.title}</p>
              <p className="blue-text text-xs-center">Author</p>
              <div className="options blue-text">
                <p className="border-right ">Comments</p>
                <button className="border-right " type="button" onClick={() => { removeBtn(book); }}> Remove </button>
                <p>Edit</p>
              </div>
            </div>
            <div className="flex-row-center col-xs-12 col-sm-6 col-md-6 col-lg-3 ">
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
                    strokeDasharray={`${book.percentage} ,100`}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <div className="flex-col-center">
                <p className="Percent-Complete">{`${book.percentage}%`}</p>
                <p>Completed</p>
              </div>
            </div>
            <div className="chapter col-xs-12 col-sm-12 col-lg-3 text-lg-start">
              <p className="Current-Chapter text-xs-center">CURRENT CHAPTER</p>
              <p className="Current-Lesson text-xs-center">
                {`Chapter ${book.complete_chapters} OF ${book.chapters}`}
              </p>
              <button type="button" className="Rectangle-2 text-xs-center" onClick={() => { updateBook(book); }}>
                <p className="Update-progress">UPDATE PROGRESS</p>
              </button>
            </div>
          </div>
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
    percentage: PropTypes.number,
    chapters: PropTypes.number,
    complete_chapters: PropTypes.number,
  }).isRequired,
  removeBtn: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default Book;
