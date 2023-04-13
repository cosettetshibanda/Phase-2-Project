import './App.css';
import Author from './Components/Author';
import BookDetails from './Components/BookDetails';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Author />
      <BookDetails />
      <Navbar />
    </div>
  );
}

export default App;
