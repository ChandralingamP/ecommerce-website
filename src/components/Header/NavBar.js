import React from 'react'
import {navLinks} from '../../Globalconstants/GlobalConstants'
import {useNavigate} from 'react-router-dom';
const NavBar =()=> {
  const navigate = useNavigate();
  const NavTO = (item) =>{
    console.log(item);
    navigate(item);
  }
  return (
    <div className="navBar">
        {
            navLinks.map((item,key) =>{
                return (
                <button onClick={()=>NavTO(item)} key={key}>{item}</button>
                );
            })
        }
    </div>
  )
}

export default NavBar