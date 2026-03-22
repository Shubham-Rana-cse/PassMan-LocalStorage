import React from "react";
import heroBanner from "../assets/hero_banner.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
          className="absolute inset-0 opacity-30 bg-cover bg-center pointer-events-none mt-[5vh]"
          style={{ backgroundImage: `url(${heroBanner})` }}
      >
      </div>
      <div className="relative slogan w-4/5 mx-auto my-[15vh] flex items-center flex-col gap-5">
        <div className="text-6xl text-center font-medium">
          You could just <span className="text-blue-500">forget</span> your{" "}
          <span className="text-blue-500">password</span>{" "}
          <span className="text-gray-500">anytime now.</span>{" "}
        </div>
        <div className="text-center text-xl font-semibold">
          Escape the password maze with our app. All your codes, one safe vault.
          Say hello to simple, secure access!
        </div>
        <span className="inline-flex rounded-md shadow ml-2">
          <Link
            to="/manager"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
          >
            Get started
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
