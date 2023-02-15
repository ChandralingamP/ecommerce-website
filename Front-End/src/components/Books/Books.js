import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Cart from "../Cart/cart";
import Container from "./Container";
import NavBar from "../Header/NavBar";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import Card from "../Card/Card";
function Books() {
  const nav = useNavigate();
  const { getBooks, setSearchBook,getCartData, userId, searchBook, setBooks, books } = useContext(UserContext);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3000);
  function priceRange(m, ma) {
    setMin(m);
    setMax(ma);
    setC(count + 1);
  }
  let [count, setC] = useState(0);
  const location = useLocation();
  const category = location.pathname;
  let seacrhCategory = category.slice(1).toLocaleLowerCase();
  seacrhCategory = seacrhCategory.charAt(0).toUpperCase() + category.slice(2);
  useEffect(() => {
    if (userId) {
      if (books) {
        getBooks(seacrhCategory, min, max);
      } else {
        axios
          .get("/books")
          .then((res) => res.data)
          .then((data) => setBooks(data))
          .catch(err => console.log(err)) ;
        getCartData();
        setC(count + 1);
      }
    } else {
      nav("/login");
    }
    getCartData();
  }, [category, count]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        nav("/");
        localStorage.removeItem("uid");
        console.log("Signed out successfully");
      })
      .catch((error) => {});
  };

  return (
    <div className="relative bg-color self-end">
      <Header handleLogout={handleLogout} />
      <div className="cart">
        <Cart />
      </div>
      <NavBar priceRange={priceRange} setSearchBook={setSearchBook} />
      <div className="absolute lg:w-4/5 right-0">
        <div className=" right-0 flex lg:flex-row pt-16 w-full flex-col">
          <div className="books w-screen">
            {searchBook && (
              <div className="lg:w-1/4 rounded-md mx-10 mt-4">
                {" "}
                {<Card item={searchBook.item} />}
              </div>
            )}
            {!searchBook && <Container min={min} max={max} />}
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default Books;
