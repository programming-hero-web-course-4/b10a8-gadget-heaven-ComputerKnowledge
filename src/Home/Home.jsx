import React, { createContext } from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <h3 className="text-xl sm:text-2xl lg:text-3xl pb-6 sm:pb-8 md:pb-10 lg:pb-12 font-extrabold text-center">
        Explore Cutting-Edge Gadgets
      </h3>
      <Products></Products>
    </div>
  );
};

export default Home;

//  min-h-screen
