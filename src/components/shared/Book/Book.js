import React from "react";
import "./Book.css";
import * as BooksAPI from "../../../BooksAPI";

const Book = (props) => {
  const { bookDetails, setIsUpdated, shelves } = props;

  const handleSelectShelf = (shelfCode) => {
    BooksAPI.update(bookDetails, shelfCode)
      .then(setIsUpdated(true))
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
              backgroundImage:
                bookDetails.imageLinks && bookDetails.imageLinks.smallThumbnail
                  ? `url(${bookDetails.imageLinks.smallThumbnail})`
                  : "none",
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(event) => {
                handleSelectShelf(event.target.value);
              }}
              value={bookDetails.shelf ? bookDetails.shelf : "none"}
            >
              <option value="move" key="move" disabled>
                Move to...
              </option>
              <option value="none" key="none">
                None
              </option>
              <option
                value={`${shelves[0].code}`}
                key={`${shelves[0].code}`}
                disabled={bookDetails.shelf === `${shelves[0].code}`}
              >
                {`${shelves[0].name}`}
              </option>
              <option
                value={`${shelves[1].code}`}
                key={`${shelves[1].code}`}
                disabled={bookDetails.shelf === `${shelves[1].code}`}
              >
                {`${shelves[1].name}`}
              </option>
              <option
                value={`${shelves[2].code}`}
                key={`${shelves[2].code}`}
                disabled={bookDetails.shelf === `${shelves[2].code}`}
              >
                {`${shelves[2].name}`}
              </option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookDetails.title}</div>
        <div className="book-authors">{bookDetails.authors}</div>
      </div>
    </li>
  );
};

export default Book;
