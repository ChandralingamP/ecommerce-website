import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Card from '../Card/Card'
import bookImg from '../../assets/book.png'
import bannerImg from '../../assets/banner.jpg'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
function Home({ showCart }) {
  const navigate = useNavigate();
  const [books,setBooks] = useState("");
  const item = {bookImg: bookImg, bookName : "Harry Potter", price : "200", _id :1};
  useEffect(()=>{
    axios.get('/books').then((res)=>res.data).then((data)=>setBooks(data));
  })
  return (
    <div className="home italic">
      <div className='backdrop-blur-sm' style={{ backgroundImage: `url(${bannerImg})`, height: "100vh", width: "100%" }} >
        <Header color={""} showCart={showCart} />
        <div className="banner z-10 flex flex-col lg:w-3/4 lg:mx-auto  h-96 lg:pt-64 pt-52 lg:px-16 px-6 z-10  justify-around justify-items-center  ">
          <h3 style={{ lineHeight: "1.2" }} className='font-semibold justify-center aligin-center self-center text-2xl md:text-4xl  lg:text-5xl italic'>A good bookshop is like a genteel black hole that knows how to read.</h3>
          <button onClick={()=>navigate('/engineering')} className='outline-none text-white font-bold rounded-md lg:text-2xl mt-4 self-center border-2 py-2 px-4 '>Shop Now</button>
        </div>
      </div >
      <div className="mt-6 flex flex-col mb-5" >
        <h2 className='self-center font-semibold tracking-snug text-xl md:text-2xl lg:text-4xl'>Books</h2>
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-wrap mx-auto w-4/5">
          {
            books && books.slice(1,7).map((item,key)=>{
              return <Card key={key} item={item}/>;
            })
          }
          {
            !books && <div className='flex justify-center justify-items-center self-center'>Loading</div>
          }
        </div>
        <button onClick={()=>navigate('/engineering')} style={{ cursor: "pointer" }} className='self-center mt-5 rounded-md text-xl bg-gray-300 py-2 px-7 font-semibold tracking-snug'>All Books</button>
      </div>
    </div>
  )
}
export default Home