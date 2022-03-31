import React from "react";
import Header from "./Header/Header";
import Book from "../shared/Book/Book";
import "./Search.css";

const Search = (props) => {
  return (
    <div>
      <Header setInput={props.setInput} input={props.input} />
      <div className="books-grid">
        {props.searchedBooks.length > 0 ? (
          <ol className="books-grid">
            {props.searchedBooks.map((bookDetails) => (
              <Book
                bookDetails={bookDetails}
                setIsUpdated={props.setIsUpdated}
                shelves={props.shelves}
              />
            ))}
          </ol>
        ) : (
          props.input && <h2>Any book that matches the search</h2>
        )}
      </div>
    </div>
  );
};

export default Search;
