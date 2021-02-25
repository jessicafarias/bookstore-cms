import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBookAction } from '../actions';
import '../styles/BooksForm.css';
import postData from '../apiRequests/postRequest';

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
      title: state.title,
      author: state.author,
      category: state.category,
      chapters: 20,
      complete_chapters: 0,
      percentage: 0,
    };

    postData(book).then(response => {
      createBook(response);
    });

    setState({
      title: '',
      category: '',
    });
  };

  return (
    <form>
      <p className="new-book">ADD NEW BOOK</p>
      <div className="row">
        <label htmlFor="title" className="col-sm-12 col-lg-6">
          <input placeholder="Book title" type="text" id="title" name="title" onChange={handleClick} value={state.title} />
        </label>
        <label htmlFor="select" className="col-xs-12 col-sm-6 col-lg-3">
          <select className="create-category" name="category" id="select" onChange={handleClick} value={state.category}>
            <option disable="true" hidden>Category</option>
            {categories.map(
              category => <option value={category} key={category}>{category}</option>,
            )}
          </select>
        </label>
        <div className="col-xs-12 col-sm-6 col-lg-3">
          <button className="button-blue" type="submit" onClick={handleSubmit}> ADD BOOK </button>
        </div>
      </div>
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
