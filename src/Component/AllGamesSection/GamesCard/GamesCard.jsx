//import React from 'react';

const GamesCard = ({ game }) => {
  console.log(game);
  return (
    <div className=''>
      <div className='aura aura-rainbow w-full'>
        <div className='card bg-amber-100  h-100 shadow-sm'>
          <div className='card-body absolute z-0  w-full h-full border img-Section p-0 bg-amber-300' > 
            <img src={game?.coverPhoto} className=' h-full w-full'></img>
            </div>
            <div classname='relative z-10 border-2 h-full flex items-end justify-between'>
              <p className='text-white'>{game?.title}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default GamesCard
