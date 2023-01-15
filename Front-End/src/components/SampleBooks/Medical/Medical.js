import React from 'react'
import Header from '../../Header/Header'
import SampleBooks from '../SampleBooks'
import SideBar from "../../SideBar/SideBar"
import '../Engineering/Engineering.css'
function Medical() {
  return (
    <div className='Engineering'>
      <Header />
      <div className="Banner">
        <SideBar /> 
        <div className="book-section">
          <SampleBooks subject={"Cardio"}/>
          <SampleBooks subject={"Neuro"}/>
          <SampleBooks subject={"Ortho"}/>
          <SampleBooks subject={"Dental"}/>
        </div>
      </div>
    </div>
  )
}

export default Medical