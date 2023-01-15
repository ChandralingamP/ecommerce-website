import React from 'react'
import '../common.css'
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import ViewAllContainer from '../ViewAllContainer/ViewAllContainer'
function EngineeringViewAll() {
  return (
    <div>
        <Header/>
        <div className="ViewAll">
        <SideBar/>
        <ViewAllContainer name="Engineering"/>
        </div>
    </div>
  )
}

export default EngineeringViewAll