import React from "react";
import Header from "./Header/Header";
import SearchButton from "./SearchButton/SearchButton";
import ShelfContainer from "./ShelfContainer/ShelfContainer";

const Shelf = (props) => {
  return (
    <div>
      <Header />
      <ShelfContainer
        shelfBooks={props.shelfBooks}
        setIsUpdated={props.setIsUpdated}
      />
      <SearchButton />
    </div>
  );
};

export default Shelf;
