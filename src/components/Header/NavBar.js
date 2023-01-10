import React from 'react'
import {navLinks} from '../../Globalconstants/GlobalConstants'
import {useNavigate,useLocation} from 'react-router-dom';
const NavBar =()=> {
  const navigate = useNavigate();
  const location = useLocation();
  const NavTO = (item) =>{
    console.log(item);
    if(location.pathname === "/"){

      navigate(item);
    }else if (location.pathname === "/"+item){
      navigate("/")
    }else{
      navigate("/"+item)
    }
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