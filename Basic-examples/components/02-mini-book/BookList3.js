import React from "react";
import "./style.css";

// Simple List; mapping an array

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg",
    title: "Becoming",
    author: "Michelle Obama",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41vtfetCiWL._AC_UL200_SR200,200_.jpg",
    title: "Troubles in Paradise",
    author: "Elin Hilderbrand",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg",
    title: "Humans",
    author: "Brandon Stanton",
  },
];

function BookList3() {
  return (
    <section className="book-list">
      {books.map((book, index) => {
        //   properties
        // const { img, title, author } = book;
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

// spread operator: book={book} becomes {...book}

const Book = (props) => {
  const { img, title, author } = props.book;
  //   together with spread operator: const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default BookList3;
