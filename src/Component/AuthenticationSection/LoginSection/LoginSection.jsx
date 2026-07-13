//import React from 'react';

import { use, useState } from "react";
import { FaEye, FaGithub, FaGoogle, FaUser } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { LuLockKeyhole } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";
import Context from "../../AuthContext/Context/Context";
import Swal from "sweetalert2";
import { Bounce, toast, ToastContainer } from "react-toastify";

const LoginSection = () => {

    const [spass, Setspass] = useState(false);
    const { userSignIn, resetPassword, googleSignin, GitHubSignIn } = use(Context);
    const [error, seterror] = useState('');
    const [Email, SetEmail] = useState('');

    const HandlePassShow = () => {
        if (spass == false) {
            Setspass(true);
        }
        else {
            Setspass(false);
        }
    }

    //console.log(spass);

    const location = useLocation();
    //console.log(location);
    const navigate = useNavigate();

    const Handlesign = (event) => {
        event.preventDefault();
        seterror('');
        const email = event.target.email.value;
        const pass = event.target.pass.value;
        SetEmail(email);
        //console.log({email,pass});
        userSignIn(email, pass).then(result => {
            const user = result.user;
            user;
            //console.log(user);
            Swal.fire({
                title: "Yahoo!",
                text: "Login Successfully",
                icon: "success"
            });

            event.target.reset();
            {
                location.state ? navigate(location.state) : navigate('/')
            }
            seterror('');
        }).catch(err => {
            if (err.code == 'auth/invalid-credential') {
                seterror('Please enter your correct crediantial');
                return;
            }
        });
        //toast("Wow so easy!");
    }


    ///password_reset
    const handleResetpass = () => {
        if (Email === '') {
            toast.info('Required Email Address & Password', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }
        else {
            resetPassword(Email).then(toast.info('Please Check Your Email Address', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })).catch (err => seterror(err.code));
        }
    }

///googleSignIN
const HandleGoogleSignIn = () => {
    googleSignin().then(result => {
        const user = result.user;
        //console.log(user);
        user;
        seterror('');
        {
            location.state ? navigate(location.state) : navigate('/')
        }
    }).catch(err => seterror(err.code));
}

//GitHubSignIn
const HandleGitHubSignIn = () => {
    GitHubSignIn().then(result => {
        const user = result.user;
        //console.log(user);
        user;
        {
            location.state ? navigate(location.state) : navigate('/')
        }
        seterror('');
    }).catch(err => seterror(err.code));
}


return (
    <div className="w-11/12 mx-auto mb-10">
        <div className="w-full flex justify-center items-center mt-10 lg:mt-10">
            <p className="mt-2 text-white mx-auto text-center text-3xl font-semibold">Login Now!</p>
        </div>
        <ToastContainer />
        <div className="w-full flex justify-center items-center mx-auto mt-4">
            <form onSubmit={Handlesign}>
                <fieldset className="fieldset bg-gray-500 shadow-2xl border-base-300 rounded-box w-100 border p-4">
                    <label className="label text-xl font-semibold text-gray-200">Email</label>
                    <div className="flex items-center">
                        <span className="absolute z-10 px-3 mt-1 text-[0.9rem]"><FaUser /></span>

                        <input type="email" required id='email' className="input text-[1rem] w-full required px-8" placeholder="Email" />
                    </div>

                    <label className="label text-xl font-semibold text-gray-200">Password</label>
                    <div className="flex items-center">
                        <span className="absolute z-10 px-3 mt-1 text-[1rem]"><LuLockKeyhole /></span>

                        <input id="pass" type={spass ? 'text' : 'password'} className="input text-[1rem] w-full px-8" placeholder="password" required />

                        {
                            spass === true ? <span onClick={HandlePassShow} className="-ml-6 text-[0.9rem]  flex justify-center items-center cursor-pointer relative"><FaEye /></span> : <span onClick={HandlePassShow} className="-ml-6 text-[0.9rem]  flex justify-center items-center cursor-pointer relative"><IoMdEyeOff /></span>
                        }
                    </div>
                    <p onClick={handleResetpass} className="text-[0.9rem] text-gray-300 mt-2 cursor-pointer hover:text-sky-400 underline">Forgot Password</p>
                    <button className="btn btn-success mt-1">Login</button>
                    <p className="text-red-300 mt-1">{error}</p>
                    <p className="text-white text-center text-[1rem] mt-1">Don't have account? <Link to='/registration' ><span className="text-sky-400 font-semibold cursor-pointer underline">Sign Up</span></Link> </p>


                    <p className="text-xl text-white text-center w-full">----------or Connect With----------</p>
                    <div className="flex gap-4 justify-center mt-2">
                        <span onClick={HandleGoogleSignIn} className="text-2xl cursor-pointer"><FaGoogle /></span>
                        <span onClick={HandleGitHubSignIn} className="text-2xl cursor-pointer"><FaGithub /></span>
                        {/* <span className="text-2xl cursor-pointer"><FaLinkedin /></span> */}
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
);
};

export default LoginSection;