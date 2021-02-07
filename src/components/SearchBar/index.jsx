import React from "react";
import "./style.css";

function SearchBar({keyword, setKeyword}) {
    return (
        <input
        key="search1"
        value={keyword}
        placeholder="Find something..."
        onChange={(e) => setKeyword(e.target.value)}
        />
    );
}

export default SearchBar;