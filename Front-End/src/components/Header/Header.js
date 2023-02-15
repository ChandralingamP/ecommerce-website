import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import cartWImg from "../../assets/cartW.png";
import { useLocation } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
function Header({userId,handleLogout}) {
  const { showCart, setSearchBook, changeFlag } = useContext(UserContext);
  const location = useLocation();
  const path = location.pathname;
  const [input, setInput] = useState("");
  const [results, setResults] = useState("");
  const setSelectedBookd = (item) => {
    setResults("");
    setInput("");
    setSearchBook({ item });
    changeFlag();
  };
  const Change = async (e) => {
    if (e.target.value === "") {
      setResults("");
      setSearchBook("");
    } else {
      let payload = e.target.value;
      axios
        .post("/books/search", { payload: payload })
        .then((res) => res.data)
        .then((data) => {
          setResults(data.payload);
        });
    }
  };
  useEffect(() => {
    setResults("");
  }, [path]);
  return (
    <div className="fixed w-full z-10 h-16 bg-primary flex flex-col justify-center justify-item-center">
      <div
        className={
          "Header font-sans   lg:w-full items-center justify-between lg:px-16 px-10 flex bg-transparent"
        }
      >
        <div className="logo lg:w-1/4  lg:text-4xl md:text-3xl text-xl flex justify-center items-center italic font-extrabold ">
          <h1 className="text-aliceblue">Book Store</h1>
        </div>
        <input
          onKeyUp={(e) => Change(e)}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="outline-none py-2 text-black text-lg bg-transparent lg:w-1/4 w-60 h-8 border-2 border-gray-400 rounded-lg px-3 text-md bg-gray-100"
          type="search"
          placeholder="search..."
        />
        <div className="addCart flex flex-col justify-center items-center items-center lg:w-1/4 ">
          <img
            style={{ cursor: "pointer" }}
            className={
              "mx-auto flex bg-transparent justify-center lg:h-10 md:h-10 sm:h-8"
            }
            onClick={(e) => showCart(e)}
            src={cartWImg}
            alt=""
          />
          {/* {
            userId && <button onClick={()=>handleLogout()}>Log Out</button>
          } */}
          <button></button>
        </div>
      </div>
      <div className="absolute self-center top-12 mt-3 w-full z-10 mx-auto">
        <div className="flex lg:w-1/4 w-60 rounded-md mx-auto self-center bg-gray-500 text-white flex-col z-10">
          {results &&
            results.map((item) => {
              return (
                <button
                  onClick={() => setSelectedBookd(item)}
                  className="outline-none text-semibold hover:text-gray-600 hover:bg-white"
                  key={item._id}
                >
                  {item.bookName}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Header;
