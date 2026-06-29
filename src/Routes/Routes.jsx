//import React from 'react';

import { createBrowserRouter } from "react-router";
import HomeLayout from "../HomeLayout/HomeLayout";
//import HeroSection from "../Component/HeroSection/HeroSection";
import DynamicSection from "../Component/DynamicSection/DynamicSection";

const router=createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                index:true,
                Component: DynamicSection
            }
        ]
    }
])

export default router;