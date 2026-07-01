//import React from 'react';

import { IoStar } from "react-icons/io5";

const GamesCard = ({ game }) => {
  //console.log(game);
  return (
    <div className=''>
      <div className='aura aura-rainbow w-full'>
        <div className='card bg-amber-100 h-100 shadow-sm hover:scale-105 transition ease-in-out'>
          <div className='w-full h-full border img-Section p-0 bg-amber-300' >
              <img src={game?.coverPhoto} className=' absolute z-0 h-full w-full'></img>
            <div className="flex justify-between px-3 pb-4 text-xl font-semibold items-end h-full">
              <p className='relative z-10 text-white'>{game?.title}</p>
              <p className=' text-white relative z-10 flex items-center gap-2'>Rating: <span><IoStar /></span> {game.ratings}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamesCard
