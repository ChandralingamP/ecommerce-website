import React from 'react'
import Header from '../Header/Header'
import Cart from '../Cart/cart'
import Container from './Container'
function Home({flag,show,showCart,hideCart,changeFlag}) {
  return (
    <div>
      <Header showCart={showCart} />
      <Container hideCart={hideCart} changeFlag={changeFlag}/>
      <Cart show={show} flag={flag } changeFlag={changeFlag}/>
    </div>
  )
}

export default Home