import './App.css';
import BooksForm from './containers/BooksForm';
import BooksList from './containers/BooksList';

function App() {
  return (
    <div className="App">
      <h2>BookStore</h2>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
