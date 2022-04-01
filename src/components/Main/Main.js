import React from "react";
import Header from "./Header/Header";
import SearchButton from "./SearchButton/SearchButton";
import ShelfContainer from "./ShelfContainer/ShelfContainer";

const Main = (props) => {
  const { shelves, books, setIsUpdated } = props;
  return (
    <div>
      <Header />
      <ShelfContainer
        books={books}
        setIsUpdated={setIsUpdated}
        shelves={shelves}
      />
      <SearchButton />
    </div>
  );
};

export default Main;
