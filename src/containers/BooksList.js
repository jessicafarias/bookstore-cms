import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = props => {
  const { id, title, category } = props;
  return (
    <div>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{category}</td>
          </tr>
        </tbody>
        <Book book={props} />
      </table>
    </div>
  );
};

BooksList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

BooksList.defaultProps = {
  id: 1,
  title: 'Animal Farm',
  category: 'African Prose',
};

export default BooksList;
