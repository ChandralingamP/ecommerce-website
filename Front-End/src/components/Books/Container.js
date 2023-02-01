import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import './Container.css'
function Container({ hideCart, changeFlag }) {
  const [bookData, setBookData] = useState("");
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    console.log(path);
    if (path === "/") {
      axios({ method: 'get', url: 'http://localhost:5000/cart/items' }).then((res) => res.data).then((data) => { setBookData(data) });
    } else {
      const category = path;
      let seacrhCategory = category.slice(1);
      const url = "/books/items";
      axios.post(url, { category: seacrhCategory }).then((res) => res.data).then(data => setBookData(data));
    }
  }, [path])
  return (
    <div onClick={() => hideCart()} className='container'>
      <h2 id="home-title">Continue Shopping....</h2>
      <div className="cards">
        {bookData && bookData.map((item, key) => {
          return (
            <Card name={"book-card"} key={key} item={item} changeFlag={changeFlag} />
          );
        })
        }
      </div>
    </div>
  )
}

export default Container