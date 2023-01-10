import React from 'react'
import './SampleBooks.css'
import { EngineeringBooks } from '../../Globalconstants/EngineeringBooks'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
function SampleBooks() {
    return (
        <>
            <div className='SampleBooks'>
                <div className="sampleBar">
                    <h3>Computer Science</h3>
                    <Link to='EngineeringViewAll'>View All</Link>                </div>
                <div className="Sample-Cards">
                    {
                        EngineeringBooks.map((item, key) => {
                            return (
                                <Card name={"view-card"} key={key} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SampleBooks