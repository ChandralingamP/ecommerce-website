import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Cart from '../Cart/cart'
import Container from './Container'
import NavBar from '../Header/NavBar'
function Books({ flag, show, showCart, hideCart, changeFlag }) {
  const [min,setMin] = useState(0);
  const [max,setMax] = useState(3000);
  function priceRange(m,ma){
    setMin(m);
    setMax(ma);
  }
  useEffect(()=>{
    console.log(min,max);
  },[min]);
  return (
    <div className='relative'>
      <Header showCart={showCart} />
      <div className="cart">
        <Cart show={show} flag={flag} changeFlag={changeFlag} />
      </div>
      <div className="flex lg:flex-row flex-col">
          <NavBar priceRange={priceRange}/>
        <div className="books w-full">
          <Container min={min} max={max}  changeFlag={changeFlag} />
        </div>
      </div>
      <Cart hideCart={hideCart} show={show} flag={flag} changeFlag={changeFlag} />
    </div>
  )
}

export default Books