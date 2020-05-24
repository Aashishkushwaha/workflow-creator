import React, { useState } from "react";
import SerachBarStyles from "./SearchBarStyles";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SerachBarStyles>
      <input
        type="text"
        value={searchText}
        placeholder="Search ..."
        onChange={(e) => setSearchText(e.target.value)}
      />
    </SerachBarStyles>
  );
};

export default SearchBar;
