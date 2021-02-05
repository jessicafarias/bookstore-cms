import React from 'react';
import PropTypes from 'prop-types';

const BooksList = props => {
  const { id, title, category } = props;
  return (
    <div>
      <table style={{ width: '100%' }}>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{category}</td>
        </tr>
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
