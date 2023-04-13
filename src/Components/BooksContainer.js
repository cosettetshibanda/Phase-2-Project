import Books from "./Books"

function BooksContainer ({books, onDeleteBook}) {
    return(
        <main>
            <ul className="books">
                {books.map((book) => (
                    <Books 
                    key={book.id}
                    book={book}
                    onDeleteBook={onDeleteBook}
                    />
                ))}
            </ul>
        </main>
    )
}

export default BooksContainer