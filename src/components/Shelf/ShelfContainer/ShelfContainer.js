import React from "react";
import Book from "../../shared/Book/Book";
import "./ShelfContainer.css";

const shelfs = [
  { name: "Currently Reading", code: "currentlyReading" },
  { name: "Want to Read", code: "wantToRead" },
  { name: "Read", code: "read" },
];

const ShelfContainer = (props) => {
  return shelfs.map((shelf) => (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.shelfBooks
            .filter((book) => book.shelf === shelf.code)
            .map((bookDetails) => (
              <Book
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
