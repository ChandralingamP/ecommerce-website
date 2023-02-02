import React, { useContext, useState } from 'react'
import filterImg from '../../assets/filter.png'
import { navLinks } from '../../assets/Globalconstants/GlobalConstants'
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar({ priceRange }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [display, setDisplay] = useState('hidden');
  const NavTO = (item) => {
    setDisplay('hidden');
    console.log(item);
    if (location.pathname !== "/" + item) {
      navigate('/' + item);
    }
  }
  const showFilter = () => {
    if (display === 'hidden') {
      setDisplay('block');
    } else {
      setDisplay('hidden');
    }
  }
  return (
    <div className='relative lg:w-1/5 w-full'>
      <div className="absolute navBar justify-between  lg:px-12 px-10 flex lg:flex-col w-full py-3 lg:py-8 p-2 bg-gray-100">
        <input className='outline-none  lg:w-full w-60 h-8 border-2 border-gray-400 rounded-lg px-2 text-md pt-1 bg-gray-100' type="text" placeholder='search...' />
        <img onClick={() => showFilter()} className='lg:hidden h-8' src={filterImg} alt="=" />
        <div className="hidden lg:block">
          <Filter priceRange={priceRange} NavTO={NavTO} />
        </div>
      </div>
      <div className={display + " lg:hidden flex flex-col rounded-md absolute  top-0 left-3 right-3 bg-gray-300"}>
        <h2 style={{ cursor: "pointer" }} className='self-end pt-3 mx-6' onClick={() => showFilter()} >X</h2>
        <Filter priceRange={priceRange} NavTO={NavTO} />
      </div>
    </div>
  )
}
const Filter = ({ priceRange, NavTO }) => {
  const [min, setMin] = useState(200);
  const [max, setMax] = useState(3000);
  return (
    <div className="books flex flex-col mb-2 px-4">

      <h2 className='font-semibold text-xl mb-1 '>Category</h2>

      {
        navLinks.map((item, key) => {
          return (
            <button className='outline-none text-lg mx-2 my-1 self-start' onClick={() => NavTO(item)} key={key}>{item}</button>
          );
        })
      }
      <h2 className='font-semibold text-xl mb-1'>Price</h2>
      <div className="flex flex-col pl-2">
        <div className="min">
          <label>Min : {min}</label>
          <input type="range" min={0} max={1200} onChange={(e) => setMin(e.target.value)} defaultValue={min} />
        </div>
        <div className="min">
          <label>Max : {max}</label>
          <input type="range" min={500} max={3000} onChange={(e) => setMax(e.target.value)} defaultValue={max} />
        </div>
        <button onClick={() => priceRange(min,max)} className='border-2 bg-gray-300 mx-8 mt-1'>Apply</button>
      </div>
    </div>
  )
}


export default NavBar



