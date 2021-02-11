import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBookAction } from '../actions';

const BooksForm = props => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [state, setState] = useState(
    {
      title: '',
      category: '',
    },
  );

  const handleClick = event => {
    if (event.target.name === 'title') {
      setState({
        category: state.category,
        title: event.target.value,
      });
    } else {
      setState({
        category: event.target.value,
        title: state.title,
      });
    }
  };

  const handleSubmit = event => {
    const { createBook } = props;
    event.preventDefault();
    const book = {
      id: Math.floor(Math.random() * 100) + 1,
      title: state.title,
      category: state.category,
    };
    createBook(book);

    setState({
      title: '',
      category: '',
    });
  };

  return (
    <form>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" name="title" onChange={handleClick} value={state.title} />
      </label>
      <br />

      <label htmlFor="select">
        Categories:
        <select name="category" id="select" onChange={handleClick} value={state.category}>
          <option disable hidden>Select Category</option>
          {categories.map(category => <option value={category} key={category}>{category}</option>)}
        </select>
      </label>
      <br />
      <button type="submit" onClick={handleSubmit}> Submit</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBookAction(book));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
