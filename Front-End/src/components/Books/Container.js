import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
function Container({ changeFlag, showCart, min, max }) {
  const [bookData, setBookData] = useState("");
  const location = useLocation();
  const category = location.pathname;
  let seacrhCategory = category.slice(1).toLocaleLowerCase();
  seacrhCategory = seacrhCategory.charAt(0).toUpperCase() + category.slice(2);
  console.log(seacrhCategory);
  useEffect(() => {
    if (category === "/all") {
      axios({ method: 'get', url: 'http://localhost:5000/books/' }).then((res) => res.data).then((data) => { setBookData(data) });
    } else {
      const url = "/books/category";
      axios.post(url, { category: seacrhCategory }).then((res) => res.data).then(data => { setBookData(data); });
    }
  }, [category]);
  useEffect(()=>{
    console.log(min,max);
    setBookData(bookData)
  },[min,max]);
  return (
    <div className='bg-gray-300 flex flex-col lg:pt-0 pt-16 lg:pb-8'>
      <h2 className='self-center lg:mt-3 font-semibold text-4xl mb-6'>{seacrhCategory} Books</h2>
      <div className="flex flex-row flex-wrap w-full px-10">
        {bookData && bookData.map((item, key) => {
          return (<>
            {
              (item.sellingPrice > min && item.sellingPrice < max) && <Card key={key} item={item} showCart={showCart} changeFlag={changeFlag} />
            }
          </>
          );
        })
        }
        {
          !bookData && <div className='flex justify-center justify-items-center self-center'>Loading</div>
        }
      </div>
    </div>
  )
}
export default Container