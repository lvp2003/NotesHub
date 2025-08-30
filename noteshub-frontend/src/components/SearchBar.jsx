import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center mt-8">
      <input
        type="text"
        placeholder="Search notes"
        className="border px-4 py-2 w-1/2 rounded-l-lg"
      />
      <select className="border px-2 py-2">
        <option>Subject</option>
        <option>Author</option>
        <option>Date</option>
      </select>
      <button className="bg-blue-600  text-white px-4 rounded-r-lg">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
