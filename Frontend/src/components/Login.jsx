import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal control state
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/user/login", // Login API URL
        userInfo
      );
      console.log(res.data);

      // After successful login, close the modal
      setIsModalOpen(false); // Close the modal
      localStorage.setItem("User", JSON.stringify(res.data)); // Store user info
      toast.success("Login successful!");
      navigate("/"); // Redirect to home or any other page after login
    } catch (err) {
      console.error(
        "Error during login:",
        err.response ? err.response.data : err
      );
      toast.error(
        "Error: " +
          (err.response ? err.response.data.message : "Something went wrong.")
      );
    }
  };

  return (
    <div>
      {isModalOpen && (
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm absolute right-2 top-2">✕</button>
            </form>
            <h3 className="text-2xl font-semibold text-pink-500 mb-6">Login</h3>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
                placeholder="Enter Your Password"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}

              <button
                type="submit"
                className="w-full py-2 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-300"
              >
                Login
              </button>
            </form>
            {/* Footer Links */}
            <p className="mt-6 text-sm text-white">
              Don’t have an account?{" "}
              <a href="/signup" className="text-pink-500">
                Sign up
              </a>
            </p>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Login;
