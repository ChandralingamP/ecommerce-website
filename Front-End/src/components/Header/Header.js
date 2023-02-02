import React from 'react'
import cartImg from "../../assets/cart.png"
import cartWImg from "../../assets/cartW.png"
import menu from '../../assets/menu.png'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
function Header({ showCart, color }) {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const [display, setDisplay] = useState("hidden");
    const NavTO = (item) => {
        showMenu();
        if (item == '/home') {
            if (path !== '/') {
                navigate('/');
            }
        } else if (path !== '/' + item.toLowerCase()) {
            navigate("/" + item.toLowerCase());
        }
    }
    const showMenu = () => {
        if (display === "block") {
            setDisplay("hidden");
        } else {
            setDisplay("block");
        }
    }
    const img = (color !== "") ? cartImg : cartWImg;
    const value = (color !== "") ? "" : 'text-white';
    return (
        <div className='relative bottom-0 mb-1'>
            <div className={"Header font-sans lg:pt-2 pt-4 lg:h-20 lg:w-full items-center justify-between lg:px-16 px-10 flex bg-transparent "+value}>
                <div className={"nav hidden text-xl lg:flex w-1/3 justify-around "}>
                    <h2 style={{ cursor: "pointer" }} onClick={() => NavTO('/home')}>Home</h2>
                    <h2 style={{ cursor: "pointer" }} onClick={() => NavTO('engineering')}>Products</h2>
                    <h2 style={{ cursor: "pointer" }} >About</h2>
                </div>
                <div onClick={() => showMenu()} className="flex lg:h-10 h-8 lg:hidden">
                    <img src={menu} alt="" srcset="" />
                </div>
                <div className="logo lg:text-4xl md:text-3xl text-xl italic font-extrabold ">
                    <h1 >Book Store</h1>
                </div>
                <div className="addCart lg:w-1/3 ">
                    <img style={{ cursor: "pointer" }} className={'mx-auto flex justify-center lg:h-10 md:h-10 sm:h-8'} onClick={(e) => showCart(e)} src={img} alt="" srcset="" />
                </div>
            </div>
            <div className={"absolute nav z-10 lg:hidden left-0 right-0 text-xl flex flex-col bg-white rounded-md m-4 w-9/10 p-4 justify-around " + display}>
                <h2 style={{ cursor: "pointer" }} className='self-end' onClick={() => showMenu()} >X</h2>
                <h2 className='self-center py-2' style={{ cursor: "pointer" }} onClick={() => NavTO('/home')}>Home</h2>
                <h2 className='self-center py-2' style={{ cursor: "pointer" }} onClick={() => NavTO('engineering')}>Products</h2>
                <h2 className='self-center py-2' style={{ cursor: "pointer" }} >About</h2>
            </div>
        </div>
    )
}

export default Header