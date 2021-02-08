import React, { useState } from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [state, setState] = useState(
    {
      title: '',
      category: '',
    },
  );

  console.log(state);

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
          {categories.map(category => <option value={category} key={category}>{category}</option>)}
        </select>
      </label>
      <br />
      <button type="submit"> Submit</button>
    </form>
  );
};

export default BooksForm;
