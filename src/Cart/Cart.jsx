import React, { useContext, useState } from "react";
import { ValueContext } from "../routes/root";
import { useNavigate } from "react-router-dom";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const { cardlist, totalPrice, setCardlist, handlePurchase, handleDetele } =
    useContext(ValueContext);
  const navigate = useNavigate();
  //   console.log(navigate);
  const handleShort = () => {
    const a = [...cardlist].sort((a, b) => b.price - a.price);
    setCardlist(a);
  };
  return (
    <div>
      <div className="sm:flex justify-between mb-2 items-center mx-2 sm:mx-4 md:mx-6 lg:mx-8 pt-8">
        <h3 className="text-xl font-extrabold">Cart</h3>
        <div className="sm:flex items-center gap-4">
          <p className="text-xl font-extrabold">
            Total cost: {totalPrice.toFixed(2)}
          </p>
          <button
            onClick={handleShort}
            className="btn mr-2 btn-outline btn-success"
          >
            Sort by Price <FaArrowDownWideShort />
          </button>
          <button
            disabled={!totalPrice}
            onClick={handlePurchase}
            className="btn btn-outline  btn-success"
          >
            Purchase
          </button>
        </div>
      </div>
      <div>
        {cardlist.map((p, idx) => (
          <div
            key={idx}
            className="rounded-2xl mx-2 sm:mx-4 md:mx-6 lg:mx-8 mb-4 flex justify-between items-center border-4 border-black"
          >
            <div className="flex">
              <div>
                <img
                  className="w-48 rounded-2xl"
                  src={p.product_image}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <h2 className="text-lg sm:text-xl  font-bold">
                  {p.product_title}
                </h2>
                <p className="font-medium text-sm sm:text-lg text-gray-600">
                  {p.description}
                </p>
                <p className="font-bold text-lg lg:text-xl">
                  Price : $ {p.price}
                </p>
              </div>
            </div>
            <div className="mr-4">
              <button onClick={() => handleDetele(p)}>
                <RiDeleteBin6Line className="text-2xl text-red-500"></RiDeleteBin6Line>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">You have purchased the product</h3>
          <p className="py-4 text-3xl font-extrabold">Congratulation!!!</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => navigate("/")} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
