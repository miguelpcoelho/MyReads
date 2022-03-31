import React from "react";
import { Link } from "react-router-dom";
import "./SearchButton.css";

const SearchButton = () => {
  return (
    <Link to="/search">
      <div className="open-search">
        <button>Add a book</button>
      </div>
    </Link>
  );
};

export default SearchButton;
