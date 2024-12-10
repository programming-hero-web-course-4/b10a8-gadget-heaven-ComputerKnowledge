import React, { useContext } from "react";
import { ValueContext } from "../routes/root";
import Cart from "../Cart/Cart";
import Wish from "../Wish/Wish";

const Dashboard = () => {
  const { isActive, handleActiveCart, handleActiveWish } =
    useContext(ValueContext);
  return (
    <div className="">
      <div className="text-center space-x-4 py-8   bg-purple-600">
        <h3 className="text-2xl text-white lg:text-3xl font-bold">Dashboard</h3>
        <p className="text-white text-sm lg:text-lg py-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart device to the coolest accessories, we have it all!
        </p>
        <button
          onClick={handleActiveCart}
          className={`btn btn-outline text-white ${
            isActive && "bg-white text-black"
          }`}
        >
          cart
        </button>
        <button
          onClick={handleActiveWish}
          className={`btn btn-outline  text-white ${
            isActive || "bg-white text-black"
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