import React from 'react'
import './Card.css'
import axios from 'axios'
function Card({item,changeFlag}){
    const addCart= async(item)=>{
        await axios.post("/cartItems/add", {item : item}).then((res)=>res.data).then(data => console.log(data));
        changeFlag();
    }
    return (
        <div id={item._id} className="book-card">
            <img src={item.bookImg} alt="df" />
            <h4>{item.bookName}</h4>
            <h5>{item.author}</h5>
            <p>Price: ${item.price}</p>
            <div className="sell-div">
                <button onClick={(e)=>addCart(item)}>Add</button>
                <button>Buy</button>
            </div>
        </div>
    )
}

export default Card;