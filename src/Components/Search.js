function Search ({ sortBooks, sortBy, search, setSearch }){
    function handleSearch(event){
        setSearch(event.target.value)
    }

    return(
        <div className="search">
            <div className="input">
                <h3>Search</h3>
                <input className="prompt" value={search} onChange={handleSearch} />
            </div>
            <div >
            <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
        //   checked={sortBy === "Alphabetically"}
          onChange={sortBooks}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Year"
          name="sort"
        //   checked={sortBy === "Year"}
          onChange={sortBooks}
        />
        Year Published
      </label>
            </div>
        </div>
    )
}

export default Search