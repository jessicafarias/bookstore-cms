import '../App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import CategoryFilter from './CategoryFilter';

const App = () => (
  <div className="App">
    <h2>BookStore</h2>
    <CategoryFilter />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
