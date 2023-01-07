import React from 'react'
import {navLinks} from './Constant Data/GlobalConstants'
function NavBar() {
  return (
    <div className="navBar">
        {
            navLinks.map((item,key) =>{
                return (
                <button id={key}>{item}</button>
                );
            })
        }
    </div>
  )
}

export default NavBar