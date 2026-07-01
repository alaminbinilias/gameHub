//import React from 'react';

import { useLoaderData } from "react-router";
import GamesCard from "./GamesCard/GamesCard";

const AllGamesSection = () => {
    const Data=useLoaderData();

  return (
    <div className='w-11/12 mx-auto font-mono mt-10'>
      <header className='flex items-center justify-between w-full'>
        <p className='text-3xl text-white'>All Games({Data.length})</p>

        <div className='Search-Section w-50 lg:w-80'>
          <label className='input'>
            <svg
              className='h-[1em] opacity-50'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <g
                strokeLinejoin='round'
                strokeLinecap='round'
                strokeWidth='2.5'
                fill='none'
                stroke='currentColor'
              >
                <circle cx='11' cy='11' r='8'></circle>
                <path d='m21 21-4.3-4.3'></path>
              </g>
            </svg>
            <input type='search' required placeholder='Search' />
          </label>
        </div>
      </header>

      <section className="GamesSection grid grid-cols-1 lg:grid-cols-4 gap-3 mt-10 mb-10">
        {
            Data.map(game=><GamesCard key={game.id} game={game} ></GamesCard>)
        }
      </section>

    </div>
  )
}

export default AllGamesSection
