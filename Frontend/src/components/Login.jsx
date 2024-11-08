import React from "react";
import {useForm} from "react-hook-form"

const Login = () => {

  const  {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()

  const onSubmit = (data) => {
    console.log("Form Data", data)
  }

  return (
    <div>
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
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
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
    </div>
  );
};

export default Login;
