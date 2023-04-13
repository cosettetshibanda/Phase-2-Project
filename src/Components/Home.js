import BooksContainer from "./BooksContainer"
import InputForm from "./InputForm"
import Search from "./Search"

function Home ({ onAddBook, onDeleteBook, search, setSearch, booksToDisplay }){

    return (
        <div>
            <Search search={search} setSearch={setSearch}  />
            <InputForm onAddBook={onAddBook}/>
            <BooksContainer books={booksToDisplay} onDeleteBook={onDeleteBook} />
        </div>
    )
}

export default Home