import React from 'react'
import Header from '../../Header/Header'
import SampleBooks from '../SampleBooks'
import SideBar from "../../SideBar/SideBar"
import './Engineering.css'
function Engineering() {
  return (
    <div className='Engineering'>
      <Header />
      <div className="Banner">
        <SideBar />
        <div className="book-section">
          <SampleBooks />
          <SampleBooks />
          <SampleBooks />
        </div>
      </div>
    </div>
  )
}

export default Engineering