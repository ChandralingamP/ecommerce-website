import React from 'react'
import './Header.css'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
function Header({showCart}) {
    return (
        <div className='Header'>
            <SearchBar showCart={showCart}/>
            <NavBar/> 
        </div>
    )
}

export default Header