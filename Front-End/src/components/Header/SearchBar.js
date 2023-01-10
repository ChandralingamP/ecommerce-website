import React from 'react'
import "./Header.css"
function SearchBar() {
    return (
        <div className='searchBar'>
            <div className="left">
                <div className="logo">
                    LoGo
                </div>
                <div className="searchEngine" >
                    <input type="text" placeholder='search....' />
                    <div className="icon">O</div>
                </div>
            </div>
            <div className="right">
                <div className="cart">
                    Add
                </div>
            </div>
        </div>
    )
}

export default SearchBar