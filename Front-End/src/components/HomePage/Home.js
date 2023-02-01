import React from 'react'
import Header from '../Header/Header'
import Card from '../Card/Card'
import bookImg from '../../assets/book.png'
import bannerImg from '../../assets/banner.jpg'
function Home({ showCart }) {
  const item = {bookImg: bookImg, bookName : "Harry Potter", price : "200", _id :1}
  return (
    <div className="home">
      <div style={{ backgroundImage: `url(${bannerImg})`, height: "100vh", width: "100%" }} >
        <Header color={"white"} showCart={showCart} />
        <div className="banner z-10 flex flex-col w-3/4 mx-auto h-96 pt-64 px-16 z-10  justify-around justify-items-center  ">
          <h3 style={{ lineHeight: "1.2" }} className='font-semibold justify-center self-center text-5xl'>A good bookshop is like a genteel black hole that knows how to read.</h3>
          <button className='outline-none text-white font-bold text-2xl mt-4 self-center border-2 py-2 px-4 '>Shop Now</button>
        </div>
      </div >
      <div className="mt-6 flex flex-col mb-5" >
        <h2 className='self-center font-semibold tracking-snug text-4xl'>Books</h2>
        <div className="flex flex-row flex-wrap mx-auto w-4/5">
          <Card item={item}/>
          <Card item={item}/>
          <Card item={item}/>
        </div>
        <button style={{ cursor: "pointer" }} className='self-center mt-5 rounded-md text-xl bg-gray-300 py-2 px-7 font-semibold tracking-snug'>All Books</button>
      </div>
    </div>
  )
}

export default Home