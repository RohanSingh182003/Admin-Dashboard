import React from "react";

const SearchBar = () => {
  return (
    <div className="flex bg-gray-800 rounded-lg my-2 shadow-lg">
      <AiOutlineSearch className="text-2xl text-gray-200 font-semibold mt-1 mx-1" />
      <input
        className="border-none w-[90%] bg-gray-800 text-gray-200 focus:outline-none p-1"
        type="text"
        placeholder="Search here"
        name="search"
        id="search"
      />
    </div>
  );
};

export default SearchBar;
