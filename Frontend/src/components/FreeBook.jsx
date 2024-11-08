// FreeBook.jsx
import React from "react";
import list from "./BookList.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

const FreeBook = () => {
  const filterData = list.filter((data) => data.category === "Free");

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <h1 className="font-semibold text-gray-300 text-2xl pb-4 text-center">
        Free Offered Books
      </h1>
      <p className="text-lg pb-6 text-center text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="slider-container">
        <Slider {...settings} className="gap-4">
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FreeBook;
