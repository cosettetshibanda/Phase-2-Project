import Books from "./Books"
import InputForm from "./InputForm"

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
            <InputForm />
        </main>
    )
}

export default BooksContainer