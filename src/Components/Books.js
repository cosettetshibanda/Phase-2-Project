import { Link } from "react-router-dom";

function Books ({book, onDeleteBook}) {

    function handleDeleteClick() {
        fetch(`http://localhost:3000/books/${book.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {
            onDeleteBook(book);
          });
      }

  return (
    <li className="book" >
        <div className="img">
            <img src={book.img} alt={book.title} />
        </div>
        <div className="title">
            <h2>{book.title}</h2>
        </div>
        <div className="year">
            <h3>{book.year}</h3>
        </div>
        <nav>
            <Link to={`${book.id}`}>Book Details</Link>
        </nav>
      <br />
        <button className="del-btn" onClick={handleDeleteClick}>
        🗑
      </button>
    </li>
  )
}

export default Books