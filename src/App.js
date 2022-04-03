import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import { Route } from "react-router-dom";
import "./App.css";

const shelves = [
  { name: "Currently Reading", code: "currentlyReading" },
  { name: "Want to Read", code: "wantToRead" },
  { name: "Read", code: "read" },
];

const App = () => {
  const [books, setBooks] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [input, setInput] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then((allBooksFromAPI) => {
        setBooks(allBooksFromAPI);
      })
      .finally(setIsUpdated(false))
      .catch(() => console.log("unable to fetch books"));
  }, [isUpdated]);

  useEffect(() => {
    if (input === "") {
      setSearchedBooks([]);
    } else {
      BooksAPI.search(input)
        .then((searchedBooksFromAPI) => {
          searchedBooksFromAPI.forEach((searchedBookFromAPI) => {
            books.forEach((book) => {
              if (searchedBookFromAPI.id === book.id) {
                searchedBookFromAPI.shelf = book.shelf;
              }
            });
          });
          setSearchedBooks(searchedBooksFromAPI);
        })
        .catch(() => {
          console.log("unable to search books");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <Main books={books} setIsUpdated={setIsUpdated} shelves={shelves} />
        )}
      />
      <Route
        path="/search"
        render={() => (
          <Search
            setIsUpdated={setIsUpdated}
            shelves={shelves}
            input={input}
            setInput={setInput}
            searchedBooks={searchedBooks}
          />
        )}
      />
    </div>
  );
};

export default App;
