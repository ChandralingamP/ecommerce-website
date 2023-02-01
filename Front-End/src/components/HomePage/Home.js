import React from 'react'
import Header from '../Header/Header'
import Cart from '../Cart/cart'
import NavBar from '../Header/NavBar'
function Home({flag,show,showCart,hideCart,changeFlag}) {
  return (
    <div>
      <Header showCart={showCart}/>
      <NavBar/>
      <Cart show={show} flag={flag } changeFlag={changeFlag}/>
    </div>
  )
}

export default Home