import BooksContainer from "./BooksContainer"
import InputForm from "./InputForm"
import Search from "./Search"

function Home ({books, onAddBook, onDeleteBook}){

    return (
        <div>
            <Search />
            <InputForm onAddBook={onAddBook}/>
            <BooksContainer books={books} onDeleteBook={onDeleteBook} />
        </div>
    )
}

export default Home