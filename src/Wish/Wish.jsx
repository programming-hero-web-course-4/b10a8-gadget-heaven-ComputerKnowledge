import React, { useContext } from "react";
import { ValueContext } from "../routes/root";
import { RiDeleteBin6Line } from "react-icons/ri";

const Wish = () => {
  const { wishlist, setWishlist, handleDetele1, handleCardlist } =
    useContext(ValueContext);
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-extrabold ml-2 sm:ml-4 md:ml-6 lg:ml-8 pb-2">
        WishList
      </h2>
      {wishlist.map((p) => (
        <div
          key={p.product_id}
          className="rounded-2xl mx-2 sm:mx-4 md:mx-6 lg:mx-8 mb-4 flex justify-between items-center border-4 border-black"
        >
          <div className="flex">
            <div>
              <img className="w-48 rounded-2xl" src={p.product_image} alt="" />
            </div>
            <div className="flex flex-col justify-evenly">
              <h2 className="text-lg sm:text-xl  font-bold">
                {p.product_title}
              </h2>
              <p className="font-medium text-sm sm:text-lg text-gray-600">
                {p.description}
              </p>
              <p className="font-bold text-lg lg:text-xl">{p.price}</p>
              <button
                onClick={() => handleCardlist(p)}
                className="btn btn-sm w-32 btn-outline btn-primary mr-2"
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="mr-4">
            <button onClick={() => handleDetele1(p)}>
              <RiDeleteBin6Line className="text-2xl text-red-500"></RiDeleteBin6Line>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wish;

{
  /* <div>
  <div>
    <img src={p.product_image} alt="" />
  </div>
  <div>
    <h2>{p.product_name}</h2>
    <p>{p.description}</p>
    <p>{p.price}</p>
  </div>
</div>; */
}
