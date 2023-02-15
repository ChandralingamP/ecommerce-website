import React, { useEffect, useContext } from "react";
import axios from "axios";
import CartItem from "./CartItem";
import { UserContext} from "../UserContext/UserContext";
function Cart() {
  const { show, userId,  setCartData, hideCart } = useContext(UserContext);

  const fetch1 = () => {
    if (userId.length) {
      console.log(userId, "from Cart");
      axios
        .post("/cart/items/", { userId: userId })
        .then((res) => res.data)
        .then((data) => {
          setCartData(data);
        });
    }
  };
  useEffect(() => {
    fetch1();
  }, [userId]);
  const value = show ? "block" : "hidden";
  return (
    <div
      className="fixed right-0 w-full lg:w-1/4 overflow-scroll overscroll-none "
      style={{ height: "100vh", scrollbarWidth: "none" }}
    >
      <div className={value + " mt-16 top-0  bg-secondary right-0   p-4"}>
        <div className="flex pr-2 justify-between">
          <h1 className="font-bold">Cart Items</h1>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => hideCart()}
            className="outline-none font-bold"
          >
            X
          </button>
        </div>
        <div>
          <CartItem />
        </div>
      </div>
    </div>
  );
}

export default Cart;
