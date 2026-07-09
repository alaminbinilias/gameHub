//import React from 'react';

import { createBrowserRouter } from "react-router";
import HomeLayout from "../HomeLayout/HomeLayout";
//import HeroSection from "../Component/HeroSection/HeroSection";
import DynamicSection from "../Component/DynamicSection/DynamicSection";
import LoginSection from "../Component/AuthenticationSection/LoginSection/LoginSection";
import RegistrationSection from "../Component/AuthenticationSection/LoginSection/RegistrationSection/RegistrationSection";
import ProtectedRoutes from "../Component/ProtectedRoutes/ProtectedRoutes";
import AllGamesSection from "../Component/AllGamesSection/AllGamesSection";
import GameDetails from "../Component/GameDetails/GameDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: DynamicSection
            },
            {
                path: '/allgames',
                element: <ProtectedRoutes>
                    <AllGamesSection></AllGamesSection>
                </ProtectedRoutes>,
                loader: () => fetch("/GamesData/Data.json"),
                HydrateFallback: () => <p>Loading...</p>

            },
            {
                path: '/login',
                Component: LoginSection
            },
            {
                path: '/registration',
                Component: RegistrationSection
            },
            {
                path:'/games/details/:id',
                Component:GameDetails
            }
        ]
    }
])

export default router;