//import React from 'react';

import { IoStar } from 'react-icons/io5';
import './card.css'

const TrandingGamesCard = ({ items }) => {
    //console.log(items);
    return (
        <div>
            <div className=" card  h-100 shadow-sm cursor-pointer hover:scale-105 transition ease-in-out">
                <div className="absolute z-0">
                    <img src={items?.coverPhoto} className="imgS object-fill w-full h-100 rounded-[0.6rem]" alt=" Img Not Found" />

                </div>
                <div className="z-10 relative border-2 h-full flex items-end justify-between ">
                    <p className="text-white px-2 text-xl py-4 font-semibold">{items?.title}</p>
                    <p className="text-white px-2 text-xl py-4 flex items-center gap-2 font-semibold"> <span><IoStar /></span>{items?.ratings}</p>
                </div>
            </div>


        </div>
    );
};
export default TrandingGamesCard;