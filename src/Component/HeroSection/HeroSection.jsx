//import React from 'react';

import { NavLink } from "react-router";
import chartr from "../../assets/Picture/right.webp"
import TextType from '../Extras/TextType/TextType';
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className="w-11/12 mx-auto pt-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
                <div className="leftSide">
                    <div className="flex items-center gap-1">
                        <div className="bg-green-400 w-3 h-3 rounded"></div>
                        <p className="text-[#2be9c8] font-sans font-semibold text-[1rem] lg:text-[1.1rem]">LEVEL UP YOUR PLAY</p>
                    </div>


                    <p className="text-white mt-2 lg:mt-4 font-bold text-4xl text-center font-mono block lg:hidden">Your universe of <span className="text-[#2be9c8]">epic games starts here</span></p>


                    <div className="text-white mt-4 font-bold text-7xl font-mono hidden lg:block">Your universe of <span className="text-[#2be9c8]">epic</span><TextType className="bg-linear-to-r from-[#2be9c8] to-[#e056fd] bg-clip-text text-transparent"
                        text={["games starts here"]}
                        typingSpeed={120}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="_"
                        texts={["Welcome to React Bits! Good to see you!", "Build some amazing experiences!"]}
                        deletingSpeed={50}
                        variablespeedmin={60}
                        variablespeedmax={120}
                        cursorBlinkDuration={0.5}
                    /></div>
                    <p className="mt-4 font-medium text-center lg:text-start text-[1.3rem] leading-10 text-gray-400">Jump into a galaxy of action, strategy, and adventure titles built for players who crave more. Discover new worlds, team up with legends, and chase victories that actually feel earned - all in one place.</p>

                    <div className="flex justify-center lg:justify-start pb-3">
                        <NavLink className='mt-2 btn px-10 font-bold bg-linear-to-r from-[#2be9c8] to-[#a26bff] border-0'><span className="text-black">Explore Games</span> <span className="flex items-center text-black"><FaLongArrowAltRight className="flex mt-1" /></span></NavLink>
                    </div>
                </div>

                <div className="mx-auto hidden lg:flex">
                    <img className="w-150 mt-10" src={chartr} alt="" />
                </div>




            </div>
        </div>
    );
};

export default HeroSection;