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
          <SampleBooks subject={"Computer Science"}/>
          <SampleBooks subject={"ECE"}/>
          <SampleBooks subject={"Mechanical"}/>
          <SampleBooks subject={"EEE"}/>
        </div>
      </div>
    </div>
  )
}

export default Engineering