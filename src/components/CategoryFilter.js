import PropTypes from 'prop-types';
import '../styles/CategoryFilter.css';
import user from '../assets/user.png';

const CategoryFilter = props => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
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
    <div className="header">
      <div className="panel-bg">
        <h2 className="Bookstore-CMS">BookStore CMS</h2>
        <p className="BOOKS">BOOKS</p>
        <label htmlFor="select">
          <select className="select" name="category" id="select" onChange={handleClick}>
            <option disable="true" hidden>CATEGORIES</option>
            {categories.map(
              category => <option value={category} key={category}>{category}</option>,
            )}
          </select>
        </label>
      </div>
      <div className="Oval">
        <img className="user" src={user} alt="user" />
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
