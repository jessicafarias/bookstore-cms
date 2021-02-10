const CategoryFilter = () => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <label htmlFor="select">
      Filter by category:
      <select name="category" id="select">
        <option>Select Category</option>
        {categories.map(category => <option value={category} key={category}>{category}</option>)}
      </select>
    </label>
  );
};

export default CategoryFilter;
