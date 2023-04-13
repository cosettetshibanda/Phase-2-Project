import './App.css';
import Author from './Components/Author';
import BookDetails from './Components/BookDetails';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useEffect, useState } from 'react';


function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then(res => res.json())
      .then(setBooks)
  }, [])

  function onAddBook(newBook) {
    setBooks([newBook, ...books])
  }

  function handleDeleteBook(bookToDelete){
    const updatedBooks = books.filter((book) => book.id !== bookToDelete.id) 
    setBooks(updatedBooks)
  }


  return (
    <div className="App">
      <Home books={books} onAddBook={onAddBook} onDeleteBook={handleDeleteBook} />
      <Author />
      <BookDetails />
      <Navbar />
    </div>
  );
}

export default App;
