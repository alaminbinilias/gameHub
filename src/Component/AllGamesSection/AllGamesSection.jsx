//import React from 'react';

import { useLoaderData } from "react-router";
import GamesCard from "./GamesCard/GamesCard";
import { useState } from "react";
import SearchNotFoundSection from "./GamesCard/SearchNotFoundSection";

const AllGamesSection = () => {
  const Data = useLoaderData();
  const [data, SetData] = useState(Data);


  ///Search Section///
  const searchData = (event) => {
    const getInput = event.target.value.toLowerCase().trim().split(' ').join('');
    const fltrData = Data.filter(items => items.title.toLowerCase().trim().split(' ').join('').includes(getInput));
    SetData(fltrData);
    //console.log(fltrData);
  }
  ///Search Section///

  return (
    <div className='w-11/12 mx-auto font-mono mt-10'>
      <header className='flex items-center justify-between w-full'>
        <p className='text-3xl text-white'>All Games({data.length})</p>

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
            <input type='text' onChange={searchData} required placeholder='Search' />
          </label>
        </div>
      </header>

      <section className="w-full h-full GamesSection grid grid-cols-1 lg:grid-cols-4 gap-4 cursor-pointer mt-10 mb-10">
        {
          data.length == 0 ? <SearchNotFoundSection></SearchNotFoundSection> : data.map(game => <GamesCard key={game.id} game={game} ></GamesCard>)
        }
      </section>

    </div>
  )
}

export default AllGamesSection
