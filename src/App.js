import './App.css';
import Author from './Components/Author';
import BookDetails from './Components/BookDetails';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';


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
          <Home books={books} onAddBook={onAddBook} onDeleteBook={handleDeleteBook} search={search} setSearch={setSearch} booksToDisplay={booksToDisplay} />
        </Route>
        <Route path="/Author">
          <Author />
        </Route>
        <Route path="/BookDetails">
          <BookDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
