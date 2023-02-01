import React from 'react'
import cartImg from "../../assets/cart.png"
import cartWImg from "../../assets/cartW.png"
import {useNavigate,useLocation} from 'react-router-dom';
function Header({ showCart ,color}) {
    const navigate = useNavigate();
    const location = useLocation();
    const NavTO = (item) => {
        console.log(item);
        if (location.pathname === "/") {
            navigate(item);
        } else if (location.pathname === "/" + item.toLowerCase()) {
            navigate("/")
        } else {
            navigate("/" + item.toLowerCase());
        }
    }
    console.log(color);
    const img = (color === "") ? cartImg : cartWImg;
    const value = (color === "") ? "" :'text-white';
    return (
        <div className={"Header font-sans h-20 lg:w-full items-center justify-between px-16 lg:flex bg-transparent"+value}>
            <div className="nav hidden text-xl lg:flex w-1/3 justify-around">
                <h2 style={{ cursor: "pointer" }} onClick={()=> NavTO('/')}>Home</h2>
                <h2 style={{ cursor: "pointer" }} onClick={()=> NavTO('engineering')}>Products</h2>
                <h2 style={{ cursor: "pointer" }} >About</h2>
            </div>
            <div className="logo text-4xl font-extrabold ">
                <h1>Logo</h1>
            </div>
            <div className="addCart lg:w-1/3 ">
                <img style={{ cursor: "pointer" }} className={'mx-auto h-10 '+value} onClick={(e) => showCart(e)} src={img} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Header