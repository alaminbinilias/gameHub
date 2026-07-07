//import React from 'react';

import { useState } from "react";
import { FaEye, FaGithub, FaGoogle, FaUser } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { LuLockKeyhole } from "react-icons/lu";
import { Link } from "react-router";

const LoginSection = () => {

    const [spass, Setspass] = useState(false);

    const HandlePassShow = () => {
        if (spass == false) {
            Setspass(true);
        }
        else {
            Setspass(false);
        }
    }

    //console.log(spass);


    return (
        <div className="w-11/12 mx-auto mb-10">
            <div className="w-full flex justify-center items-center mt-10 lg:mt-10">
                <p className="mt-2 text-white mx-auto text-center text-3xl font-semibold">Login Now!</p>
            </div>

            <div className="w-full flex justify-center items-center mx-auto mt-4">
                <form>
                    <fieldset className="fieldset bg-gray-500 shadow-2xl border-base-300 rounded-box w-100 border p-4">
                        <label className="label text-xl font-semibold text-gray-200">Email</label>
                        <div className="flex items-center">
                            <span className="absolute z-10 px-3 mt-1 text-[0.9rem]"><FaUser /></span>

                            <input type="email" required className="input text-[1rem] w-full required px-8" placeholder="Email" />
                        </div>

                        <label className="label text-xl font-semibold text-gray-200">Password</label>
                        <div className="flex items-center">
                            <span className="absolute z-10 px-3 mt-1 text-[1rem]"><LuLockKeyhole /></span>

                            {
                                spass === true ? <input type="text" className="input text-[1rem] w-full px-8" placeholder="password" required /> : <input type="password" required className="input w-full text-[1rem] px-8" placeholder="password" />
                            }

                            {
                                spass === true ? <span onClick={HandlePassShow} className="-ml-6 text-[0.9rem]  flex justify-center items-center cursor-pointer relative"><FaEye /></span> : <span onClick={HandlePassShow} className="-ml-6 text-[0.9rem]  flex justify-center items-center cursor-pointer relative"><IoMdEyeOff /></span>
                            }
                        </div>
                        <p className="text-[0.9rem] text-gray-300 mt-2 cursor-pointer hover:text-sky-400 underline">Forgot Password</p>
                        <button className="btn btn-success mt-1">Login</button>
                        <p className="text-white text-center text-[1rem] mt-1">Don't have account? <Link to='/registration' ><span className="text-sky-400 font-semibold cursor-pointer underline">Sign Up</span></Link> </p>


                        <p className="text-xl text-white text-center w-full">----------or Connect With----------</p>
                        <div className="flex gap-4 justify-center mt-2">
                            <span className="text-2xl cursor-pointer"><FaGoogle /></span>
                            <span className="text-2xl cursor-pointer"><FaGithub /></span>
                            {/* <span className="text-2xl cursor-pointer"><FaLinkedin /></span> */}
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LoginSection;