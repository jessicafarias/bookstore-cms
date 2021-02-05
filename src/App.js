import './App.css';
import BooksForm from './containers/BooksForm';
import BooksList from './containers/BooksList';

function App() {
  return (
    <div className="App">
      <h2>BookStore</h2>
      <BooksList
        books={
          [{ id: 1, title: 'titleOne', category: 'Action' }, { id: 2, title: 'titleTwo', category: 'Sci-Fi' }]
        }
      />
      <BooksForm />
    </div>
  );
}

export default App;
