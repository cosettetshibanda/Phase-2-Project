import '../App.css';
import Author from './Author';
import Navbar from './Navbar';
import BookPage from './BookPage';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import InputForm from './InputForm';
import BookDetails from './BookDetails';


function App() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then(res => res.json())
      .then(setBooks)
  }, [])

  const booksToDisplay = books.filter((book) =>
  book.title.toLowerCase().includes(search.toLowerCase())
);

  function onAddBook(newBook) {
    setBooks([newBook, ...books])
  }

  function handleDeleteBook(bookToDelete){
    const updatedBooks = books.filter((book) => book.id !== bookToDelete.id) 
    setBooks(updatedBooks)
  }




  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Author />
        </Route>
        <Route path="/Books">
          <BookPage books={books} onAddBook={onAddBook} onDeleteBook={handleDeleteBook} search={search} setSearch={setSearch} booksToDisplay={booksToDisplay} />
        </Route>
        <Route path="/BookAdd" >
          <InputForm onAddBook={onAddBook} className="inputform" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
