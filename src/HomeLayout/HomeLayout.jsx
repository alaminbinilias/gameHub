//import React from 'react';

import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";
import NavSection from "../Component/NavSection/NavSection";
import hero from "../assets/Picture/heros.jpg"
import './home.css'

const HomeLayout = () => {
    return (
        <div className="h-screen">

            <div
                className="imgs z-0 absolute h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${hero})` }}
            ></div>


            <div className="relative flex flex-col z-20 h-screen border-white">
                <nav>
                    <NavSection></NavSection>
                </nav>
                <main className="h-full flex-1">
                    <Outlet></Outlet>
                </main>
                <section>
                    <Footer></Footer>
                </section>
            </div>
        </div>
    );
};

export default HomeLayout;