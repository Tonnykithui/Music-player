import React from 'react'
import { AiOutlineHeart, AiOutlinePause } from 'react-icons/ai'
import { BiSkipNext, BiSkipPrevious, BiPlay } from 'react-icons/bi'

const Song = () => {
  return (
    <div className='single-song'>
      <div className="single-song-top">
        <div className="single-song-title">
          <h2 className='font-semibold'>Something</h2>
          <p>Jason Momoa</p>
        </div>
        <div className="single-song-like">
          <AiOutlineHeart />
        </div>
      </div>
      <div className="single-song-middle">
        <div className="slider">
          <div className="slider-timer">
            <p>1:04</p>
            <p>3:45</p>
          </div>
          <div className="slider-item">
            <input type="range" name="" id="" />
          </div>
        </div>
      </div>
      <div className="single-song-bottom">
        <div className="controls">
          <div className="previous">
            <BiSkipPrevious />
          </div>
          <div className="pause-play">
            <AiOutlinePause />
            {/* <BiPlay /> */}
          </div>
          <div className="next">
            <BiSkipNext />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Song