import React from "react";
import "./style.css";

function SearchBar({input, updateInput}) {
    return (
        <input
        key="search1"
        value={input}
        placeholder="Find something..."
        onChange={(e) => updateInput(e.target.value)}
        />
    );
}

export default SearchBar;