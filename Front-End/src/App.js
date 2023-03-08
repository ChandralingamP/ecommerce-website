import React, { useState, useEffect } from "react";
import axios from "axios";
import Books from "./components/Books/Books";
import CheckOut from "./components/Checkout/CheckOut";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import { UserContext } from "./components/UserContext/UserContext";
import Login from "./components/Logins/Login";
import Signup from "./components/Signups/Signup";

function App() {
  const [flag, setFlag] = useState(0);
  const [show, setShow] = useState("");
  const [books, setBooks] = useState("");
  const [userId, setUserId] = useState("");
  const [searchBook, setSearchBook] = useState("");
  const [bookData, setBookData] = useState("");
  const [cartData, setCartData] = useState([]);
  const fetchBooks = async () => {
    let id = localStorage.getItem("userId");
    setUserId(id);
    await axios
      .get("http://localhost:5051/books")
      .then((res) => res.data)
      .then((data) => setBooks(data));
  };
  useEffect(() => {
    if (localStorage.getItem("uid")) {
      setUserId(localStorage.getItem("uid"));
      console.log(userId);
      fetchBooks();
    }
  }, []);
  const getBooks = async (type, min, max) => {
    console.log(type);
    if (type === "") {
      setBookData(books.slice(1, 17));
    } else {
      const newBookData = books.filter(
        (book) =>
          book.category === type &&
          book.sellingPrice > min &&
          book.sellingPrice < max
      );
      setBookData(newBookData);
    }
  };
  const getCartData = async () => {
    let uri = "http://localhost:5051/cart/items";
    console.log(userId, uri);
    await axios
      .post(uri, { userId: userId })
      .then((res) => res.data)
      .then((data) =>{ setCartData(data);console.log(data);})
      .catch((err) => console.log(err));
  };
  const showCart = () => {
    setShow("showCart");
  };
  const hideCart = () => {
    axios.post("http://localhost:5051/cart/update", {
      id: userId,
      cartData: [],
    });
    if (show) {
      setShow("");
    }
  };
  const changeFlag = () => {
    setFlag((flag + 1) % 2);
  };
  return (
    <div className="w-screen bg-aliceblue">
      <UserContext.Provider
        value={{
          show,
          flag,
          cartData,
          userId,
          setUserId,
          setCartData,
          searchBook,
          setSearchBook,
          getBooks,
          getCartData,
          setBooks,
          books,
          bookData,
          setBookData,
          showCart,
          hideCart,
          changeFlag,
        }}
      >
        <Router>
          <Routes>
            <Route path="admin" element={<Admin />} />
            <Route key="home" index path="/" element={<Books />} />
            <Route key="engineering" path="engineering" element={<Books />} />
            <Route key="arts" path="arts" element={<Books />} />
            <Route key="medical" path="medical" element={<Books />} />
            <Route key="cbse" path="cbse" element={<Books />} />
            <Route key="stateBoard" path="stateboard" element={<Books />} />
            <Route key="competitive" path="competitive" element={<Books />} />
            <Route key="story" path="story" element={<Books />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route
              key="checkout"
              path="checkout"
              element={<CheckOut />}
            ></Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
