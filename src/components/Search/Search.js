import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import Book from "../shared/Book/Book";
import "./Search.css";

const Search = (props) => {
  return (
    <div>
      <Header />
      <div className="books-grid">
        {props.books.map((bookDetails) => (
          <Book bookDetails={bookDetails} />
        ))}
      </div>
      <Link to="/details">Go to details</Link>
    </div>
  );
};

export default Search;
