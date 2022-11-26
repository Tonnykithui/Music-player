import React from 'react';
import { IoMdPlay } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { songs } from '../data/Songs';
const Songs = () => {
  
  return (
    <div className='playlist'>
        <div className="songs">
            {
                songs.map((song) => (
                    <div className='song'>
                        <div className="play-pause">
                           <IoMdPlay />
                        </div>
                        <div className="song-title">
                           <li id={song.id}>{song.title}</li>
                           <p>{song.artist}</p>
                        </div>
                        <div className="like">
                           <AiOutlineHeart />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Songs