import React from "react";
import Book from "../../shared/Book/Book";
import "./ShelfContainer.css";

const ShelfContainer = (props) => {
  return props.shelves.map((shelf) => (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books
            .filter((book) => book.shelf === shelf.code)
            .map((bookDetails) => (
              <Book
                shelves={props.shelves}
                bookDetails={bookDetails}
                setIsUpdated={props.setIsUpdated}
              />
            ))}
        </ol>
      </div>
    </div>
  ));
};

export default ShelfContainer;
