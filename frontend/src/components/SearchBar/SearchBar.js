import React from "react";
import SerachBarStyles from "./SearchBarStyles";

const SearchBar = ({ value, setSearchTerm, callback }) => {
  return (
    <SerachBarStyles>
      <input
        type="text"
        value={value}
        placeholder="Search ..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </SerachBarStyles>
  );
};

export default SearchBar;
