//import React from 'react';

import { use, useState } from "react";
import Context from "../../../AuthContext/Context/Context";
import auth from "../../../FireBase/Firebase.init";
import { sendEmailVerification } from "firebase/auth";

const RegistrationSection = () => {
    const [error, SetError] = useState('');
    const {CreateUser}=use(Context);

    const HandleForm = (event) => {
        event.preventDefault();

        const check=event.target.checkbtn.checked;
        //console.log(check);
        if(check===false){
            SetError("Please accept all term & conditions");
            return;
        }
        else{
            if(check===true){
                SetError("");
            }
        }

        //const name=event.target.name.value;
        //const photo_Url=event.target.photo_url.value;
        const email=event.target.email.value;
        const pass=event.target.pass.value;
        //console.log({name,photo_Url,email,pass});
        CreateUser(email,pass).then(result=>{
            const user=result.user;
            console.log(user);
            sendEmailVerification(auth.currentUser).then(()=>{
                alert(`please verify your email ${user.email}`);
            })
            event.target.reset();
        }).catch(error=>{
            //console.error(error);
            SetError(error.code);
        })
    }


    return (
        <div className="w-11/12 mx-auto mb-10">
            <div className="w-full flex justify-center items-center mt-10 lg:mt-20">
                <p className="mt-2 text-white mx-auto text-center text-3xl font-semibold">Register Now!</p>
            </div>

            <div className="w-full flex justify-center items-center mx-auto mt-4">
                <form onSubmit={HandleForm}>
                    <fieldset className="fieldset bg-gray-500 shadow-2xl border-base-300 rounded-box w-100 border p-4">

                        <label className="label text-xl font-semibold text-gray-200">Name</label>
                        <div className="flex items-center">
                            <input id='name' type="text" required className="input text-[1rem] w-full" placeholder="Name" />
                        </div>

                        <label className="label text-xl font-semibold text-gray-200">Photo Url</label>
                        <div className="flex items-center">
                            <input id='photo_url' type="text" className="input text-[1rem] w-full" placeholder="Photo URL" />
                        </div>


                        <label className="label text-xl font-semibold text-gray-200">Email</label>
                        <div className="flex items-center">
                            <input id='email' type="email" required className="input text-[1rem] w-full" placeholder="Email" />
                        </div>

                        <label className="label text-xl font-semibold text-gray-200">Password</label>
                        <div className="flex items-center">
                            <input id='pass' type="password" required className="input w-full text-[1rem]" placeholder="password" />
                        </div>

                        <div className="flex gap-2 text-white mt-1">
                            <input id='checkbtn' type="checkbox" className="checkbox checkbox-md bg-white" />
                            <p className="text-[1rem]">Accept All term & Conditions</p>
                        </div>

                        <button className="btn btn-success mt-2 text-white font-semibold">Register Now</button>
                        <p className="text-red-300">{error}</p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default RegistrationSection;