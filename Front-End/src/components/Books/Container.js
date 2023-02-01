import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
// import booii from '../../assets/book.png'
import { useLocation } from 'react-router-dom';
function Container({ hideCart, changeFlag }) {
  const [bookData, setBookData] = useState("");
  const location = useLocation();
  // const item = { bookImg: booii, bookName: "Harry Potter", price: "200", _id: 1 };
  const category = location.pathname;
  let seacrhCategory = category.slice(1);
  seacrhCategory = seacrhCategory.charAt(0).toUpperCase() + category.slice(2);
  useEffect(() => {
    console.log(category);
    if (category === "/all") {
      axios({ method: 'get', url: 'http://localhost:5000/cart/items' }).then((res) => res.data).then((data) => { setBookData(data) });
    } else {
      const url = "/books/items";
      axios.post(url, { category: seacrhCategory }).then((res) => res.data).then(data => setBookData(data));
    }
  }, [category])
  return (
    <div className='bg-gray-300 flex flex-col pb-8'>
      <h2 className='self-center mt-3 font-semibold text-4xl'>{seacrhCategory} Books</h2>
      <div className="flex flex-row flex-wrap mx-auto w-4/5">
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