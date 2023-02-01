import React from 'react'
import './Card.css'
import cartImg from '../../assets/cart.png'
import axios from 'axios'
function Card({ item, changeFlag }) {
    const addCart = async (item) => {
        await axios.post("/cartItems/add", { item: item }).then((res) => res.data).then(data => console.log(data));
        changeFlag();
        
    }
    console.log(item);
    return (
        <div id={item._id} className="flex w-1/3 flex-col">
            <img className='h-80 px-4 pt-4 pb-1' src={item.bookImg} />
            <h4 className='self-center font-semibold text-xl'>{item.bookName}</h4>
            <p className='self-center text-lg'>${item.price}</p>
            <div className="flex justify-around">
                <button style={{ cursor: "pointer" }} className='text-xl h-10 px-5 rounded-md font-semibold bg-gray-300'>Buy</button>
                <button style={{ cursor: "pointer" }} onClick={() => addCart(item)} className='text-xl h-10 px-5 rounded-md font-semibold bg-gray-300'><img className='h-8' src={cartImg} alt="" /></button>
            </div>
        </div>
    )
}

export default Card;