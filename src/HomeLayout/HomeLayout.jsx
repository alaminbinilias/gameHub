//import React from 'react';

import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";
import NavSection from "../Component/NavSection/NavSection";
import hero from "../assets/Picture/background.jpg"
import './home.css'

const HomeLayout = () => {
    return (
        <div className="min-h-screen relative z-19">

            <div className="imgs z-0 absolute min-h-svh border- w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${hero})`, height:'100%' }}>                
            </div>


            <div className="relative flex flex-col z-20 min-h-svh border-white">
                <nav>
                    <NavSection></NavSection>
                </nav>
                <main className="h-full flex-1">
                    <Outlet></Outlet>
                </main>
                <section className="">
                    <Footer></Footer>
                </section>
            </div>
        </div>
    );
};

export default HomeLayout;