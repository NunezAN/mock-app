import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <form>
      <input
        className="border-2 border-slate-700 rounded-md p-2 text-2xl w-full my-4"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
