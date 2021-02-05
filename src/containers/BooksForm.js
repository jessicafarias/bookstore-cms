import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" />
      </label>
      <br />

      <label htmlFor="select">
        Categories:
        <select name="category" id="select">
          {categories.map(category => <option value={category} key={category}>{category}</option>)}
        </select>
      </label>
      <br />
      <button type="submit"> Submit</button>
    </form>
  );
};

export default BooksForm;
