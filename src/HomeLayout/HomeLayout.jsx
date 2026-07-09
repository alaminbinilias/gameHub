//import React from 'react';

import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";
import NavSection from "../Component/NavSection/NavSection";
import hero from "../assets/Picture/background.jpg"
import './home.css'

const HomeLayout = () => {
    return (
        <div className="min-h-screen relative z-19">

            <div className="imgs z-0 absolute min-h-screen border- w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${hero})`, height:'100%' }}>                
            </div>


            <div className="min-h-screen relative flex flex-col z-20">
                <nav>
                    <NavSection></NavSection>
                </nav>
                <main className=" w-full h-full flex-1">
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