//import React from 'react';
import logo from '../../assets/Picture/logo.jpg'



const NavSection = () => {

    const links = <>

        <li className="text-xl font-semibold lg:text-white"><a>Home</a></li>
        <li className="text-xl font-semibold lg:text-white"><a>Games</a></li>
        <li className="text-xl font-semibold lg:text-white"><a>About</a></li>
        <li className="text-xl font-semibold lg:text-white"><a>Support</a></li>

    </>
    return (
        <div className="w-11/12 mx-auto pt-1">

            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown text-white">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-white text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div><img className=' h-12 lg:h-15 bg-white' src={logo} alt="" /></div>
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