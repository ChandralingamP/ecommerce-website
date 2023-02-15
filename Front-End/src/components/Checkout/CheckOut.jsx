import "./CheckOut.css";
import React, { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
function CheckOut() {
  const { cartData } = useContext(UserContext);
  return (
    <div className="flex flex-row">
      <div className="flex bg-aliceblue flex-col text-black w-3/5 p-8">
        <h1 className="text-xl font-bold">Place your order here!</h1>
        <div className="Box font-semibold">
          <h4>Delivery Address</h4>
          <h4 className="InBox font-semibold"> Change</h4>
        </div>
        <div className="order-box font-semibold">
          <h4>ORDER SUMMARY</h4>
          {/* <h1>kabfakjwb</h1> */}
          <div className="product-book">
            {cartData &&
              cartData.map((item, key) => {
                <bookCard item={item} key={key} />;
              })}
          </div>
        </div>
      </div>
      <div className="w-2/5 p-8 text-black font-semibold">
        <div className="Box font-semibold">
          <h4>PAYMENT OPTIONS</h4>
        </div>
        <div className="Box flex flex-col p-5">
          <div>
            <h4>Price Details</h4>
          </div>
          <div className="clearfix ">
            <div className="Rbox">Price</div>
            <div className="Rbox">500</div>
          </div>
          <div className="clearfix">
            <div className="Rbox">Deliver Charges</div>
            <div className="Rbox">Free</div>
          </div>
          <div className="clearfix">
            <div className="Rbox">Total Payable</div>
            <div className="Rbox">500</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const bookCard = ({ item, key }) => {
  return (
    <div key={key} className="flex justify-between my-4 mx-2">
      <img
        className="h-40 w-36"
        src={`data:image/png;base64,${item.bookImg}`}
        alt="product"
      />
      <div className="flex flex-col w-1/3 justify-center self-center ">
        <h4>{item.bookName}</h4>
        <h5>${item.price}</h5>
        <span className="remove-item">remove</span>
      </div>
      <div className="flex flex-col justify-center self-center ">
        <p className="flex justify-center font-semibold text-xl">
          {item.count}
        </p>
      </div>
    </div>
  );
};

export default CheckOut;
