import React from 'react'
import { navLinks } from '../../assets/Globalconstants/GlobalConstants'
import { useNavigate, useLocation } from 'react-router-dom';
const NavBar = () => {
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
  return (
    <div className="navBar px-16 flex flex-col w-1/5 py-8 p-2 bg-gray-100">
      <input className='outline-none border-2 border-gray-400 rounded-lg px-2 text-md py-1 bg-gray-100' type="text" placeholder='search...'/>
      <div className="books flex-col flex my-2">
        <h2 className='font-semibold text-xl mb-1'>Category</h2>
        {
          navLinks.map((item, key) => {
            return (
              <button className='outline-none text-lg mx-2 my-1 self-start' onClick={() => NavTO(item)} key={key}>{item}</button>
            );
          })
        }
        <h2 className='font-semibold text-xl mb-1'>Price</h2>
      </div>
    </div>
  )
}

export default NavBar