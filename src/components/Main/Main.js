import React from "react";
import Header from "./Header/Header";
import SearchButton from "./SearchButton/SearchButton";
import ShelfContainer from "./ShelfContainer/ShelfContainer";

const Main = (props) => {
  return (
    <div>
      <Header />
      <ShelfContainer
        books={props.books}
        setIsUpdated={props.setIsUpdated}
        shelves={props.shelves}
      />
      <SearchButton />
    </div>
  );
};

export default Main;
