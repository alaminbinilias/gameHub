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

    const [Data,SetData]=useState([]);


    useEffect(()=>{
        fetch('/GamesData/Data.json').then(res=>res.json()).then(data=>SetData(data));
    },[])

    //console.log(Data);
    const filterData=Data.filter(item=>item.popular===true);
    console.log(filterData);
    return (
        <div className="w-11/12 mx-auto">
            <p className='text-white text-center font-semibold mt-9 lg:mt-0 text-5xl'>Popular Games</p>

            <div className="grid grid-cols-2 bg-transparent">
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
                            filterData.map(item=><SwiperSlide><img className="object-contain rounded-2xl h-full w-full" src={item?.coverPhoto} alt="" /></SwiperSlide>)
                        }





                        {/* <SwiperSlide className="h-full w-full text-white flex justify-center">Slide 1</SwiperSlide> */}
                    </Swiper>

                </div>
                <div className="right-Section">

                </div>
            </div>
        </div >
    );
};

export default PopularSection;