import BooksContainer from "./BooksContainer"
import InputForm from "./InputForm"
import Search from "./Search"

function Home ({books, onAddBook}){

    return (
        <div>
            <Search />
            <InputForm onAddBook={onAddBook}/>
            <BooksContainer books={books} />
        </div>
    )
}

export default Home