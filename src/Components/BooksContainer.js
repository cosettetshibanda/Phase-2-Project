import Books from "./Books"

function BooksContainer ({books}) {
    return(
        <main>
            <ul className="books">
                {books.map((book) => (
                    <Books 
                    key={book.id}
                    book={book}
                    />
                ))}
            </ul>
        </main>
    )
}

export default BooksContainer