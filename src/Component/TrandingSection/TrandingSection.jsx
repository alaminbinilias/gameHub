//import React from 'react';

import { useEffect, useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import TrandingGamesCard from "./TrandingGamesCard/TrandingGamesCard";
import { Link, NavLink } from "react-router";

const TrandingSection = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/GamesData/Data.json').then(res => res.json()).then(dta => setData(dta));
    }, [])

    //console.log(data);
    const FilterData = data.filter(items => items.trending === true);

    //console.log(FilterData);
    let SelectedData = [];
    for (let i = 0; i < 8; ++i) {
        SelectedData.push(FilterData[i]);
    }
    //console.log(SelectedData);

    return (
        <div className="mt-3 pb-7 w-11/12 mx-auto">
            <p className='font-semibold mt-9 lg:mt-15 text-5xl text-center text-white flex justify-center gap-3'>Popular Games <span><FaArrowTrendUp /></span></p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-16  lg:mt-19 pb-6">
                {
                    SelectedData.map((items,indx) => <Link to={`/games/details/${items?.id}`}><TrandingGamesCard key={indx} items={items}></TrandingGamesCard></Link>)
                }
            </div>
            <NavLink to='allgames'><button className="btn mx-auto flex justify-center px-10 border-0 bg-linear-to-r from-[#2be9c8] to-[#a26bff]">See All</button></NavLink>
        </div>
    );
};

export default TrandingSection;