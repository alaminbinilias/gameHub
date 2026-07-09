//import React from 'react';

// This are Swiper Section

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Popular.css'
import { useEffect, useState } from "react";


// This are Swiper Section

const PopularSection = () => {

    const [Data, SetData] = useState([]);


    useEffect(() => {
        fetch('/GamesData/Data.json').then(res => res.json()).then(data => SetData(data));
    }, [])

    //console.log(Data);
    const filterData = Data.filter(item => item.popular === true);
    //console.log(filterData);
    return (
        <div className="w-11/12 mx-auto">
            <p className='text-white text-center font-semibold mt-9 lg:mt-0 text-5xl'>Popular Games</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 bg-transparent gap-6">
                <div className="left-Section mt-20 h-100">

                    <Swiper

                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"


                        pagination={{
                            clickable: true,
                        }}
                    >

                        {
                            filterData.map(item => <SwiperSlide><img className="object-contain lg:object-cover rounded-2xl h-fullbg-amber-300 flex object-center" src={item?.coverPhoto} alt="" /></SwiperSlide>)
                        }





                        {/* <SwiperSlide className="h-full w-full text-white flex justify-center">Slide 1</SwiperSlide> */}
                    </Swiper>

                </div>
                <div className="right-Section h-full pt-20">
                    <div className="h-full border-2 border-white rounded-2xl px-10 lg:px-40">
                        <div className="flex flex-col items-center w-full mt-3 text-base-content">
                            <p className="px-3 text-center text-[#EAB938] mt-5 font-semibold border border-[#EAB938] rounded-4xl">Level up your inbox</p>
                            <p className="text-white text-center mt-5 font-semibold font-mono text-4xl lg:text-5xl">NEVER MISS A <span className="text-[#FF5A36]">DROP.</span></p>
                            <p className="text-center text-md lg:text-xl text-gray-400">GameZone weekly — reviews, leaks, and the news that actually matters, straight to your inbox every Thursday.</p>
                            <input type="text" placeholder="Player@gamezone.gg" required className="input text-center mx-auto input-error flex mt-3 text-md" />
                            <button className="btn bg-[#FF5A36] flex text-white mx-auto py-3 mt-2 border-[#FF5A36] text-[0.8rem] lg:text-md hover:bg-amber-300 hover:border-amber-300 mb-0">JOIN THE SQUAD</button>
                            <p className="text-gray-500 mt-3 mb-4">One email a week. Unsubscribe anytime.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PopularSection;