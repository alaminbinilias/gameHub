//import React from 'react';

import { use } from "react";
import Context from "../AuthContext/Context/Context";
import { Link, useParams } from "react-router";
import { FaStar } from "react-icons/fa6";

const GameDetails = () => {
    const { DATA } = use(Context);
    //console.log(DATA);

    const { id } = useParams();
    //console.log(id);
    const filterData = DATA.find(item => item.id == id);
    //console.log(filterData);

    return (
        <div className="w-11/12 h-full mx-auto">
            <div className=" flex gap-2">
                <div className="m-2">
                    <img className="h-60 object-fill" src={filterData?.coverPhoto} alt="" />
                </div>
                <div>
                    <p className=" text-xl lg:text-4xl mt-5 font-semibold bg-linear-to-r from-[#2be9c8] to-[#e056fd] bg-clip-text text-transparent">{filterData?.title}</p>

                    <p className="mt-2 text-sm lg:text-xl font-mono text-white">Devoloped By <span className="underline cursor-pointer text-[#0abde3]">{filterData?.developer}</span></p>
                    <div className="flex text-white text-sm lg:text-xl text-nowrap gap-2 text-center mt-4">
                        {
                            filterData?.category.map(item => <p className="bg-green-600 px-2 lg:px-4 rounded-2xl">{item}</p>)
                        }
                    </div>
                    <p className="mt-4 flex items-center text-xl text-white gap-2"><span className="text-yellow-300"><FaStar size={25} /></span>{filterData?.ratings}</p>
                    <Link target="_blank" to={filterData?.downloadLink} className="btn w-full mt-4 px-10 bg-[#2e86de] border-[#2e86de]">Download</Link>
                </div>
            </div>
            <div>
                <p className="mt-3 ml-3 font-semibold text-2xl text-[#fa983a]">Description</p>
                <p className="mt-3 px-2 text-gray-300 font-medium leading-12 text-wrap text-2xl mb-10 lg:mb-0">{filterData?.description}</p>
            </div>
        </div>
    );
};

export default GameDetails;