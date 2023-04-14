import BooksContainer from "./BooksContainer"
import Search from "./Search"

function Home ({ onAddBook, onDeleteBook, search, setSearch, booksToDisplay }){

    return (
        <div className="home">
            <Search search={search} setSearch={setSearch}  />
            <BooksContainer books={booksToDisplay} onDeleteBook={onDeleteBook} />
        </div>
    )
}

export default Home