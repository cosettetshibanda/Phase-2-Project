import './App.css';
import Author from './Components/Author';
import BookDetails from './Components/BookDetails';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useEffect, useState } from 'react';


function App() {
  const [books, setbooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then(res => res.json())
      .then(setbooks)
  }, [])


  return (
    <div className="App">
      <Home books={books} />
      <Author />
      <BookDetails />
      <Navbar />
    </div>
  );
}

export default App;
