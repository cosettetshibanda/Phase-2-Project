function Books ({book}) {
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
    </li>
  )
}

export default Books