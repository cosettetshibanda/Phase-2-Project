function Search ({ search, setSearch }){
    function handleSearch(event){
        setSearch(event.target.value)
    }

    return(
        <div className="search">
            <div className="input">
                <h3>Search</h3>
                <input className="prompt" value={search} onChange={handleSearch} />
            </div>
        </div>
    )
}

export default Search