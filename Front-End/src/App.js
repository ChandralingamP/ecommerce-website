import React,{useState} from 'react'
import Home from './components/HomePage/Home'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Admin from './components/Admin/Admin'
function App() {
  const [flag,setFlag] = useState(0);
  const [show, setShow] = useState("");
  const showCart = () => {
    if (show) {
      setShow("");
    } else {
      setShow("showCart");
    }
    console.log(show);
  }
  const hideCart=()=>{
    if(show){
      setShow("");
    }
  }
  const changeFlag=()=>{
    setFlag((flag+1)%2);
  }
  return (
    <div className='lg:w-100'>
      <Router>
        <Routes>
          <Route key="home" index element={<Home flag={flag} show={show}  showCart={showCart}  hideCart={hideCart} changeFlag={changeFlag}/>}></Route>
          <Route  path="admin" element={<Admin />}/>
          <Route key='engineering' path="engineering" element={<Home flag={flag}  showCart={showCart}  hideCart={hideCart} changeFlag={changeFlag}/>}/>
          <Route key='arts' path="arts" element={<Home flag={flag}  showCart={showCart}  hideCart={hideCart} changeFlag={changeFlag}/>}/>
          <Route key='medical' path="medical" element={<Home flag={flag}  showCart={showCart}  hideCart={hideCart} changeFlag={changeFlag}/>}/>
          <Route key='cbse' path="stateBoard" element={<Home flag={flag}  showCart={showCart}  hideCart={hideCart} changeFlag={changeFlag}/>}/>
          <Route key='stateBoard' path="stateboard" element={<Home flag={flag}  showCart={showCart}  hideCart={hideCart} changeFlag={changeFlag}/>}/>
          <Route key='competitive' path="competitive" element={<Home flag={flag}  showCart={showCart}  hideCart={hideCart} changeFlag={changeFlag}/>}/>
          <Route key='stateBoard' path="stateboard" element={<Home flag={flag}  showCart={showCart}  hideCart={hideCart} changeFlag={changeFlag}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App