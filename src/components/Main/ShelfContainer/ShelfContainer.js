import React from "react";
import Book from "../../shared/Book/Book";
import "./ShelfContainer.css";

const ShelfContainer = (props) => {
  const { shelves, books, setIsUpdated } = props;
  return shelves.map((shelf) => (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === shelf.code)
            .map((bookDetails) => (
              <Book
                shelves={shelves}
                bookDetails={bookDetails}
                setIsUpdated={setIsUpdated}
              />
            ))}
        </ol>
      </div>
    </div>
  ));
};

export default ShelfContainer;
