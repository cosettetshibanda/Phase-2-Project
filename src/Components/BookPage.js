import { useEffect } from "react"
import { useState } from "react"
import BooksContainer from "./BooksContainer"
import Search from "./Search"

function Home ({ onDeleteBook, search, setSearch, booksToDisplay }){

    return (
        <div className="home">
            <Search search={search} setSearch={setSearch}  />
            <BooksContainer books={booksToDisplay} onDeleteBook={onDeleteBook} />
        </div>
    )
}

export default Home