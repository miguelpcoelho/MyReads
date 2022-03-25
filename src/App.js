import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Shelf from "./components/Shelf/Shelf";
import Details from "./components/Details/Details";
import Search from "./components/Search/Search";
import { Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        setBooks(books);
      })
      .finally(setIsUpdated(false))
      .catch(() => console.log("unable to fetch books"));
  }, [isUpdated]);

  const shelfBooks = books.filter((book) => book.shelf !== "none");

  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <Shelf shelfBooks={shelfBooks} setIsUpdated={setIsUpdated} />
        )}
      />
      <Route path="/search" component={() => <Search books={books} />} />
      <Route path="/details" component={() => <Details />} />
    </div>
  );
};

export default App;
