//import React from 'react';

import { createBrowserRouter } from "react-router";
import HomeLayout from "../HomeLayout/HomeLayout";
//import HeroSection from "../Component/HeroSection/HeroSection";
import DynamicSection from "../Component/DynamicSection/DynamicSection";
import AllGamesSection from "../Component/AllGamesSection/AllGamesSection";
import LoginSection from "../Component/AuthenticationSection/LoginSection/LoginSection";
import RegistrationSection from "../Component/AuthenticationSection/LoginSection/RegistrationSection/RegistrationSection";

const router=createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                index:true,
                Component: DynamicSection
            },
            {
                path:'/allgames',
                loader:()=>fetch("/GamesData/Data.json"),
                HydrateFallback:()=><p>Loading...</p>,
                Component:AllGamesSection           
            },
            {
                path:'/login',
                Component:LoginSection
            },
            {
                path:'/registration',
                Component:RegistrationSection
            }
        ]
    }
])

export default router;