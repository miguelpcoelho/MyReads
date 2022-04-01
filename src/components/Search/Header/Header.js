import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const { setInput, input } = props;

  const handleChange = (searchTerm) => {
    setInput(searchTerm);
  };

  return (
    <div className="search-books-bar">
      <Link to="/">
        <button className="close-search">Close</button>
      </Link>
      <input
        type="text"
        placeholder="Search by title or author"
        value={input}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
    </div>
  );
};

export default Header;
