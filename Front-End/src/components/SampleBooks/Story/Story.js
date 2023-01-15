import React from 'react'
import Header from '../../Header/Header'
import SampleBooks from '../SampleBooks'
import SideBar from "../../SideBar/SideBar"
import '../Engineering/Engineering.css'
function Story() {
  return (
    <div className='Engineering'>
      <Header />
      <div className="Banner">
        <SideBar />
        <div className="book-section">
          <SampleBooks subject={"Fiction"}/>
          <SampleBooks subject={"Adventure"}/>
          <SampleBooks subject={"Action"}/>
          <SampleBooks subject={"Romance"}/>
        </div>
      </div>
    </div>
  )
}

export default Story