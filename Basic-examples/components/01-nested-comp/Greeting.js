import React from "react";

// Nested Components

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>John Doe</h2>;

const Message = () => {
  return <p>I am learning</p>;
};

export default Greeting;
