import React from 'react'
import '../components/Header.css'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
function Header() {
    return (
        <div className='Header'>
            <SearchBar />
            <NavBar/>
        </div>
    )
}

export default Header