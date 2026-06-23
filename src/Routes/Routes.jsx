//import React from 'react';

import { createBrowserRouter } from "react-router";
import HomeLayout from "../HomeLayout/HomeLayout";
import HeroSection from "../Component/HeroSection/HeroSection";

const router=createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                index:true,
                Component:HeroSection
            }
        ]
    }
])

export default router;