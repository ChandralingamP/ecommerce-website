import React from 'react'
import { EngineeringBooks } from '../../../Globalconstants/EngineeringBooks'
import Card from '../../Card/Card'
function ViewAllContainer({name}) {
  
  return (
    <div className='ViewAllContainer'>
      <h2>{`${name} Books`}</h2>
      <div className="Books-container">
        {
          EngineeringBooks.map((item, key) => {
            return (
              <Card name={"book-card"} key={key} item={item}/>
            );
          })
        }
      </div>
    </div>
  )
}

export default ViewAllContainer