import React from "react";
import "./Book.css";
import * as BooksAPI from "../../../BooksAPI";

const Book = (props) => {
  const handleSelectBookCode = (bookCode) => {
    BooksAPI.update(props.bookDetails, bookCode)
      .then(props.setIsUpdated(true))
      .catch(() => console.log("unable to update books"));
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.bookDetails.imageLinks.smallThumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(event) => {
                handleSelectBookCode(event.target.value);
              }}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              {/* mudar */}
              <option value="wantToRead" selected>
                Want to Read
              </option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.bookDetails.title}</div>
        <div className="book-authors">{props.bookDetails.authors}</div>
      </div>
    </li>
  );
};

export default Book;
