import BooksContainer from "./BooksContainer"
import Search from "./Search"

function Home ({books}){

    return (
        <div>
            <Search />
            <BooksContainer books={books} />
        </div>
    )
}

export default Home