import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const Circle = () => {
  return (
    <div className='circle-play'>
        <div className="top">
            <div className="top-redirect">
               <BiArrowBack />
            </div>
            <div className="top-wording">
               <h2>All songs</h2>
            </div>
        </div>
        <div className="circle">
            <div className="rotating-circle">

            </div>
        </div>
    </div>
  )
}

export default Circle