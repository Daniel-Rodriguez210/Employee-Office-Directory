import React from "react";

function Search({ onSearch, searchTerm, handleSortByName }) {
    return (
        <div>
            <div>
                <button onClick={handleSortByName} class="btn btn-primary" style={{backgroundColor: "#2A77AE"}}>Name</button>
            </div>
            <form>
                <input
                value={searchTerm}
                onChange={onSearch}
                type="text"
                placeholder="search by employee"
                />
            </form>
        </div>
    )
}

export default Search;