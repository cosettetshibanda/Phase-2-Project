import { useEffect } from "react"
import { useState } from "react"
import BooksContainer from "./BooksContainer"
import Search from "./Search"

function Home ({ onDeleteBook, search, setSearch, booksToDisplay }){

    const [sortBy, setSortBy] = useState ("")

    const sortBooks = (e) => {
        setSortBy(e.target.value)
    }

    useEffect(()=> {
        if(sortBy === 'Alphabetically'){
            const sortedBooks = sortByName()
            setSearch(sortedBooks)
        }else{

        }
    }, [sortBy])

    const sortByName = () => {
        return [...booksToDisplay].sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
    }

    const sortByYear = () => {

    }

    return (
        <div className="home">
            <Search sortBooks={sortBooks} search={search} setSearch={setSearch}  />
            <BooksContainer books={booksToDisplay} onDeleteBook={onDeleteBook} />
        </div>
    )
}

export default Home