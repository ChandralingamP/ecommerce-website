import React, { useContext, useState } from 'react'
import filterImg from '../../assets/filter.png'
import { navLinks } from '../../assets/Globalconstants/GlobalConstants'
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar({ priceRange,setSearchBook }) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [display, setDisplay] = useState('hidden');
  const NavTO = (item) => {
    setSearchBook("");
    console.log(item);
    setDisplay('hidden');
    if (item === 'Home') {
      if (path !== '/') {
        navigate('/');
      }
    } else if (path !== '/' + item.toLowerCase()) {
      navigate("/" + item.toLowerCase());
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
    <div className='fixed  pt-16 lg:w-1/5 w-full'>
      <div className="absolute  bg-primary mx-3 mt-2  rounded-md   navBar justify-between lg:pb-14  lg:px-0 px-10 flex lg:flex-col w-full py-3 lg:py-0 p-2">
        <img onClick={() => showFilter()} className='lg:hidden h-8' src={filterImg} alt="=" />
        <div className="hidden lg:block">
          <Filter priceRange={priceRange} path={path} NavTO={NavTO} />
        </div>
      </div>
      <div className={display + " lg:hidden flex flex-col rounded-md absolute  top-0 left-3 right-3 bg-gray-300"}>
        <button style={{ cursor: "pointer" }} className='self-end pt-3 mx-6 outline-none' onClick={() => showFilter()} >X</button>
        <Filter priceRange={priceRange} path={path} NavTO={NavTO} />
      </div>
    </div>
  )
}
const Filter = ({ priceRange, path, NavTO }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3000);
  return (
    <div className="books flex ml-3 my-3 flex-col">
      <h2 className='font-bold text-aliceblue text-3xl px-4 py-5 '>Category</h2>
      <div>
        {
          navLinks.map((item, key) => {
            const value = path.slice(1) === item.toLowerCase() ? 'lg:bg-blue-600 text-aliceblue' : 'text-black';
            return (
              <button key={key} className="outline-none w-full"  onClick={() => NavTO(item)}><p className={'hover:bg-blue-600 hover:text-aliceblue py-2 font-semibold px-4 text-lg ml-4 mt-1 self-start ' + value}>{item}</p></button>
            );
          })
        }
      </div>
      <div className='px-4 pt-5'>
        <h2 className='font-semibold text-2xl mb-1 text-aliceblue font-bold'>Price</h2>
        <div className="flex flex-col px-4 font-semibold pl-2">
          <div className=" flex flex-col">
            <label>Min : {min}</label>
            <input type="range" min={0} max={1200} onChange={(e) => setMin(e.target.value)} defaultValue={min} />
          </div>
          <div className="flex flex-col">
            <label>Max : {max}</label>
            <input type="range" min={500} max={3000} onChange={(e) => setMax(e.target.value)} defaultValue={max} />
          </div>
          <button onClick={() => priceRange(min, max)} className='bg-blue-500 rounded-md py-1 text-lg text-aliceblue font-bold mx-8 mt-2'>Apply</button>
        </div>
      </div>
    </div>
  )
}


export default NavBar



