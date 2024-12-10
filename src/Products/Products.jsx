import { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { ValueContext } from "../routes/root";

const Products = () => {
  // States for buttons
  let [button, setButton] = useState("all");
  const categories = [
    "all",
    "Laptops",
    "Phones",
    "Accessories",
    "Smart Watches",
  ];
  const { products, setProducts } = useContext(ValueContext);
  useEffect(() => {
    fetch("/public/fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const buttonHandler = (buttonValue) => {
    setButton((button = buttonValue));
  };

  return (
    <div>
      <div className="sm:flex gap-6 mx-6 sm:mx-8 md:mx-12 lg:mx-16">
        <div className="flex flex-col justify-evenly  sm:w-1/4 md:w-1/5 lg:w-1/6 gap-2 p-8 mb-8 rounded-xl bg-white  h-auto sm:h-[460px]">
          <button
            onClick={() => buttonHandler("all")}
            className="btn btn-outline btn-primary"
          >
            All Product
          </button>
          <button
            onClick={() => buttonHandler("Laptops")}
            className="btn btn-outline btn-primary"
          >
            Laptops
          </button>
          <button
            onClick={() => buttonHandler("Phones")}
            className="btn btn-outline btn-primary"
          >
            Phones
          </button>
          <button
            onClick={() => buttonHandler("Accessories")}
            className="btn btn-outline btn-primary"
          >
            Accessories
          </button>
          <button
            onClick={() => buttonHandler("Smart Watches")}
            className="btn btn-outline btn-primary"
          >
            Smart Watches
          </button>
          <button
            onClick={() => buttonHandler("MacBook")}
            className="btn btn-outline btn-primary"
          >
            MacBook
          </button>
          <button
            onClick={() => buttonHandler("Iphone")}
            className="btn btn-outline btn-primary"
          >
            Iphone
          </button>
        </div>
        {categories.find((b) => b == button) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-8">
            {products.map(
              (product) =>
                (product.category == button || button == "all") && (
                  <Product key={product.product_id} p={product}></Product>
                )
            )}
          </div>
        )}
        {!categories.find((b) => b == button) && (
          <div className="text-7xl font-extrabold">No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Products;

/* <Product key={product.product_id} p={product}></Product> */

// {
//   products.map((product) => `${
//     if (button === " ") `
//       ${<Product key={product.product_id} p={product}></Product>};
//     } else if (product.category === button) {
//       <Product key={product.product_id} p={product}></Product>;
//     } else {
//       <div>Hello world</div>;
//     }
//   });
// }
