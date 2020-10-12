import React from "react";
import "./style.css";

// Example of PROPS

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg",
  title: "Becoming",
  author: "Michelle Obama",
};

const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg",
  title: "Humans",
  author: "Brandon Stanton",
};

function BookList2() {
  return (
    <section className="book-list">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        {/* //   Props children */}
        <p>Lorem ipsum dolor sit amet.</p>
      </Book>
      <Book img={secondBook.img} />
    </section>
  );
}

// (props) is the same as ({ img, title, author, children })
const Book = (props) => {
  // Props destructuring
  //   Props children
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* {props.children} */}
      {children}
    </article>
  );
};

export default BookList2;
