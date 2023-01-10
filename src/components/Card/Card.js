import React from 'react'
import './Card.css'
function Card({item}) {
    return (
        <div id={item.id} className="book-card">
            <img src={item.bookImg} alt="df" />
            <h4>{item.bookName}</h4>
            <h5>{item.author}</h5>
            <p>${item.price}</p>
        </div>
    )
}

export default Card;