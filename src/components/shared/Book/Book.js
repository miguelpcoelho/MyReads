import React from "react";
import "./Book.css";
import * as BooksAPI from "../../../BooksAPI";

const Book = (props) => {
  const handleSelectShelf = (shelfCode) => {
    BooksAPI.update(props.bookDetails, shelfCode)
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
              backgroundImage:
                props.bookDetails.imageLinks &&
                props.bookDetails.imageLinks.smallThumbnail
                  ? `url(${props.bookDetails.imageLinks.smallThumbnail})`
                  : "none",
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(event) => {
                handleSelectShelf(event.target.value);
              }}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="none">None</option>
              <option
                value={`${props.shelves[0].code}`}
                selected={
                  props.bookDetails.shelf === `${props.shelves[0].code}`
                }
                disabled={
                  props.bookDetails.shelf === `${props.shelves[0].code}`
                }
              >
                {`${props.shelves[0].name}`}
              </option>
              <option
                value={`${props.shelves[1].code}`}
                selected={
                  props.bookDetails.shelf === `${props.shelves[1].code}`
                }
                disabled={
                  props.bookDetails.shelf === `${props.shelves[1].code}`
                }
              >
                {`${props.shelves[1].name}`}
              </option>
              <option
                value={`${props.shelves[2].code}`}
                selected={
                  props.bookDetails.shelf === `${props.shelves[2].code}`
                }
                disabled={
                  props.bookDetails.shelf === `${props.shelves[2].code}`
                }
              >
                {`${props.shelves[2].name}`}
              </option>
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
