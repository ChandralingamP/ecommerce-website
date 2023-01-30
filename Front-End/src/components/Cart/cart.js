import React, { useEffect, useState, createContext, useContext } from 'react'
import axios from 'axios'
import './cart.css'
const UserContext = createContext();
function Cart({ show, flag, changeFlag }) {
  const [bookData, setBookData] = useState("");
  const addCart = async (item) => {
    console.log(item);
    await axios.post("/cartItems/add", { item: item }).then((res) => res.data).then(data => { changeFlag() });
  }
  const clearCart = async () => {
    await axios.delete("/cartItems/clear")
      .then(() => (changeFlag()));
  }
  const removeCart = async (item) => {
    console.log(item._id);
    await axios.post("/cartItems/remove", { item: item }).then((res) => res.data).then(data => changeFlag());
  }
  useEffect(() => {
    axios({ method: 'get', url: 'http://localhost:5000/cartItems/items' }).then((res) => res.data).then((data) => { setBookData(data) });
  }, [flag]);
  console.log(show);
  return (
    <div>
      <div className={show ? "cart showCart" : "cart"}>
        <h1>Cart Items</h1>
        <UserContext.Provider value={bookData}>
          <CartItem addCart={addCart} removeCart={removeCart} clearCart={clearCart} />
        </UserContext.Provider>
      </div>
    </div>
  )
}
function CartItem({ addCart, removeCart, clearCart }) {
  let cost = 0;
  const bookData = useContext(UserContext);
  useEffect(() => {
    console.log(bookData);
  }, [bookData])
  return (
    <>
      {bookData && bookData.map((item, key) => {
        cost += item.count * item.price;
        return (
          <div key={key} className="cart-item">
            <img src={item.bookImg} alt="product" />
            <div>
              <h4>{item.bookName}</h4>
              <h5>${item.price}</h5>
              <span className="remove-item">remove</span>
            </div>
            <div>
              <button onClick={(e) => addCart(item)}>inc</button>
              <p className="item-amount">
                {item.count}
              </p>
              <button onClick={(e) => removeCart(item)}>dec</button>
            </div>
          </div>
        );
      })
      }
      <div className="cart-footer">
        {bookData && <h3>your total : $<span className="cart-total">{cost}</span></h3>}
        <button onClick={() => clearCart()} className="clear-cart banner-btn">clear cart</button>
      </div>
    </>
  )
}

export default Cart;