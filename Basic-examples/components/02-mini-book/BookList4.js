import React from "react";
import "./style.css";

import { data } from "./books4";
import SpecificBook from "./Book4";

// Events: handling events in React

function BookList4() {
  return (
    <section className="book-list">
      {data.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

export default BookList4;
