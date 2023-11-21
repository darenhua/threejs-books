import React from "react";
import Book from "./Book"; // Assume this is your Book component

const Bookshelf = () => {
  const numberOfBooks = 5;
  const spacing = 1.5;

  const books = Array.from({ length: numberOfBooks }, (_, index) => ({
    id: index,
    position: index * spacing,
  }));

  return (
    <group>
      {books.map(({ id, position }) => (
        <Book key={id} position={[position, 0, 0]} />
      ))}
    </group>
  );
};

export default Bookshelf;
