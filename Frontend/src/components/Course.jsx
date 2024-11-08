import React from "react";
import list from "./BookList.json";
import Cards from "./Cards"; // Make sure Cards component is imported correctly

const Course = () => {
  // Filter out the free books
  const nonFreeItems = list.filter((item) => item.Price > 0); // Assuming Price > 0 means the item is not free

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h2 className="text-2xl text-center mb-6">
        We're delighted to have you <span className="font-semibold text-pink-500">Here!</span>
          </h2>
          <h3 className="text-center my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ipsum omnis fugiat ducimus ipsa recusandae, et repellat quae voluptas adipisci inventore quasi! Possimus blanditiis odio eveniet ab!</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {nonFreeItems.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
    </div>
  );
};


export default Course;
