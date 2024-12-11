import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  const [products, setProducts] = useState([]);
  const [cardlist, setCardlist] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePurchase = () => {
    setCardlist([]);
    setTotalPrice(0);
    setWishlist([]);
    document.getElementById("my_modal_1").showModal();
  };
  const handleDetele = (p) => {
    const f = (cardlist, p) =>
      cardlist.filter((a) => a.product_id === p.product_id).length;

    const newCardlist1 = cardlist.filter((a) => a.product_id != p.product_id);
    setCardlist(newCardlist1);
    setTotalPrice(totalPrice - f(cardlist, p) * p.price);
  };
  const handleDetele1 = (p) => {
    const newWishlist = wishlist.filter((a) => a.product_id != p.product_id);
    setWishlist(newWishlist);
  };
  const handleCardlist = (p) => {
    // setTotalPrice(totalPrice + p.price);
    if (totalPrice < 2000) {
      handleDetele1(p);
      const newCardlist = [...cardlist, p];
      setCardlist(newCardlist);
      setTotalPrice(totalPrice + p.price);
      toast.success(`${p.product_title} has been added to cart`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // setTotalPrice(totalPrice - p.price);
      toast.error("Sorry, your price limits has exceeded.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleWishlist = (p) => {
    const newWishlist = [...wishlist, p];
    setWishlist(newWishlist);
    toast.info(`${p.product_title} has been added to the WishList.`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleActiveCart = () => {
    setIsActive(true);
  };
  const handleActiveWish = () => {
    setIsActive(false);
  };
  const allValue = {
    products,
    setProducts,
    cardlist,
    setCardlist,
    wishlist,
    setWishlist,
    handleCardlist,
    handleWishlist,
    isActive,
    setIsActive,
    handleActiveWish,
    handleActiveCart,
    totalPrice,
    handlePurchase,
    handleDetele,
    handleDetele1,
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <ValueContext.Provider value={allValue}>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
      </ValueContext.Provider>
    </div>
  );
};

export const ValueContext = createContext({});

export default Root;
