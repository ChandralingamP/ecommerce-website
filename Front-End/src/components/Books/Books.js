import React from 'react'
import Header from '../Header/Header'
import Cart from '../Cart/cart'
import Container from './Container'
import NavBar from '../Header/NavBar'
function Books({ flag, show, showCart, hideCart, changeFlag }) {
  
  return (
    <div>
      <Header color={""} showCart={showCart} />
      <div className="cart">
        <Cart show={show} flag={flag} changeFlag={changeFlag} />
      </div>
      <div onClick={() => hideCart()} className="flex flex-row">
        <NavBar />
        <div className="books w-full">
          <Container changeFlag={changeFlag} />
        </div>
      </div>
    </div>
  )
}

export default Books