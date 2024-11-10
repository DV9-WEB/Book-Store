import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import Cards from "./Cards"; // Make sure Cards component is imported correctly

const Course = () => {
  const [books, setBooks] = useState([]); // Initialize as an array to map over it

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        setBooks(res.data); // Update the books state with fetched data
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };
    fetchBooks();
  }, []);

  // Filter non-free items
  const nonFreeItems = books.filter((item) => item.Price > 0);

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h2 className="text-2xl text-center mb-6">
        We're delighted to have you{" "}
        <span className="font-semibold text-pink-500">Here!</span>
      </h2>
      <h3 className="text-center my-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ipsum
        omnis fugiat ducimus ipsa recusandae, et repellat quae voluptas adipisci
        inventore quasi! Possimus blanditiis odio eveniet ab!
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {nonFreeItems.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;
