import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { colors } from "../colors";

const Search = () => {
  const colorData = colors;
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      search !== "" &&
        setSearchResults(
          colorData.filter((color) =>
            color.name.toLowerCase().includes(search.toLowerCase())
          )
        );
    }, 1000);
    return () => clearTimeout(timeout);
  }, [search]);
  return (
    <div className="w-[80%] mx-auto h-screen overflow-scroll">
      <SearchBar search={search} setSearch={setSearch} />
      {searchResults.map((elem) => (
        <div>
          <span>{elem.name}</span>
        </div>
      ))}
    </div>
  );
};
////////
export default Search;
