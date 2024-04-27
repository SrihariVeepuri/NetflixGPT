import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg"
          alt="background"
        />
      </div>
      <form className=" absolute w-3/12  p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-2 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 m-2 w-full rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-3 m-2 w-full rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 m-2 w-full rounded-lg"
        />
        <button className="py-3 m-2 w-full bg-red-600 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-6 m-3 text-white cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New To Netflix? Sign Up"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
