import React, { useEffect } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import {EngineeringBooks} from '../../Globalconstants/EngineeringBooks'
import './Container.css'
function Container() {
  let bookData = "";
  useEffect(() => {
    axios({ method: 'get', url: 'http://localhost:5000/' }).then((res) => res.data).then((data) =>{bookData= data ;console.log(bookData)});
  }, [])
  // useEffect(()=>{

  // },[bookData])
  return (
    <div className='container'>
      <h2 id="home-title">Continue Shopping....</h2>
      <div className="cards">
          {bookData && bookData.map((item, key) => {
            console.log(item);
            return (
              <Card name={"book-card"} key={key} item={item} />
            );
          })
          }
        </div>
 
    </div>
  )
}

export default Container