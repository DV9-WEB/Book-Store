import React from "react";
import heroImg from "../../public/img/Hero-Book.png"

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col mt-10">
      <div className="order-2 md:order-1 w-full md:w-1/2 md:mt-20 p-4">
        <div className="space-y-10">
          <h1 className="text-4xl font-bold">
            Hello, Welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eum
            illo fugit dignissimos, sit, provident explicabo quasi
            exercitationem fuga sapiente tempora delectus aperiam reiciendis.
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
        </div>
        <button
          className="btn mt-4 text-black"
          style={{ backgroundColor: "#EC4899", borderColor: "#EC4899" }}
        >
          Send
        </button>
      </div>
      <div className="order-1 w-full md:w-1/2 flex justify-center items-center">
        <img src={heroImg} alt="" srcset="" className="h-92 w-92" />
      </div>
    </div>
  );
};

export default Hero;
