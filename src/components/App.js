import '../styles/App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => (
  <div className="App">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
