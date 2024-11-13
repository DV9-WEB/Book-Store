import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="transform hover:scale-105 transition-all duration-300 ease-in-out bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden m-4 p-4">
      <figure className="w-full h-56 overflow-hidden flex justify-center">
        <img
          src="../../../assets/images/Free-Book.png"
          alt={item.name}
          className="w-72 object-cover"
        />
      </figure>
      <hr className="w-full opacity-30 border-t-2 border-gray-300" />
      <div className="p-2">
        <h2 className="text-lg font-bold mb-2">{item.name}</h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-300 text-sm">{item.title}</p>
          <p className="text-gray-200 font-semibold text-sm">{item.category}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          {/* Replace Category with Price */}
          <span className="text-md text-gray-200 font-semibold">
            ${item.Price}
          </span>

          {/* Replace Price with Buy Now Button */}
          <button className="bg-pink-500 text-black p-1 rounded-lg hover:bg-pink-600 transition-colors duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
