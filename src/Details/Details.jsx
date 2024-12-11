import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ValueContext } from "../routes/root";
import { Helmet } from "react-helmet";

const Details = () => {
  const { product_id } = useParams();

  const data = useLoaderData();

  const id = parseInt(product_id);

  const {
    // cardlist,
    // setCardlist,
    wishlist,
    // setWishlist,

    handleCardlist,
    handleWishlist,
  } = useContext(ValueContext);

  const product = data.find((p) => p.product_id === id);

  const wishActive = !!wishlist.find((p) => p.product_id === id);
  return (
    <div className="relative">
      <Helmet>
        <title>Gadget Heaven || Details </title>
      </Helmet>
      <div className="bg-purple-600 mb-[500px] md:mb-[250px] lg:mb-[250px] pb-96 pt-8 text-white text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-4">
          Product Details
        </h2>
        <p className="text-xm md:text-lg font-medium w-4/6 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart device to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="absolute rounded-2xl  lg:w-[1000px] md:w-[650px] left-6 sm:left-36 md:left-44 lg:left-36 bottom-[-500px] md:bottom-[-250px] lg:bottom-[-250px]   py-4 lg:px-6 border-4 border-black md:flex items-center w-max  bg-white">
        <div className="">
          <img
            className="w-[300px] lg:w-[400px]"
            src={product.product_image}
            alt="image"
          />
        </div>
        <div className="p-4 space-y-4">
          <h2 className="text-3xl font-bold ">{product.product_title}</h2>
          <h3 className="text-lg font-bold text-gray-600">
            Price : $ {product.price}
          </h3>
          <p className="border-4 border-green-300 text-green-500 rounded-full w-max py-1 px-3 ">
            {product.availability ? "In Stock" : "Out of Stock"}
          </p>
          <p className="text-gray-500 font-semibold">{product.description}</p>
          <p className="text-xl font-extrabold">Specification :</p>
          <ol className="list-decimal text-gray-500 font-semibold ml-6">
            {product.Specification.map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ol>
          <div className="flex gap-2 text-xl font-extrabold">
            <p>Rating</p>
            <p className="mask mask-star-2 bg-orange-600 text-transparent">
              {" "}
              "i"
            </p>
          </div>
          <div className="rating">
            <p className="mask mask-star-2 bg-orange-400 text-transparent">
              {" "}
              "O"
            </p>
            <p className="mask mask-star-2 bg-orange-400 text-transparent">
              {" "}
              "O"
            </p>
            <p className="mask mask-star-2 bg-orange-400 text-transparent">
              {" "}
              "O"
            </p>
            <p className="mask mask-star-2 bg-orange-400 text-transparent">
              {" "}
              "O"
            </p>
            <p className="mask mask-star-2 bg-orange-200 text-transparent">
              {" "}
              "O"
            </p>
            <span className="text-lg text-gray-500 font-medium mx-2">
              {product.rating}
            </span>
          </div>
          <div>
            <button
              onClick={() => handleCardlist(product)}
              className="btn btn-outline btn-success mr-2"
            >
              Add to card
            </button>
            <button
              disabled={wishActive}
              onClick={() => handleWishlist(product)}
              className="btn btn-outline btn-success"
            >
              wish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
// Specification: (4)[
//   ("6.7-inch OLED Display",
//   "128GB Storage",
//   "Triple Camera System",
//   "5G Connectivity")
// ];
// availability: true;
// category: "Phones";
// description: "Flagship smartphone with cutting-edge features and design.";
// price: 999.25;
// product_id: 3;
// product_image: "./pic/img/S1.webp";
// product_title: "SmartPhone Max 13";
// rating: 4.7;
