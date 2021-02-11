import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const { handleFilter } = props;

  const handleClick = event => {
    const { value } = event.target;
    if (value === 'All') {
      handleFilter(null);
    } else {
      handleFilter(value);
    }
  };

  return (
    <label htmlFor="select">
      Filter by category:
      <select name="category" id="select" onChange={handleClick}>
        <option selected>All</option>
        {categories.map(category => <option value={category} key={category}>{category}</option>)}
      </select>
    </label>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
