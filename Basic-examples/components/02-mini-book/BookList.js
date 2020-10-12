import React from "react";
import "./style.css";

function BookList() {
  return (
    <section className="book-list">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const bookType = "Travel Pictorial Reference";

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
      <p>{bookType.toLocaleUpperCase()}</p>
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => <h1>Humans</h1>;
const Author = () => <h4 style={{ fontSize: "0.75rem" }}>Brandon Stanton </h4>;

export default BookList;
