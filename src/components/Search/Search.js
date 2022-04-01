import React from "react";
import Header from "./Header/Header";
import Book from "../shared/Book/Book";
import "./Search.css";

const Search = (props) => {
  const { setInput, input, setIsUpdated, shelves, searchedBooks } = props;
  return (
    <div>
      <Header setInput={setInput} input={input} />
      <div className="books-grid">
        {searchedBooks.length > 0 ? (
          <ol className="books-grid">
            {searchedBooks.map((bookDetails) => (
              <Book
                bookDetails={bookDetails}
                setIsUpdated={setIsUpdated}
                shelves={shelves}
              />
            ))}
          </ol>
        ) : (
          input && <h2>Any book that matches the search</h2>
        )}
      </div>
    </div>
  );
};

export default Search;
