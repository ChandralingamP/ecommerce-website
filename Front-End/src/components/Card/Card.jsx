import React from "react";
import cartImg from "../../assets/addcart.png";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
function Card({ item }) {
  const { showCart, userId, setCartData, cartData } = useContext(UserContext);
  const addCart = async (item) => {
    if (cartData.includes(item)) {
      const newData = cartData.map((obj) => {
        if (obj._id === item._id) {
          obj.count += 1;
          return obj;
        } else {
          return obj;
        }
      });
      setCartData(newData);
      await axios
        .post("http://localhost:5051/cart/update", {
          id: userId,
          cartItems: newData,
        })
        .catch((err) => console.log(err));
    } else {
      const newData = [...cartData, item];
      setCartData(newData);
      console.log(newData);
      await axios
        .post("http://localhost:5051/cart/update", {
          id: userId,
          cartItems: newData,
        })
        .catch((err) => console.log(err));
    }
  };
  const buyBook = async (item) => {
    if (cartData.length == 0) {
      addCart(item);
    } else {
      var selectedObject = cartData.filter((book) => item._id == book._id);
      if (!selectedObject.length) {
        addCart(item);
      }
      showCart();
    }
  };
  return (
    <div
      id={item._id}
      className="w-full px-4 flex flex-col text-black  font-semibold border-2 border-blue-400 hover:ease-in hover:delay-300 pb-4 rounded-md flex-col"
    >
      {/* bg-secondary hover:bg-blue-500 */}
      <img
        className="h-72  rounded-lg pt-4 pb-1"
        src={require(`../../assets/images/${item.bookImg}`)}
        alt="s"
      />
      <p className="self-center align-center font-semibold text-lg">
        {item.bookName}
      </p>
      <p className="self-center align-center font-semibold text-md">
        {item.author}
      </p>
      <p className="self-center text-lg">${item.sellingPrice}</p>
      <div className="flex justify-around">
        <button
          style={{ cursor: "pointer" }}
          onClick={() => buyBook(item)}
          className="text-xl h-10 px-5 rounded-md text-black font-semibold hover:bg-blue-400"
        >
          Buy
        </button>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => addCart(item)}
          className="text-xl h-10 px-5 rounded-md font-semibold hover:bg-blue-400"
        >
          <img className="h-8" src={cartImg} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
