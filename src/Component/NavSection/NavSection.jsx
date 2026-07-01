//import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/Picture/logos.png'



const NavSection = () => {

    const links = <>

        <li className="text-xl font-semibold lg:hover:text-[#2be9c8] lg:text-white"><NavLink to='/'>Home</NavLink></li>
        <li className="text-xl font-semibold lg:hover:text-[#2be9c8] lg:text-white"><NavLink to='allgames'>Games</NavLink></li>
        <li className="text-xl font-semibold lg:hover:text-[#2be9c8] lg:text-white"><a>About</a></li>
        <li className="text-xl font-semibold lg:hover:text-[#2be9c8] lg:text-white"><a>Support</a></li>

    </>
    return (
        <div className="w-11/12 mx-auto mt-2">

            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown text-white">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-gray-400 text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex cursor-pointer'>
                        <div>
                            <img className='w-13' src={logo} alt="" />
                        </div>
                        <div className='flex items-center'>
                            <p className='font-bold text-[0.9rem] bg-linear-to-r from-[#2be9c8] to-[#e056fd] bg-clip-text text-transparent lg:text-[1.3rem] flex font-serif'>GAMES ZONE</p>
                        </div>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">


                    <div tabIndex={0} role="button" className="btn mx-4 btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full outline-2 outline-white">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>

                    <a className="btn btn-accent px-7 py-5 font-bold text-[1rem] text-white">Login</a>
                </div>
            </div>



        </div>
    );
};

export default NavSection;