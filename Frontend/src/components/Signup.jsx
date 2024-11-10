import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password, // Corrected typo: password (not passsword)
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/user/signup",
        userInfo
      );
      console.log(res.data);
      toast.success("Signup Successfully!");
      localStorage.setItem("User", JSON.stringify(res.data))
      navigate("/"); 
    } catch (err) {
      console.error(
        "Error during signup:",
        err.response ? err.response.data : err
      );
      toast.error(
        "Error: " + (err.response ? err.response.data.message : err.message)
      );
    }
  };

  return (
    <div className="mt-6 flex items-center justify-center min-h-screen bg-gray-900 relative">
      <div className="w-90% max-w-md bg-gray-800 rounded-lg shadow-lg p-8 text-white relative">
        <button
          onClick={() => navigate("/")}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 font-bold text-lg"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-pink-500 mb-6 text-center">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}

          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          <input
            type="password"
            placeholder="Create Password"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Already have an account?
          <a
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="cursor-pointer text-pink-500 hover:underline ml-1"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
