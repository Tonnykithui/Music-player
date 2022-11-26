import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Card = () => {
  return (
    <div className='card'>
        <div className="row-item-1">
            <BsThreeDotsVertical />
        </div>
        <div className="row-item-2">
            <h1 className='font-semibold text-lg'>Popular songs<br/></h1>
            <p>Playlist</p>
        </div>
        <div className="row-item-3">
            <p>250 songs</p>
        </div>
    </div>
  )
}

export default Card