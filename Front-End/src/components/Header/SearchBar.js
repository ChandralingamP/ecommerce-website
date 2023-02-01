import React from 'react'
import "./Header.css"
import { useNavigate, useLocation } from 'react-router-dom';
function SearchBar({showCart}) {
    const navigate = useNavigate();
    const location = useLocation();
    const NavTO = (item) => {
        // let path = item;
        console.log(item);
        if (location.pathname === "/") {

            navigate(item);
        } else if (location.pathname === "/" + item) {
            navigate("/")
        } else {
            navigate("/" + item)
        }
    }
    return (
        <div className='searchBar'>
            <div className="left">
                <div className="logo font-semibold">
                <button onClick={()=>NavTO("admin")}>Logo</button>
                </div>
                <div className="searchEngine" >
                    <input className='lg:text-black text-gray-900 bg-transparent' type="text" placeholder='search....' />
                    <div className="icon ">O</div>
                </div>
            </div>
            <div className="right">
                <div className="addCart">
                    <button className="" onClick={(e)=>showCart(e)}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar