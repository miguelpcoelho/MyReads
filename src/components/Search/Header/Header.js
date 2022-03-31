import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const handleChange = (searchTerm) => {
    props.setInput(searchTerm);
  };

  return (
    <div className="search-books-bar">
      <Link to="/">
        <button className="close-search">Close</button>
      </Link>
      <input
        type="text"
        placeholder="Search by title or author"
        value={props.input}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
    </div>
  );
};

export default Header;
