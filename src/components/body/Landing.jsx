import React from 'react'
import Card from '../card/Card'
import Circle from '../circle/Circle'
import Song from '../song/Song'
import Songs from '../songs/Songs'

const Landing = () => {
  return (
    <div className='landing'>
        {/* <Card />
        <Songs /> */}
        <Circle />
        <Song />
    </div>
  )
}

export default Landing