//import React from 'react';

import chartr from "../../assets/Picture/spider_images.jpg"

const HeroSection = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="flex items-center justify-between">
                <div className="leftSide">
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nostrum recusandae architecto iste nisi molestias atque impedit placeat velit consequuntur.</p>
                </div>
                <div className="rightSide w-full flex justify-end border">
                    <img src={chartr} alt="HeroImages" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;