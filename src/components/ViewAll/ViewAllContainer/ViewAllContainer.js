import React from 'react'
import { EngineeringBooks } from '../../../Globalconstants/EngineeringBooks'
import Card from '../../Card/Card'
function ViewAllContainer() {
  return (
    <div className='ViewAllContainer'>
      <h2>Engineering Books</h2>
      <div className="Books-container">
        {
          EngineeringBooks.map((item, key) => {
            return (
              <Card key={key} item={item}/>
            );
          })
        }
      </div>

    </div>
  )
}

export default ViewAllContainer