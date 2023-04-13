import BooksEnvelope from "./BooksEnvelope"
import Search from "./Search"

function Home (){
    return (
        <div>
            <Search />
            <BooksEnvelope />
        </div>
    )
}

export default Home