import React, { useContext } from "react";
import { ValueContext } from "../routes/root";
import Cart from "../Cart/Cart";
import Wish from "../Wish/Wish";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const { isActive, handleActiveCart, handleActiveWish } =
    useContext(ValueContext);
  return (
    <div className="">
      <Helmet>
        <title>Gadget Heaven || Dashboard</title>
      </Helmet>
      <div className="text-center space-x-4 py-8   bg-purple-600">
        <h3 className="text-2xl text-white lg:text-3xl font-bold">Dashboard</h3>
        <p className="text-white text-sm lg:text-lg py-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart device to the coolest accessories, we have it all!
        </p>
        <button
          onClick={handleActiveCart}
          className={` ${
            isActive
              ? "btn btn-outline bg-white  text-black"
              : "btn btn-outline  text-white"
          }`}
        >
          cart
        </button>
        <button
          onClick={handleActiveWish}
          className={` ${
            isActive
              ? "btn btn-outline  text-white"
              : "btn btn-outline bg-white  text-black"
          }`}
        >
          wishlist
        </button>
      </div>

      {isActive ? <Cart></Cart> : <Wish></Wish>}
    </div>
  );
};

export default Dashboard;
