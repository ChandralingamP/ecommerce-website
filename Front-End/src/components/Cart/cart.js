import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext, BookContext } from '../UserContext/UserContext';
function Cart() {
  const { show,userId, changeFlag,cartData, setCartData, hideCart } = useContext(UserContext);
  const inc = async (item) => {
    const data = cartData.map((obj) => {
      if ( obj._id === item._id) {
        obj.count +=1;
        return obj;
      }else{
        return obj;
      }
    });
    setCartData(data);
  }
  const clearCart = async () => {
    await axios.delete("/cart/clear");
    setCartData([]);
    changeFlag();
  }
  const dec = async (item) => {
    if(item.count === 1){
      const newD = cartData.filter((obj) => obj._id !== item._id);
      setCartData(newD);
    }else{
      const newD = cartData.map((obj) => {
        if ( obj._id === item._id) {
          if(obj.count === 1){
            console.log(obj);
            return;
          }else{
            obj.count -=1;
            return obj;
          }
        }else{
          return obj;
        }
      });
      setCartData(newD);
    }
  }
  const fetch1 = () =>{
    if(userId.length){
      console.log(userId,"from Cart");
      axios.post('/cart/items/',{userId : userId}).then((res)=>res.data).then((data)=>{setCartData(data); console.log(data,"caart");});
    }
  }
  useEffect(() => {
    fetch();
  }, [userId]);
  const value = show ? 'block' : 'hidden';
  return (
    <div className='fixed right-0 w-full lg:w-1/4 overflow-scroll overscroll-none ' style={{height : '100vh',scrollbarWidth: 'none'}} >
      <div className={value + ' mt-16 top-0  bg-secondary right-0   p-4'} >
        <div className="flex pr-2 justify-between">
          <h1 className='font-bold'>Cart Items</h1>
          <button style={{ cursor: "pointer" }} onClick={() => hideCart()} className='outline-none font-bold'>X</button>
        </div>
        <BookContext.Provider value={{ cartData, inc, dec, clearCart }}>
          <div  >
            <CartItem />
          </div>
        </BookContext.Provider>
      </div>
    </div>
  )
}


function CartItem() {
  let cost = 0;
  const { cartData, inc, dec, clearCart } = useContext(BookContext);
  useEffect(() => {
  }, [cartData])
  return (
    <div className=''>
      {cartData && cartData.map((item, key) => {
        cost += item.count * item.price;
        return (
          // <div key={key}> {item}</div>
          <div key={key} className="flex border-2 border-blue-400 rounded-lg p-2 justify-between my-4 mx-2">
            <img className='h-40 w-36' src={require(`../../assets/images/${item.bookImg}`)} alt="product" />
            <div className='flex flex-col w-1/3 justify-center self-center '>
              <h4>{item.bookName}</h4>
              <h5>${item.price}</h5>
              <span className="remove-item">remove</span>
            </div>
            <div className='flex flex-col justify-center self-center '>
              <button style={{ cursor: "pointer" }} className='text-xl my-1 rounded-full h-10 px-3 rounded-md font-semibold bg-gray-300' onClick={() => inc(item)}>^</button>
              <p className="flex justify-center font-semibold text-xl">{item.count}</p>
              <button style={{ cursor: "pointer" }} className='text-xl h-10 px-3 rounded-full font-semibold bg-gray-300' onClick={() => dec(item)}>v</button>
            </div>
          </div>
        );
      })
      }
      <div className="abolute flex flex-col justify-center">
        {cartData && <h3 className='self-center'>your total : $<span className=" font-bold">{cost}</span></h3>}
        <button onClick={() => clearCart()} className="self-center mt-1 font-bold border-2 w-1/4 bg-gray-200 rounded-md">clear cart</button>
      </div>
    </div>
  )
}

export default Cart;