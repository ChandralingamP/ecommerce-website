import React from 'react'
import './Card.css'
import cartImg from '../../assets/addcart.png'
import axios from 'axios'
function Card({ item, changeFlag,showCart }) {
    const addCart = async (item) => {
        await axios.post("/cart/add", { item: item }).catch((err)=> console.log(err));
        changeFlag();
        showCart();
    }
    return (
        <div id={item._id} className="flex w-full lg:w-1/3 md:w-1/2 hover:bg-gray-100 hover:ease-in hover:delay-300 pb-4 rounded-md flex-col">
            <img className='h-80 px-4 pt-4 pb-1' src={`data:image/png;base64,${item.bookImg}`} />
            <h4 className='self-center font-semibold text-xl'>{item.bookName}</h4>
            <p className='self-center text-lg'>${item.price}</p>
            <div className="flex justify-around">
                <button style={{ cursor: "pointer" }} nClick={() => addCart(item)} className='text-xl h-10 px-5 rounded-md font-semibold bg-gray-300'>Buy</button>
                <button style={{ cursor: "pointer" }} onClick={() => addCart(item)} className='text-xl h-10 px-5 rounded-md font-semibold bg-gray-300'><img className='h-8' src={cartImg} alt="" /></button>
            </div>
        </div>
    )
}

export default Card;