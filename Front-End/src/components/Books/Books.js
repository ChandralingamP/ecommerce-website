import React from 'react'
import Header from '../Header/Header'
import Cart from '../Cart/cart'
import Container from './Container'
import NavBar from '../Header/NavBar'
function Home({flag,show,showCart,hideCart,changeFlag}) {
  return (
    <div>
      <Header showCart={showCart} />
      <NavBar/>
      <Container hideCart={hideCart} changeFlag={changeFlag}/>
      <Cart show={show} flag={flag } changeFlag={changeFlag}/>
    </div>
  )
}

export default Home